export const es = {
    //TOP NAVIGATION
    'top.nav.generator': 'Generador',
    'top.nav.documentation': 'Documentación',
    'top.nav.label': 'Navegación principal',
    'language.switch': 'Cambiar a inglés',

    // FOOTER
    'footer.span': 'Generador de contraseñas',
    'footer.link': 'Código fuente',
    'footer.link.aria': 'Código fuente en GitHub',

    // PAGE METADATA
    'meta.home.title': 'Generador de contraseñas',
    'meta.home.description': 'Genera contraseñas seguras en segundos.',
    'meta.documentation.title': 'Documentación | Generador de contraseñas',
    'meta.documentation.description': 'Cómo se generan las contraseñas, qué datos se guardan y cuáles son los límites de seguridad del proyecto.',

    // HERO
    'hero.title': 'Generador de contraseñas',
    'hero.subtitle': 'Genera contraseñas fuertes y seguras fácilmente.',

    //** PASSWORD GENERATOR */
    // PASSWORD GENERATOR
    'password.generator.span': 'Tu contraseña',
    'password.generator.slot': 'Tu contraseña aparecerá aquí',

    // PASSWORD GENERATOR BUTTONS
    'password.generator.button': 'Generar nueva contraseña',
    'password.generator.copy': 'Copiar al portapapeles',

    // PASSWORD GENERATOR CONFIG
    'password.generator.config.label': 'Configuración',
    'password.generator.config.length': 'Longitud',
    'password.generator.config.characters': 'Incluir caracteres',

    'password.generator.config.option.uppercase': 'Letras mayúsculas',
    'password.generator.config.option.lowercase': 'Letras minúsculas',
    'password.generator.config.option.numbers': 'Números',
    'password.generator.config.option.symbols': 'Símbolos',

    // GENERATOR STATUS
    'password.generator.status.generating': 'Generando...',
    'password.generator.status.error': 'Error',
    'password.generator.status.unknownError': 'Error desconocido',
    'password.generator.status.copied': '¡Copiada!',

    // DOCUMENTACIÓN
    'documentation.eyebrow': 'REFERENCIA DEL PROYECTO',
    'documentation.title': 'Documentación',
    'documentation.subtitle': 'Cómo se generan las contraseñas, qué registra la base de datos y cuáles son los límites de seguridad.',
    'documentation.contents': 'EN ESTA PÁGINA',
    'documentation.contents.label': 'En esta página',
    'documentation.overview.link': 'Resumen',
    'documentation.generation.link': 'Generación',
    'documentation.security.link': 'Seguridad',
    'documentation.data.link': 'Datos y base de datos',
    'documentation.limits.link': 'Limitaciones',
    'documentation.overview.number': '01 / EL SISTEMA',
    'documentation.overview.heading': 'Qué hace',
    'documentation.overview.body': 'El navegador envía la longitud y los tipos de caracteres seleccionados a un endpoint de FastAPI. El servidor genera una contraseña, guarda en PostgreSQL un registro con la configuración y devuelve la contraseña al navegador para mostrarla y permitir copiarla.',
    'documentation.flow.choose': 'Elegir',
    'documentation.flow.choose.body': 'Define una longitud y selecciona los tipos de caracteres.',
    'documentation.flow.generate': 'Generar',
    'documentation.flow.generate.body': 'La API crea la contraseña con aleatoriedad segura.',
    'documentation.flow.receive': 'Recibir',
    'documentation.flow.receive.body': 'La API guarda los metadatos y devuelve la contraseña.',
    'documentation.generation.number': '02 / EL MÉTODO',
    'documentation.generation.heading': 'Cómo funciona la generación',
    'documentation.generation.body': 'La interfaz permite elegir entre 4 y 64 caracteres e incluir mayúsculas, minúsculas, números y símbolos. La API utiliza secrets.choice de Python para elegir los caracteres. Selecciona al menos uno de cada tipo activado, completa las posiciones restantes con el conjunto combinado y después mezcla el resultado con secrets.SystemRandom.',
    'documentation.generation.validation': 'Se rechazan las solicitudes sin tipos de caracteres seleccionados o con una longitud insuficiente para incluir todos los tipos elegidos. La API acepta longitudes de 1 a 128 en solicitudes directas; la interfaz limita el rango de 4 a 64.',
    'documentation.security.number': '03 / SEGURIDAD',
    'documentation.security.heading': 'Cómo se protege el secreto',
    'documentation.security.body': 'Los caracteres aleatorios proceden del módulo secrets de Python, diseñado para usos criptográficos, no de un generador predecible del navegador. La contraseña se devuelve en la respuesta de la API, pero no se guarda en la base de datos. La respuesta incluye Cache-Control: no-store y otras cabeceras para evitar la caché.',
    'documentation.security.clipboard': 'El navegador muestra la contraseña hasta que se reemplaza o se cierra la página. Al pulsar Copiar, se guarda en el portapapeles del dispositivo, donde otras aplicaciones o personas con acceso al dispositivo podrían leerla.',
    'documentation.data.number': '04 / DATOS',
    'documentation.data.heading': 'Por qué hay una base de datos',
    'documentation.data.body': 'PostgreSQL conserva un registro operativo de cada generación completada, no una bóveda de contraseñas. Esto puede servir para contar o auditar el uso de la herramienta; la interfaz actual no ofrece historial ni analíticas. Para completar la solicitud, el registro debe guardarse correctamente.',
    'documentation.data.stored.label': 'Guardado',
    'documentation.data.stored.body': 'Identificador del registro, fecha de creación, longitud, tipos de caracteres seleccionados y estado.',
    'documentation.data.notStored.label': 'No guardado',
    'documentation.data.notStored.body': 'La contraseña generada.',
    'documentation.data.persistence.label': 'Persistencia',
    'documentation.data.persistence.body': 'Los registros se almacenan en un volumen con nombre de Docker y sobreviven a los reinicios del contenedor hasta que se elimina ese volumen.',
    'documentation.limits.number': '05 / LIMITACIONES',
    'documentation.limits.heading': 'Antes de publicar el servicio',
    'documentation.limits.body': 'La configuración de desarrollo proporcionada utiliza HTTP local. No están implementados HTTPS, autenticación, limitación de solicitudes ni una política de conservación o eliminación de registros. La API permite solicitudes del frontend local mediante CORS, pero CORS no autentica a los clientes ni protege el endpoint frente a solicitudes directas.',
    'documentation.limits.deployment': 'Antes de utilizar el servicio fuera del desarrollo local, publícalo detrás de HTTPS y decide quién puede llamar a la API y durante cuánto tiempo se conservarán los metadatos.',
};