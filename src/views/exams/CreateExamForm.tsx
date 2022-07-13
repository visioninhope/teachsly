import { Button, Text, Stack, Accordion, AccordionItem, AccordionButton, AccordionIcon, Box, AccordionPanel, Container, Flex, HStack, Input as ChakraInput, Select as ChakraSelect, List, ListItem, ListIcon } from '@chakra-ui/react'
import { ChangeEvent, useCallback, useContext, useEffect, useState } from 'react'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { AiFillDelete, AiOutlinePlus, AiFillFile } from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom'
import { ConfirmationDialog } from '../../components/AlertDialog/ConfirmationDialog'
import { Input } from '../../components/Inputs/Input'
import { Select } from '../../components/Inputs/Select'
import { defaultExamForm, defaultExamTimerOptions, defaultQuestionPool } from '../../constants/Exams'
import { UserDashboardContext } from '../../contexts/UserDashboardContext'
import { useUserGroups } from '../../hooks/useUserGroups'
import { ExamForm, TimerGranularity } from '../../interfaces/Exams'
import { ToastNotification } from '../../observables/ToastNotification'
import ExamService from '../../services/ExamService'
import { generalGroups } from '../../utils/CognitoGroupsUtils'
import { renderCourseList } from '../../utils/CourseUtils'
import { formatAPIResponse } from '../../utils/ExamUtils'
import { translate } from '../../utils/LanguageUtils'
import { QuestionPoolQuestions } from './QuestionPoolQuestions'
import { TranslationsDictionary } from '../../dictionaries/dictionary'
import { FileUploader } from '../../components/Inputs/FileUploader'
import StorageService from '../../services/aws/StorageService'
import { removeExtension } from '../../utils/StringUtils'
import { EditableInputComponent } from '../../components/Inputs/EditableInput'

