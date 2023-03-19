/* eslint-disable no-unused-vars */
export type TranslationsDictionary =
  | keyof typeof LanguageEN
  | keyof typeof LanguageES;

export enum LanguageES {
  DISABLED_ACCOUNT_ALERT_TITLE = 'Tu cuenta ha sido desactivada.',
  DISABLED_ACCOUNT_ALERT_DESCRIPTION = 'Por favor, comunicate con nosotros para más información.',
  DEACTIVATED_USER = 'Usuario deshabilitado',
  DEACTIVATED_USER_BUTTON = 'Desactivar usuario',
  DEACTIVATED_USER_DESCRIPTION = 'El usuario dejará de tener acceso a la plataforma y a todos sus contenidos.',
  ACTIVE_USER_BUTTON = 'Activar usuario',
  ACTIVE_USER_DESCRIPTION = 'El usuario volverá a tener acceso a la plataforma y a todos sus contenidos.',
  USER_UPDATE_SUCCESS = 'El usuario ha sido actualizado correctamente.',
  USER_UPDATE_ERROR = 'Hubo un problema al editar el usuario. Por favor, intentar de nuevo.',
  SUCCESS = '🚀 Genial!',
  ERROR = '🤦 Oops!',
  INFO = '',
  CREATE_STUDENT_BUTTON = 'Crear estudiante',
  CREATE_TEACHER_BUTTON = 'Crear profesor',
  NAME = 'Nombre completo',
  CANCEL = 'Cancelar',
  PHONE_NUMBER = 'Número de telefono',
  PROCESSING = 'Procesando...',
  PASSWORD = 'Contraseña',
  EMAIL = 'Email',
  COURSES = 'Cursos',
  STUDENT_CREATED_MESSAGE = 'Nuevo alumno cargado exitosamente,',
  USER_CREATED_ERROR = 'Hubo un problema al cargar el usuario. Por favor, intentar de nuevo',
  TEACHER_CREATED_MESSAGE = 'Nuevo profesor cargado exitosamente.',
  COURSE_CREATED_MESSAGE = 'Se agregó correctamente un nuevo curso a la platforma.',
  COURSE_UPDATED_SUCCESS = 'El curso se actualizó correctamente.',
  COURSE_NAME = 'Nombre del curso',
  COURSE_DATES = 'Dias del curso',
  COURSE_SCHEDULE = 'Horario de inicio',
  COURSE_END_SCHEDULE = 'Horario de finalización',
  CREATE_COURSE_BUTTON = 'Crear Curso',
  CREATE_COURSE_MODAL_TITLE = 'Creación de Curso',
  MEDIA_UPLOAD_MODAL_TITLE = 'Subir contenido',
  TITLE = 'Titulo',
  DESCRIPTION = 'Descripcion',
  TYPE = 'Tipo de contenido',
  MEDIA_GROUPS = 'Cursos con acceso a este contenido',
  CREATE_MEDIA_BUTTON = 'Subir contenido',
  UPDATE_MEDIA_BUTTON = 'Editar contenido',
  EDIT_TEACHER_BUTTON = 'Editar profesor',
  EDIT_STUDENT_BUTTON = 'Editar estudiante',
  UPDATE_COURSE_BUTTON = 'Editar curso',
  MEDIA_CREATED_MESSAGE = 'El contenido se cargo exitosamente a la plataforma.',
  MEDIA_CREATED_FAILED_MESSAGE = 'No se pudo cargar el contenido correctamente. Por favor, intentar nuevamente.',
  MEDIA_UPDATED_MESSAGE = 'El contenido ha sido actualizado correctamente.',
  MEDIA_UPDATED_ERROR_MESSAGE = 'Ocurrió un error al actualizar el contenido. Por favor, intentar nuevamente.',
  DAYS_OF_THE_WEEK = 'Lunes,Martes,Miercoles,Jueves,Viernes,Sabado',
  GROUP_MULTI_SELECT_TITLE = 'Cursos/Grupos que tendrán acceso a este contenido',
  ATTACH_FILE = 'Adjuntar archivo',
  REVIEW_PERMISSIONS = 'Revisa los permisos del contenido antes de continuar',
  ALLOW_ACCESS_MEDIA = 'tendrán acceso a este contenido.',
  MEDIA_DELETED = 'El contenido ha sido eliminado correctamente.',
  SEE_CONTENT = 'Ver contenido',
  DELETE_MEDIA_TITLE = 'Eliminar contenido',
  DELETE_MEDIA_CONFIRMATION_MESSAGE = 'Desea eliminar este contenido?',
  DOWNLOAD = 'Descargar',
  EDIT = 'Editar',
  DELETE = 'Eliminar',
  LOAD_MORE = 'Cargar mas',
  CLOSE = 'Cerrar',
  CONTENT = 'Contenido',
  EDITING = 'Editando',
  VIRTUAL_COURSE = 'Curso virtual',
  ADD_COURSE_BUTTON = 'Nuevo curso',
  COURSE_LINK_HELPER = 'Ingresar link del accesso al curso solo si es virtual',
  COURSE_LINK = 'Link de acceso',
  COMMENTARIES = 'Comentarios',
  MEDIA_LINK_DESCRIPTION = 'Link del contenido',
  CREATE_STUDENT_MODAL_TITLE = 'Nuevo estudiante',
  CREATE_TEACHER_MODAL_TITLE = 'Nuevo profesor',
  SIGN_OUT = 'Cerrar sesión',
  MENU_HOME = 'Inicio',
  MENU_CONTENTS = 'Contenidos',
  MENU_COURSES = 'Cursos',
  MENU_TEACHERS = 'Profesores',
  MENU_STUDENTS = 'Estudiantes',
  MENU_PAYMENTS = 'Pagos',
  NO_CONTENT_TILE = 'Sin resultados',
  NO_CONTENT_DESCRIPTION = 'No hay resultados para esta busqueda.',
  UPLOADED_BY = 'Subido por',
  PHONE_NUMBER_HELPER_TEXT = 'Código de país + código de área + número de teléfono. Sin + ni espacios.',
  ON_SITE_CLASS = 'Presencial',
  COURSE_YEAR = 'Año de cursada',
  GO_TO_VIRTUAL_CLASS = 'Ir a la clase virtual',
  GO_TO_STUDENTS_LIST = 'Ver lista de estudiantes',
  LOADING = 'Cargando...',
  VIEW_STUDENTS = 'Ver estudiantes',
  VIEW_MEDIAS = 'Ver contenidos',
  CREATE_FOLDER = 'Crear carpeta',
  DRAG_AND_DROP_HELPER_TEXT = 'Arrastra y suelta los archivos aquí',
  DRAG_AND_DROP_HELPER_TEXT_2 = 'o clickea para seleccionar los archivos',
  MEDIA_SIGNED_URL_ERROR = 'Hubo un error al generar el link del contenido. Por favor, intentar nuevamente.',
  REVIEW_FILES = 'Revisar archivos',
  DRAWER_NAME_INFORMATION_ALERT = 'Verificar que los archivos tengan el nombre correcto y secriptivo para que los alumnos lo puedan encontrar facilmente.',
  PASSWORD_RESET_SUCCESS = 'La contraseña se ha reseteado exitosamente.',
  PASSWORD_RESET_ERROR = 'Hubo un error al resetear la contraseña. Por favor, intentar nuevamente.',
  RESET_PASSWORD_BUTTON = 'Resetear contraseña',
  FOLDER = 'Carpeta',
  UPLOAD_FOLDER = 'Subir carpeta',
  UPDATE_FOLDER = 'Actualizar carpeta',
  UPDATE_MEDIA_FOLDER_SUCCESS = 'La carpeta se actualizó correctamente.',
  UPDATE_MEDIA_FOLDER_FAILURE = 'Hubo un error al actualizar la carpeta. Por favor, intentar nuevamente.',
  EDIT_FOLDER = 'Editar carpeta',
  CREATE_MEDIA_FOLDER_SUCCESS = 'La carpeta se creó correctamente.',
  CREATE_MEDIA_FOLDER_FAILURE = 'Hubo un error al crear la carpeta. Por favor, intentar nuevamente.',
  FOLDER_GROUPS_HELPER_TEXT = 'Los permisos de este contenido serán los mismos que los de la carpeta que lo contiene. Para modificarlos, se debe modificar los permisos de la carpeta.',
  NO_FOLDER_EDIT_PERMISSION_TITLE_MESSAGE = 'Solo puedes editar la información de las carpetas que hayas creado.',
  DELETE_FOLDER = 'Eliminar carpeta',
  DELETE_FOLDER_DESCRIPTION = 'Eliminar la carpeta y todos sus contenidos.',
  DELETE_ONLY_FOLDER_DESCRIPTION = 'Eliminar la carpeta pero no sus contenidos.',
  DELETE_ONLY_FOLDER_HELPER_TEXT = 'Si seleccionas esta opción, los contenidos de la carpeta seguirán disponibles en la plataforma.',
  DELETE_FOLDER_PLACEHOLDER = 'Escribe el nombre de la carpeta para confirmar su eliminación:',
  FOLDER_DELETED = 'La carpeta se eliminó correctamente.',
  FOLDER_DELETE_FAILED = 'Hubo un error al eliminar la carpeta. Por favor, intentar nuevamente.',
  NOT_RECOMMENDED_MEDIA_TYPES_WORDING = 'Para facilitar el uso y la descarga de contenidos los archivos deberán subirse en los siguientes formatos',
  FILES_WITH_INFORMATION_TITLE = 'Archivos con información (documentos de Word, diapositivas, hojas de cálculo, etc.)',
  FILES_WITH_INFORMATION_FORMAT = '.PDF',
  AUDIOS_TITLE = 'Audios de todo tipo',
  AUDIOS_FORMAT = '.MP3; .WAV; ó .OGG',
  VIDEOS_TITLE = 'Videos de todo tipo',
  VIDEOS_FORMAT = '.MP4 ó .MOV',
  NOT_RECOMMENDED_MEDIA_TYPES_FINAL_WORDING = 'No se deberán subir archivos comprimidos .RAR o .ZIP ya que dificultan la descarga para los estudiantes. En caso de que desee subir varios archivos, se recomienda crear una nueva carpeta.',
  NOT_RECOMMENDED_MEDIA_TYPES_TABLE_TITLE_1 = 'Contenido',
  NOT_RECOMMENDED_MEDIA_TYPES_TABLE_TITLE_2 = 'Formato recomendado',
  EXAMS = 'Exámenes',
  QUESTION = 'Pregunta',
  OPTION = 'Opción',
  ADD_OPTION_BUTTON = 'Agregar opción a la pregunta #',
  ADD_QUESTION_BUTTON = 'Agregar nueva pregunta',
  ADD_FIRST_QUESTION = 'Agregar primera pregunta',
  ADD_QUESTION_POOL = 'Agregar ejercicio',
  DELETE_QUESTIONS_POOL_TITLE = 'Eliminar pool de preguntas',
  DELETE_QUESTIONS_POOL_DESCRIPTION = 'Confirmar la eliminación del pool de preguntas.',
  DELETE_LAST_QUESTIONS_POOL_ERROR = 'No puedes eliminar el último pool de preguntas.',
  CREATE_EXAM = 'Crear examen',
  EXAM_EMPTY_FIELD_WARNING = 'Hay prguntas u opciones vacías. Por favor, llenar todos los campos.',
  EXAM_DEADLINE = 'Fecha límite',
  EXAM_START_DATE = 'Fecha de inicio',
  EXAM_TIME = 'Tiempo (segundos)',
  EXAM_TIME_TYPE = 'Tipo de temporizador',
  EXAM_GLOBAL_TIME = 'Tiempo global (los alumnos tendrán un tiempo total para resolver el exámen)',
  EXAM_QUESTION_TIME = 'Tiempo por pregunta (los alumnos tendrán un tiempo por pregunta para resolver el exámen)',
  UPDATE_EXAM = 'Actualizar examen',
  UPDATE_EXAM_SUCCESS = 'El examen se actualizó correctamente.',
  UPDATE_EXAM_ERROR = 'Hubo un error al actualizar el examen. Por favor, intentar nuevamente.',
  CREATE_EXAM_SUCCESS = 'El examen se creó correctamente.',
  CREATE_EXAM_ERROR = 'Hubo un error al crear el examen. Por favor, intentar nuevamente.',
  NEW_EXAM = 'Nuevo examen',
  EXAM_INTRO_WORDING_1 = 'Estás por comenzar la actividad. Por favor, asegurate de tener buena conexión a internet y el tiempo suficiente para realizarlo.',
  EXAM_INTRO_WORDING_2 = 'Una vez comenzado el exámen, no podrás cancelarlo. Si lo abandonas, no podrás volver a recuperarlo y se corregirá como desaprobado.',
  EXAM_INTRO_WORDING_2_WITH_RETAKE='Esta actividad permite el reintento en caso de que no puedas completarlo. Si lo abandonas, podrás volver a recuperarlo',
  EXAM_DURATION = 'Duración del examen',
  AUDIO_FILE = 'Archivo de audio',
  EXERCISE_EXPLANATION = 'Explicación del ejercicio',
  EXERCISE_DESCRIPTION = 'Descripción del ejercicio',
  EXERCISE = 'Ejercicio',
  MEANINGFUL_FILE_NAMES = "Nombrar a los archivos de una forma intuitiva para su debida identificación. Ex: 'Reading Exercise 1'",
  EXAM_ATTEMPTS = 'Exámenes realizados',
  NOT_FINISHED = 'No finalizado',
  FINISHED_DATE = 'Fecha de finalización',
  STATUS = 'Estado',
  FINISHED = 'Completado',
  WITH_SELF_CORRECTION = 'Corrección automática',
  WITH_OUT_SELF_CORRECTION = 'Corrección manual pendiente',
  WORDS_COUNT = 'Número de palabras',
  YES = 'Sí',
  NO = 'No',
  CORRECT_ANSWER = 'Respuesta correcta?',
  NUMBER_OF_CORRECT_ANSWERS = 'Número de respuestas correctas auto-coregidas',
  ALL = 'Todos',
  FINISHED_EXAMS = 'Exámenes finalizados',
  NOT_FINISHED_EXAMS = 'Exámenes no completados',
  EXAM_ATTEMPT_DELETED_OK = 'El intento de examen se eliminó correctamente. El alumno puede volver a realizarlo.',
  EXAM_ATTEMPT_DELETED_ERROR = 'Hubo un error al eliminar el intento de examen. Por favor, intentar nuevamente.',
  DELETE_EXAM_ATTEMPT_CONFIRMATION_TITLE = 'Eliminar intento de examen',
  DELETE_EXAM_ATTEMPT_CONFIRMATION_DESCRIPTION = 'Al eliminar el intento de examen, el alumno podrá volver a realizarlo.',
  MANUAL_CORRECTION = 'Corrección manual realizada',
  SEARCH_BY_STUDENT_NAME = 'Buscar por nombre de alumno',
  EXAMS_NOT_CORRECTED = 'Exámenes no corregidos',
  EXAM_TEACHER_COMMENTS = 'Comentarios del docente',
  COMMENTS = 'Comentarios o aclaraciones...',
  FINISH_CORRECTION = 'Finalizar corrección',
  FINAL_MARK = 'Nota final',
  PENDING_CORRECTION_WARNING = 'La nota recomendada se calculará cuando no haya preguntas pendientes por corregir.',
  CORRECTION_SUCCESS = 'La corrección se realizó correctamente.',
  CORRECTION_ERROR = 'Hubo un error al realizar la corrección. Por favor, intentar nuevamente.',
  CORRECTED = 'Corregido',
  NOT_CORRECTED = 'No corregido',
  CORRECT_ANSWERS = 'Respuestas correctas',
  CORRECTED_BY = 'Corregido por',
  NOT_COMPLETED= 'No completado',
  COMPLETED = 'Pendiente de corrección',
  REALIZED_BY= 'Realizado por',
  OUTDATED = 'Pasados',
  PENDING= 'Pendientes',
  LEVEL= 'Nivel',
  NOT_DEFINED= 'No definido',
  ALL_COURSES= 'Todos los cursos',
  CORRECTION= 'Corrección',
  RIGHT_ANSWERS= 'Respuestas correctas',
  WITH_OUT_CORRECTION= 'Sin corrección',
  RECOMMENDED_MARK= 'Nota recomendada',
  DELETE_ACCOUNT= 'Eliminar cuenta',
  USER_DELETED_MESSAGE= 'El usuario se eliminó correctamente.',
  USER_DELETED_ERROR= 'Hubo un error al eliminar el usuario. Por favor, intentar nuevamente.',
  DELETE_ACCOUNT_BUTTON= 'Eliminar cuenta',
  DELETE_ACCOUNT_WARNING= 'Al eliminar la cuenta, se eliminarán todos los datos relacionados con ella. No podrás recuperarla.',
  NEW= 'Nuevo',
  ALLOW_RE_TAKE_EXAM= 'Permitir re-intentos',
  EXAM_SETTINGS= 'Configuración del examen',
  HOMEWORK= 'Tareas',
  HOMEWORK_DONE= 'Tareas realizadas',
  NEW_HOMEWORK= 'Nueva tarea',
  CREATE_HOMEWORK= 'Crear tarea',
  UPDATE_HOMEWORK= 'Actualizar tarea',
  RETAKE_EXAM_WARNING='Ya has realizado un intento de este examen. No puedes volver a hacerlo.',
  START= 'Comenzar',
  COMING_SOON= 'Próximamente',
  QUESTION_CONFIGURATION='Configuración de la pregunta',
  TEXT= 'Texto',
  ANSWER_CONFIGURATION='Configuración de la respuesta',
  QUESTION_TYPE= 'Tipo de pregunta',
  ANSWER_TYPE='Tipo de respuesta',
  MULTIPLE_CHOICE= 'Multiple choice',
  TEXT_AREA= 'A desarrollar',
  SAVE='Guardar',
  BLOCKS= 'Bloques',
  GRAMMAR_CORRECTION= 'Corrección gramatical',
  SPELLING_CORRECTION= 'Corrección ortográfica',
  PUNCTUATION_CORRECTION= 'Corrección de puntuación',
  VOCABULARY_CORRECTION= 'Corrección de vocabulario',
  STYLE_CORRECTION= 'Corrección de estilo',
  SUGGESTIONS= 'Sugerencias / Comentarios',
  CORRECTION_PREVIEW= 'Vista previa de la corrección',
  RESET_CORRECTION='Reiniciar correcion',
  LESSON_PLAN= 'Cronograma de clases',
  COURSE_DETAILS='Detalles del curso',
  NEW_LESSON_PLAN= 'Nuevo cronograma de clases',
  UPDATE_LESSON_PLAN= 'Actualizar cronograma de clases',
  DELETE_LESSON_PLAN= 'Eliminar cronograma de clases',
  CREATE_LESSON_PLAN= 'Crear cronograma',
  LESSON_SUCCESS= 'El cronograma se creó correctamente.',
  LESSON_ERROR= 'Hubo un error al crear el cronograma. Por favor, intentar nuevamente.',
  LESSON_UPDATE_SUCCESS= 'El cronograma se actualizó correctamente.',
  LESSON_UPDATE_ERROR= 'Hubo un error al actualizar el cronograma. Por favor, intentar nuevamente.',
  OUT_OF_DEADLINE= 'Fuera de término',
  USEFUL_LINKS= 'Links útiles',
  LESSON_PLAN_TITLE='Cronograma',
  COURSES_ARCHIVE= 'Cursos pasados',
  NO_ACTIVE_COURSES= 'No hay cursos activos',
  NO_ACTIVE_COURSES_DESCRIPTION= 'No hay cursos activos para mostrar.',
  EXAM_ATTACHMENT_HELPER='Este archivo adjunto estará visible para todas las preguntas del ejercicio número #',
  CONTACT_US= 'Contactanos',
  SELECTED_ELEMENTS= 'elementos seleccionados.',
  MOVE_CONTENTS_TO= 'Mover contenidos a',
  MOVE= 'Mover',
  BULK_UPDATE_OK= 'Los contenidos se movieron correctamente.',
  BULK_UPDATE_ERROR= 'Hubo un error al mover los contenidos. Por favor, intentar nuevamente.',
  SELECT_FOLDER= 'Seleccionar carpeta',
  NO_FOLDER= 'Sin carpeta',
  BULK_DELETE_OK= 'Los contenidos se eliminaron correctamente.',
  BULK_DELETE_ERROR= 'Hubo un error al eliminar los contenidos. Por favor, intentar nuevamente.',
  MEDIA_BULK_DELETE_TITLE='Eliminar contenidos',
  MEDIA_BULK_DELETE_DESCRIPTION='¿Estás seguro que deseas eliminar los contenidos seleccionados?',
  MOVE_TO_FOLDER= 'Mover de carpeta',
  DELETE_CONTENTS= 'Eliminar contenidos',
  CLASS_RECORDING = 'Grabación de clase',
  GO_TO_CLASS = 'Ir a la clase',
  YOUR_CLASS = 'Tu clase',
  BEGINS= 'comienza',
  AT='a las',
  TODAY= 'hoy',
  TOMORROW= 'mañana',
}

