/* eslint-disable no-unused-vars */
export type TranslationsDictionary =
  | keyof typeof LanguageEN
  | keyof typeof LanguageES;

export enum LanguageES {
  SUCCESS = '🚀 Genial!',
  ERROR = '🤦 Oops!',
  INFO = '',
  CREATE_STUDENT_BUTTON = 'Crear estudiante',
  NAME = 'Nombre completo',
  CANCEL = 'Cancelar',
  PROCESSING = 'Procesando...',
  PASSWORD = 'Contraseña',
  EMAIL = 'Email',
  COURSES = 'Cursos',
  STUDENT_CREATED_MESSAGE = '🚀 Genial! El alumno se cargo exitosamente a la plataforma.',
  COURSE_CREATED_MESSAGE = '🚀 Excelente! Se agregó correctamente un nuevo curso a la platforma.',
  COURSE_UPDATED_SUCCESS = 'El curso se actualizó correctamente.',
  COURSE_NAME = 'Nombre del curso',
  COURSE_DATES = 'Dias del curso',
  COURSE_SCHEDULE = 'Horarios del curso',
  CREATE_COURSE_BUTTON = 'Crear Curso',
  CREATE_COURSE_MODAL_TITLE = 'Creación de Curso',
  MEDIA_UPLOAD_MODAL_TITLE = 'Subir contenido',
  TITLE = 'Titulo',
  DESCRIPTION = 'Descripcion',
  TYPE = 'Tipo de contenido',
  MEDIA_GROUPS = 'Cursos con acceso a este contenido',
  CREATE_MEDIA_BUTTON = 'Subir contenido',
  UPDATE_MEDIA_BUTTON = 'Editar contenido',
  UPDATE_COURSE_BUTTON = 'Editar curso',
  MEDIA_CREATED_MESSAGE = 'El contenido se cargo exitosamente a la plataforma.',
  MEDIA_CREATED_FAILED_MESSAGE = 'No se pudo cargar el contenido correctamente. Por favor, intentar nuevamente.',
  DAYS_OF_THE_WEEK = 'Lunes,Martes,Miercoles,Jueves,Viernes,Sabado',
  GROUP_MULTI_SELECT_TITLE = 'Cursos/Grupos que tendrán acceso a este contenido',
  ATTACH_FILE = 'Adjuntar archivo',
  REVIEW_PERMISSIONS = 'Revisa los permisos del contenido antes de continuar',
  ALLOW_ACCESS_MEDIA = 'tendrán acceso a este contenido.',
  MEDIA_DELETED = 'El contenido ha sido eliminado correctamente.',
  SEE_CONTENT = 'Ver contenido',
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
}

export enum LanguageEN {
  SUCCESS = '🚀 Great!',
  ERROR = '🤦 Oops!',
  INFO = '',
  CREATE_STUDENT_BUTTON = 'Create student',
  NAME = 'Full name',
  CANCEL = 'Cancel',
  PROCESSING = 'Working on it',
  PASSWORD = 'Password',
  EMAIL = 'Email',
  COURSES = 'Courses',
  STUDENT_CREATED_MESSAGE = 'The Student has been successfully created.',
  COURSE_CREATED_MESSAGE = 'A new course has been added to the platform.',
  COURSE_NAME = 'Course name',
  COURSE_DATES = 'Course days',
  COURSE_SCHEDULE = 'Timetable',
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
  DAYS_OF_THE_WEEK = 'Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',
  GROUP_MULTI_SELECT_TITLE = 'Courses/groups who will have access to this content',
  ATTACH_FILE = 'Attach file',
  REVIEW_PERMISSIONS = 'Review the media permissions before continue',
  ALLOW_ACCESS_MEDIA = 'will have access to this content.',
  MEDIA_DELETED = 'The content has been successfully deleted.',
  SEE_CONTENT = 'View content',
  DOWNLOAD = 'Download',
  EDIT = 'Edit',
  DELETE = 'Delete',
  LOAD_MORE = 'Load more',
  CLOSE = 'Close',
  CONTENT = 'Content',
  EDITING = 'Editing',
  VIRTUAL_COURSE = 'Virtual course',
  ADD_COURSE_BUTTON = 'New curso',
  COURSE_LINK_HELPER = 'Provide link only if its a virtual course',
  COURSE_LINK = 'Access link',
}