export const CreateExamForm = () => {
  const [showDeleteQuestionPoolConfirmation, setShowDeleteQuestionPoolConfirmation] = useState(false)
  const [questionPoolIndexToDelete, setQuestionPoolIndexToDelete] = useState(-1)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { groups } = useUserGroups()
  const { context: { courses } } = useContext(UserDashboardContext)
  const formControls = useForm<ExamForm>({ defaultValues: defaultExamForm })
  const { handleSubmit, control, reset, watch, setValue, register } = formControls
  const navigate = useNavigate()

  const { examId } = useParams()
  const { timer } = watch()

  const fetchExamById = useCallback(async () => {
    if (!examId) {
      return
    }

    const examResponse = await ExamService.getExamById(examId)

    const examForm: ExamForm | undefined = formatAPIResponse(examResponse, courses)

    if (!examForm) {
      return
    }

    reset(examForm)
  }, [examId, courses, reset])

  useEffect(() => {
    fetchExamById()
  }, [examId, fetchExamById])

  const saveExam = async (exam: ExamForm) => {
    // const isEmptyFields =  existEmptyFields(exam)

    // if (isEmptyFields) {
    //   ToastNotification({
    //     description: 'EXAM_EMPTY_FIELD_WARNING',
    //     status: 'INFO'
    //   })
    //   return
    // }

    setIsLoading(true)

    const examResponse = examId ? await ExamService.updateExam(exam) : await ExamService.createExam(exam)
    let toastDescription: TranslationsDictionary

    if (examId) {
      // Update exam
      toastDescription = examResponse ? 'UPDATE_EXAM_SUCCESS' : 'UPDATE_EXAM_ERROR'
    } else {
      // Create exam
      toastDescription = examResponse ? 'CREATE_EXAM_SUCCESS' : 'CREATE_EXAM_ERROR'
    }

    ToastNotification({
      description: toastDescription,
      status: examResponse ? 'SUCCESS' : 'ERROR'
    })
    setIsLoading(false)
    navigate('/exams')
  }

  const { fields: questionPools, update, remove, append } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'questionPools' // unique name for your Field Array
  })

  const onDeleteQuestionPool = (questionPoolIndex: number) => {
    if (questionPools.length === 1) {
      ToastNotification({
        description: 'DELETE_LAST_QUESTIONS_POOL_ERROR',
        status: 'INFO'
      })
      return
    }

    setQuestionPoolIndexToDelete(questionPoolIndex)
    setShowDeleteQuestionPoolConfirmation(true)
  }

  const deleteQuestionPool = () => {
    setShowDeleteQuestionPoolConfirmation(false)
    remove(questionPoolIndexToDelete)
  }

  const onAddQuestionPool = () => {
    append(defaultQuestionPool)
  }

  const onChangeFile = async (questionPoolIndex: number, e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      return
    }

    const uploadFile = await StorageService.uploadToS3(file)

    if (uploadFile?.key) {
      update(questionPoolIndex, {
        ...questionPools[questionPoolIndex],
        attachments: [...questionPools[questionPoolIndex].attachments, {
          name: removeExtension(file.name),
          path: uploadFile.key
        }]
      }
      )
    }
  }

  const onDeleteAttachment = (questionPoolIndex: number, attachmentIndex: number) => {
    const newAttachments = questionPools[questionPoolIndex].attachments.filter((attachment, index) => index !== attachmentIndex)

    update(questionPoolIndex, {
      ...questionPools[questionPoolIndex],
      attachments: newAttachments
    })
  }

  const updateAttachment = (questionPoolIndex: number, attachmentIndex: number, newValue: string) => {
    const updatedAttachments = [...questionPools[questionPoolIndex].attachments]
    const attachment = questionPools[questionPoolIndex].attachments.find((attachment, index) => index === attachmentIndex)

    if (!attachment) {
      return
    }

    attachment.name = newValue
    updatedAttachments[attachmentIndex] = attachment

    update(questionPoolIndex, {
      ...questionPools[questionPoolIndex],
      attachments: updatedAttachments
    })
  }

  const onChangeTime = (e: ChangeEvent<HTMLSelectElement>) => {
    const granularity = e.target.value

    if (Number(granularity) === TimerGranularity.SECONDS) {
      setValue('timer.timeInSeconds', timer.timeInSeconds * 60)
    } else if (Number(granularity) === TimerGranularity.MINUTES) {
      setValue('timer.timeInSeconds', timer.timeInSeconds / 60)
    }
  }

  return (
    <>
      <FormProvider {...formControls}>
        <form onSubmit={handleSubmit(saveExam)}>
          <Stack spacing={4}>
            <Input
              name="title"
              label="TITLE"
              isRequired={true}
              placeholder={translate('TITLE')}
            />
            <Select
              name="groups"
              label="GROUP_MULTI_SELECT_TITLE"
              placeholder={translate('COURSES')}
              isRequired={true}
              options={renderCourseList(groups, generalGroups)}
              isMultiSelect
              closeMenuOnSelect={true}
            />

            <Flex>
              <Input
                name="startDate"
                label="EXAM_START_DATE"
                isRequired={true}
                placeholder={translate('EXAM_START_DATE')}
                type="datetime-local"
              />
              <Input
                name="deadline"
                label="EXAM_DEADLINE"
                isRequired={true}
                placeholder={translate('EXAM_DEADLINE')}
                type="datetime-local"
              />
            </Flex>

            <Select
              name="timer.type"
              label="EXAM_TIME_TYPE"
              placeholder={translate('EXAM_TIME_TYPE')}
              isRequired={true}
              options={defaultExamTimerOptions}
              isMultiSelect={false}
              closeMenuOnSelect={true}
            />

            <HStack spacing={1}>
              <ChakraSelect maxW={'20%'} onChange={(e) => onChangeTime(e)}>
                <option value={TimerGranularity.MINUTES}>Minutos</option>
                <option value={TimerGranularity.SECONDS}>Segundos</option>
              </ChakraSelect>
              <ChakraInput
                type='number'
                {...register('timer.timeInSeconds', { required: true })}
              />
            </HStack>

            <ConfirmationDialog
              isOpen={showDeleteQuestionPoolConfirmation}
              onClose={() => setShowDeleteQuestionPoolConfirmation(false)}
              title='DELETE_QUESTIONS_POOL_TITLE'
              description='DELETE_QUESTIONS_POOL_DESCRIPTION'
              confirmButtonText={'DELETE'}
              onAction={deleteQuestionPool}
            />

            <Accordion allowMultiple>
              {questionPools?.map((questionPool, questionPoolIndex) => {
                return (
                  <AccordionItem boxShadow='md' key={questionPoolIndex} marginY={5}>
                    <h2>
                      <AccordionButton display='flex' justifyContent="space-between" flexDir='row'>
                        <Text fontWeight='bold'>{translate('EXERCISE')} #{questionPoolIndex + 1}</Text>
                        <Box display='flex' alignItems='center' gap={3}>
                          <Button
                            onClick={() => onDeleteQuestionPool(questionPoolIndex)}
                          >
                            <AiFillDelete />
                          </Button>
                          <AccordionIcon />
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel paddingY={4}>
                      <Stack spacing={4}>
                        <Input
                          name={`questionPools.${questionPoolIndex}.exerciseExplanation`}
                          label="EXERCISE_EXPLANATION"
                          isRequired={false}
                        />
                        <Input
                          name={`questionPools.${questionPoolIndex}.exerciseDescription`}
                          label="EXERCISE_DESCRIPTION"
                          isRequired={false}
                        />

                        <FileUploader
                          name="file"
                          onChange={(e) => onChangeFile(questionPoolIndex, e)}
                          label="ATTACH_FILE"
                        />

                        {questionPool.attachments.length > 0 && (
                          <>
                            <Text fontWeight='bold'>{translate('MEANINGFUL_FILE_NAMES')}</Text>
                            <List spacing={3}>
                              {questionPool.attachments.map((attachment, attachmentIndex) => (
                                <ListItem key={attachmentIndex}>
                                  <Flex gap={1} alignItems='center'>
                                  <ListIcon as={AiFillFile} />
                                  <EditableInputComponent
                                    value={attachment.name}
                                    onComplete={(newValue) => updateAttachment(questionPoolIndex, attachmentIndex, newValue)}
                                    onDelete={() => onDeleteAttachment(questionPoolIndex, attachmentIndex)}
                                    permissions={{
                                      canEdit: true,
                                      canDelete: true
                                    }}
                                  />
                                  </Flex>
                                </ListItem>
                              ))}
                            </List>
                          </>
                        )}
                      </Stack>
                      <QuestionPoolQuestions
                        questionPoolIndex={questionPoolIndex}
                        questionPool={questionPool}
                        updateFn={update}
                      />
                    </AccordionPanel>
                  </AccordionItem>
                )
              })}
            </Accordion>
            <Container centerContent maxW='100%' display='flex' flexDirection='row' gap={5} justifyContent='center'>
              <Button
                leftIcon={<AiOutlinePlus />}
                marginTop={5}
                onClick={() => onAddQuestionPool()}
                colorScheme='brand'
                variant='solid'>
                {translate('ADD_QUESTION_POOL')}
              </Button>
              <Button
                leftIcon={<AiOutlinePlus />}
                isLoading={isLoading}
                marginTop={5}
                colorScheme='brand'
                variant='solid'
                type='submit'
              >
                {translate(examId ? 'UPDATE_EXAM' : 'CREATE_EXAM')}
              </Button>
            </Container>
          </Stack>
        </form>
      </FormProvider>
    </>
  )
}