export enum LanguageEN {
  DISABLED_ACCOUNT_ALERT_TITLE = 'Your account has been disabled.',
  DISABLED_ACCOUNT_ALERT_DESCRIPTION = 'Please, contact us for further information.',
  DEACTIVATED_USER = 'Deactivated user',
  DEACTIVATED_USER_BUTTON = 'Deactivate user',
  ACTIVE_USER_BUTTON = 'Activate user',
  ACTIVE_USER_DESCRIPTION = 'The user will have access to the platform and its contents',
  DEACTIVATED_USER_DESCRIPTION = 'The user will not have access to the platform and its contents.',
  USER_UPDATE_SUCCESS = 'The Student has been successfully edited.',
  USER_UPDATE_ERROR = 'An error has occurred when updating the user. Please try again',
  SUCCESS = '🚀 Great!',
  ERROR = '🤦 Oops!',
  INFO = '',
  CREATE_STUDENT_BUTTON = 'Create student',
  CREATE_TEACHER_BUTTON = 'Create teacher',
  NAME = 'Full name',
  PHONE_NUMBER = 'Phone number',
  CANCEL = 'Cancel',
  PROCESSING = 'Working on it',
  PASSWORD = 'Password',
  EMAIL = 'Email',
  COURSES = 'Courses',
  STUDENT_CREATED_MESSAGE = 'The Student has been successfully created.',
  TEACHER_CREATED_MESSAGE = 'New Teacher has been successfully created',
  COURSE_CREATED_MESSAGE = 'A new course has been added to the platform.',
  COURSE_NAME = 'Course name',
  COURSE_DATES = 'Course days',
  COURSE_SCHEDULE = 'Start time',
  COURSE_END_SCHEDULE = 'End time',
  EXAM_INTRO_WORDING_2_WITH_RETAKE= 'You can retake the exam if you want.',
  COURSE_UPDATED_SUCCESS = 'The Course has been successfully updated',
  CREATE_COURSE_BUTTON = 'Create Course',
  CREATE_COURSE_MODAL_TITLE = 'Course creation',
  MEDIA_UPLOAD_MODAL_TITLE = 'Upload media',
  TITLE = 'Title',
  DESCRIPTION = 'Description',
  TYPE = 'Content type',
  MEDIA_GROUPS = 'Courses with access to this content',
  CREATE_MEDIA_BUTTON = 'Upload content',
  UPDATE_MEDIA_BUTTON = 'Update content',
  UPDATE_COURSE_BUTTON = 'Update course',
  MEDIA_CREATED_MESSAGE = '🚀 Great! The Media has been successfully created.',
  MEDIA_CREATED_FAILED_MESSAGE = 'An error has occurred when creation the media. Please try again',
  USER_CREATED_ERROR = 'An error has occurred when creation the user. Please try again',
  MEDIA_UPDATED_MESSAGE = 'Media has been successfully updated.',
  MEDIA_UPDATED_ERROR_MESSAGE = 'An error has occurred when updating the media. Please try again',
  DAYS_OF_THE_WEEK = 'Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',
  GROUP_MULTI_SELECT_TITLE = 'Courses/groups who will have access to this content',
  ATTACH_FILE = 'Attach file',
  REVIEW_PERMISSIONS = 'Review the media permissions before continue',
  ALLOW_ACCESS_MEDIA = 'will have access to this content.',
  MEDIA_DELETED = 'The content has been successfully deleted.',
  DELETE_MEDIA_TITLE = 'Delete content',
  DELETE_MEDIA_CONFIRMATION_MESSAGE = 'Are you sure do you want to delete this media?',
  SEE_CONTENT = 'View content',
  DOWNLOAD = 'Download',
  EDIT = 'Edit',
  DELETE = 'Delete',
  LOAD_MORE = 'Load more',
  CLOSE = 'Close',
  CONTENT = 'Content',
  EDITING = 'Editing',
  VIRTUAL_COURSE = 'Virtual course',
  ADD_COURSE_BUTTON = 'New course',
  COURSE_LINK_HELPER = 'Provide link only if its a virtual course',
  COURSE_LINK = 'Access link',
  COMMENTARIES = 'Commentaries',
  MEDIA_LINK_DESCRIPTION = 'Media link',
  CREATE_STUDENT_MODAL_TITLE = 'New student',
  CREATE_TEACHER_MODAL_TITLE = 'New teacher',
  EDIT_TEACHER_BUTTON = 'Edit teacher',
  EDIT_STUDENT_BUTTON = 'Edit student',
  SIGN_OUT = 'Sign out',
  MENU_HOME = 'Home',
  MENU_CONTENTS = 'Contents',
  MENU_COURSES = 'Courses',
  MENU_TEACHERS = 'Teachers',
  MENU_STUDENTS = 'Students',
  MENU_PAYMENTS = 'Payments',
  NO_CONTENT_TILE = 'No results',
  NO_CONTENT_DESCRIPTION = 'There are no results for this search.',
  UPLOADED_BY = 'Uploaded by',
  PHONE_NUMBER_HELPER_TEXT = 'Country code + Area code + Phone number. Without + and spaces.',
  ON_SITE_CLASS = 'On site course',
  COURSE_YEAR = 'Course year',
  GO_TO_VIRTUAL_CLASS = 'Go to virtual class',
  GO_TO_STUDENTS_LIST = 'See students list',
  LOADING = 'Loading...',
  VIEW_STUDENTS = 'Students list',
  VIEW_MEDIAS = 'Medias list',
  CREATE_FOLDER = 'Create Folder',
  DRAG_AND_DROP_HELPER_TEXT = 'Drag and drop files here',
  DRAG_AND_DROP_HELPER_TEXT_2 = 'or click to select files',
  MEDIA_SIGNED_URL_ERROR = 'An error has occurred when generating the link of the content. Please try again.',
  REVIEW_FILES = 'Review files',
  DRAWER_NAME_INFORMATION_ALERT = 'Verify that files are named correctly so that students can easily find them.',
  PASSWORD_RESET_SUCCESS = 'The password has been reset successfully.',
  PASSWORD_RESET_ERROR = 'An error has occurred when resetting the password. Please try again.',
  RESET_PASSWORD_BUTTON = 'Reset password',
  FOLDER = 'Folder',
  UPLOAD_FOLDER = 'Upload folder',
  UPDATE_FOLDER = 'Update folder',
  UPDATE_MEDIA_FOLDER_SUCCESS = 'The folder has been successfully updated.',
  UPDATE_MEDIA_FOLDER_FAILURE = 'An error has occurred when updating the folder. Please try again.',
  EDIT_FOLDER = 'Edit folder',
  CREATE_MEDIA_FOLDER_SUCCESS = 'The folder has been successfully created.',
  CREATE_MEDIA_FOLDER_FAILURE = 'An error has occurred when creating the folder. Please try again.',
  FOLDER_GROUPS_HELPER_TEXT = 'The permissions of this content will be the same as those of the folder that contains it. If you want to modify them, you will have to modify the permissions of the folder.',
  NO_FOLDER_EDIT_PERMISSION_TITLE_MESSAGE = 'You can only edit folders that you created.',
  DELETE_FOLDER = 'Delete folder',
  DELETE_FOLDER_DESCRIPTION = 'Delete folder and all its contents',
  DELETE_ONLY_FOLDER_DESCRIPTION = 'Delete folder but not its contents.',
  DELETE_ONLY_FOLDER_HELPER_TEXT = 'If you choose this option, the folder will be deleted but its contents will be still available on the platform.',
  DELETE_FOLDER_PLACEHOLDER = 'Please type the name of the folder to confirm its deletion.',
  FOLDER_DELETED = 'The folder has been successfully deleted.',
  FOLDER_DELETE_FAILED = 'An error has occurred when deleting the folder. Please try again.',
  NOT_RECOMMENDED_MEDIA_TYPES_WORDING = 'To facilitate the use and download of files, we suggest that you upload the contents in the following formats',
  FILES_WITH_INFORMATION_TITLE = 'Files with information (Word documents, slides, spreadsheets, etc.)',
  FILES_WITH_INFORMATION_FORMAT = '.PDF',
  AUDIOS_TITLE = 'All types of audio ',
  AUDIOS_FORMAT = '.MP3; .WAV or.OGG',
  VIDEOS_TITLE = 'All types of video',
  VIDEOS_FORMAT = '.MP4; .AVI or .MOV',
  NOT_RECOMMENDED_MEDIA_TYPES_FINAL_WORDING = 'We do not recommend the upload of .RAR or .ZIP compressed files for they complicate the download process for our students. In the case of uploading multiple files, please, create a new folder.',
  NOT_RECOMMENDED_MEDIA_TYPES_TABLE_TITLE_1 = 'Content',
  NOT_RECOMMENDED_MEDIA_TYPES_TABLE_TITLE_2 = 'Recommended media format',
  EXAMS = 'Exams',
  QUESTION = 'Question',
  OPTION = 'Option',
  ADD_OPTION_BUTTON = 'Add option to question #',
  ADD_QUESTION_BUTTON = 'Add new question',
  ADD_FIRST_QUESTION = 'Add first question',
  ADD_QUESTION_POOL = 'Add exercise',
  DELETE_QUESTIONS_POOL_TITLE = 'Delete Question Pool',
  DELETE_QUESTIONS_POOL_DESCRIPTION = 'Delete question pool and all its contents',
  DELETE_LAST_QUESTIONS_POOL_ERROR = 'You can not delete the last question pool.',
  CREATE_EXAM = 'Create exam',
  EXAM_EMPTY_FIELD_WARNING = 'Please fill all the fields to complete the exam',
  EXAM_DEADLINE = 'Deadline',
  EXAM_START_DATE = 'Start date',
  EXAM_TIME = 'Time',
  EXAM_TIME_TYPE = 'Countdown type',
  EXAM_GLOBAL_TIME = 'Global time',
  EXAM_QUESTION_TIME = 'Question time',
  UPDATE_EXAM = 'Update exam',
  UPDATE_EXAM_SUCCESS = 'The exam has been successfully updated.',
  UPDATE_EXAM_ERROR = 'An error has occurred when updating the exam. Please try again.',
  CREATE_EXAM_SUCCESS = 'The exam has been successfully created.',
  CREATE_EXAM_ERROR = 'An error has occurred when creating the exam. Please try again.',
  NEW_EXAM = 'New exam',
  EXAM_INTRO_WORDING_1 = '',
  EXAM_INTRO_WORDING_2 = '',
  EXAM_DURATION = 'Exam duration',
  AUDIO_FILE = 'Audio file',
  EXERCISE_EXPLANATION = 'Exercise explanation',
  EXERCISE_DESCRIPTION = 'Exercise description',
  EXERCISE = 'Exercise',
  MEANINGFUL_FILE_NAMES = 'Please provide meaningful file names',
  EXAM_ATTEMPTS = 'Exam Attempts',
  NOT_FINISHED = 'Not finished',
  FINISHED_DATE = 'Finished date',
  STATUS = 'Status',
  FINISHED = 'Finished',
  WITH_SELF_CORRECTION = 'With self correction',
  WITH_OUT_SELF_CORRECTION = 'Without self correction',
  WORDS_COUNT = 'Words count',
  YES = 'Yes',
  NO = 'No',
  CORRECT_ANSWER = 'Is correct answer?',
  NUMBER_OF_CORRECT_ANSWERS = 'Number of correct answers',
  ALL = 'All',
  NOT_FINISHED_EXAMS = 'Not finished exams',
  FINISHED_EXAMS = 'Finished exams',
  EXAM_ATTEMPT_DELETED_OK = 'The exam attempt has been successfully deleted.',
  EXAM_ATTEMPT_DELETED_ERROR = 'An error has occurred when deleting the exam attempt. Please try again.',
  DELETE_EXAM_ATTEMPT_CONFIRMATION_TITLE = 'Delete exam attempt',
  DELETE_EXAM_ATTEMPT_CONFIRMATION_DESCRIPTION = 'Delete exam attempt, the user will  be able to retake the exam.',
  MANUAL_CORRECTION = 'Manual correction',
  SEARCH_BY_STUDENT_NAME = 'Search by student name',
  EXAMS_NOT_CORRECTED = 'Exams not corrected',
  EXAM_TEACHER_COMMENTS = 'Exam teacher comments',
  COMMENTS = 'Comments...',
  FINISH_CORRECTION = 'Finish correction',
  FINAL_MARK = 'Final mark',
  PENDING_CORRECTION_WARNING = 'The exam is pending correction.',
  CORRECTION_SUCCESS = 'The exam has been successfully corrected.',
  CORRECTION_ERROR = 'An error has occurred when correcting the exam. Please try again.',
  CORRECTED = 'Corrected',
  NOT_CORRECTED = 'Not corrected',
  CORRECT_ANSWERS = 'Correct answers',
  CORRECTED_BY = 'Corrected by',
  NOT_COMPLETED= 'Not completed',
  COMPLETED = 'Completed',
  REALIZED_BY = 'Realized by',
  OUTDATED= 'Outdated',
  PENDING= 'Pending',
  LEVEL= 'Level',
  NOT_DEFINED= 'Not defined',
  ALL_COURSES = 'All courses',
  CORRECTION= 'Correction',
  RIGHT_ANSWERS= 'Right answers',
  WITH_OUT_CORRECTION= 'Without correction',
  RECOMMENDED_MARK= 'Recommended mark',
  DELETE_ACCOUNT= 'Delete account',
  USER_DELETED_MESSAGE = 'The user has been successfully deleted.',
  USER_DELETED_ERROR = 'An error has occurred when deleting the user. Please try again.',
  DELETE_ACCOUNT_WARNING = 'Are you sure you want to delete your account?',
  DELETE_ACCOUNT_BUTTON = 'Delete account',
  NEW= 'New',
  ALLOW_RE_TAKE_EXAM= 'Allow re-take exam',
  EXAM_SETTINGS= 'Exam settings',
  HOMEWORK= 'Homework',
  NEW_HOMEWORK= 'New homework',
  HOMEWORK_DONE= 'Homework finished',
  CREATE_HOMEWORK= 'Create homework',
  UPDATE_HOMEWORK= 'Update homework',
  RETAKE_EXAM_WARNING= 'You are not allowed to retake the exam. Please contact the teacher.',
  START= 'Start',
  COMING_SOON= 'Coming soon',
  QUESTION_CONFIGURATION= 'Question configuration',
  TEXT= 'Text',
  ANSWER_CONFIGURATION='Answer configuration',
  QUESTION_TYPE= 'Question type',
  ANSWER_TYPE='Answer type',
  MULTIPLE_CHOICE= 'Multiple choice',
  TEXT_AREA= 'Text area',
  SAVE='Save',
  BLOCKS= 'Blocks',
  GRAMMAR_CORRECTION='Grammar correction',
  SPELLING_CORRECTION='Spelling correction',
  PUNCTUATION_CORRECTION='Punctuation correction',
  VOCABULARY_CORRECTION='Vocabulary correction',
  STYLE_CORRECTION='Style correction',
  SUGGESTIONS= 'Suggestions',
  CORRECTION_PREVIEW= 'Correction preview',
  RESET_CORRECTION='Reset correction',
  LESSON_PLAN= 'Lesson plan',
  COURSE_DETAILS='Course details',
  NEW_LESSON_PLAN= 'New lesson plan',
  UPDATE_LESSON_PLAN= 'Update lesson plan',
  DELETE_LESSON_PLAN= 'Delete lesson plan',
  CREATE_LESSON_PLAN= 'Create lesson plan',
  LESSON_SUCCESS= 'The lesson plan has been successfully created.',
  LESSON_ERROR= 'An error has occurred when creating the lesson plan. Please try again.',
  LESSON_UPDATE_SUCCESS= 'The lesson plan has been successfully updated.',
  LESSON_UPDATE_ERROR= 'An error has occurred when updating the lesson plan. Please try again.',
  OUT_OF_DEADLINE= 'Out of date',
  USEFUL_LINKS= 'Useful links',
  LESSON_PLAN_TITLE= 'Lesson plans',
  COURSES_ARCHIVE= 'Past courses',
  NO_ACTIVE_COURSES= 'No active courses',
  NO_ACTIVE_COURSES_DESCRIPTION= 'There are no active courses at the moment.',
  EXAM_ATTACHMENT_HELPER='This file will be visible for all the questions in exercise #',
  CONTACT_US= 'Contact us',
  SELECTED_ELEMENTS= 'selected elements',
  MOVE_CONTENTS_TO= 'Move contents to',
  MOVE= 'Move',
  BULK_UPDATE_OK= 'The contents have been successfully moved.',
  BULK_UPDATE_ERROR= 'An error has occurred when moving the contents. Please try again.',
  SELECT_FOLDER= 'Select folder',
  NO_FOLDER= 'No folder',
  BULK_DELETE_OK= 'The contents have been successfully deleted.',
  BULK_DELETE_ERROR= 'An error has occurred when deleting the contents. Please try again.',
  MEDIA_BULK_DELETE_TITLE= 'Delete contents',
  MEDIA_BULK_DELETE_DESCRIPTION= 'Are you sure you want to delete the selected contents?',
  MOVE_TO_FOLDER= 'Move to folder',
  DELETE_CONTENTS= 'Delete contents',
  CLASS_RECORDING= 'Class recording',
  GO_TO_CLASS= 'Go to live class',
  YOUR_CLASS = 'Your class',
  BEGINS= 'begins',
  AT='at',
  TODAY= 'today',
  TOMORROW= 'tomorrow', 
}
