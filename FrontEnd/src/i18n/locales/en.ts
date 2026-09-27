export const en = {
    //TOP NAVIGATION
    'top.nav.generator': 'Generator',
    'top.nav.documentation': 'Documentation',
    'top.nav.label': 'Main navigation',
    'language.switch': 'Switch to Spanish',

    // FOOTER
    'footer.span': 'Password Generator',
    'footer.link': 'Source code',
    'footer.link.aria': 'Source code on GitHub',

    // PAGE METADATA
    'meta.home.title': 'Password Generator',
    'meta.home.description': 'Generate strong, secure passwords in seconds.',
    'meta.documentation.title': 'Documentation | Password Generator',
    'meta.documentation.description': 'How Password Generator creates passwords, what data is stored, and the security limits of the project.',

    // HERO
    'hero.title': 'Password Generator',
    'hero.subtitle': 'Generate strong and secure passwords easily.',

    //** PASSWORD GENERATOR */
    // PASSWORD GENERATOR
    'password.generator.span': 'Your Password',
    'password.generator.slot': 'Your password appear here',

    // PASSWORD GENERATOR BUTTONS
    'password.generator.button': 'Generate New Password',
    'password.generator.copy': 'Copy to Clipboard',

    // PASSWORD GENERATOR CONFIG
    'password.generator.config.label': 'Configuration',
    'password.generator.config.length': 'Length',
    'password.generator.config.characters': 'Include characters',

    'password.generator.config.option.uppercase': 'Uppercase Letters',
    'password.generator.config.option.lowercase': 'Lowercase Letters',
    'password.generator.config.option.numbers': 'Numbers',
    'password.generator.config.option.symbols': 'Symbols',

    // GENERATOR STATUS
    'password.generator.status.generating': 'Generating...',
    'password.generator.status.error': 'Error',
    'password.generator.status.unknownError': 'Unknown error',
    'password.generator.status.copied': 'Copied!',

    // DOCUMENTATION
    'documentation.eyebrow': 'PROJECT REFERENCE',
    'documentation.title': 'Documentation',
    'documentation.subtitle': 'How passwords are generated, what the database records, and where the security boundaries are.',
    'documentation.contents': 'ON THIS PAGE',
    'documentation.contents.label': 'On this page',
    'documentation.overview.link': 'Overview',
    'documentation.generation.link': 'Generation',
    'documentation.security.link': 'Security',
    'documentation.data.link': 'Data & database',
    'documentation.limits.link': 'Limitations',
    'documentation.overview.number': '01 / THE SYSTEM',
    'documentation.overview.heading': 'What it does',
    'documentation.overview.body': 'The browser sends your selected length and character types to a FastAPI endpoint. The server generates a password, saves a record of the settings in PostgreSQL, then returns the password to the browser for display and optional copying.',
    'documentation.flow.choose': 'Choose',
    'documentation.flow.choose.body': 'Set a length and select character types.',
    'documentation.flow.generate': 'Generate',
    'documentation.flow.generate.body': 'The API creates the password using secure randomness.',
    'documentation.flow.receive': 'Receive',
    'documentation.flow.receive.body': 'The API saves metadata and returns the password.',
    'documentation.generation.number': '02 / THE METHOD',
    'documentation.generation.heading': 'How generation works',
    'documentation.generation.body': 'The interface offers 4 to 64 characters and lets you include uppercase letters, lowercase letters, digits, and symbols. The API uses Python\'s secrets.choice to draw characters. It picks at least one from each enabled type, fills the remaining positions from the combined set, then shuffles the result with secrets.SystemRandom.',
    'documentation.generation.validation': 'A request with no character types, or a length too short to include every selected type, is rejected. The API accepts lengths from 1 to 128 for direct requests; the interface uses the narrower 4 to 64 range.',
    'documentation.security.number': '03 / SECURITY',
    'documentation.security.heading': 'What protects the secret',
    'documentation.security.body': 'Random characters come from Python\'s cryptographically secure secrets module, not from a predictable browser-side random number generator. The password is returned in the API response but is not written to the database. The generation response includes Cache-Control: no-store and related no-cache headers.',
    'documentation.security.clipboard': 'The browser shows the password until it is replaced or the page is closed. Clicking Copy places it on the device clipboard, which other apps or people with access to that device may be able to read.',
    'documentation.data.number': '04 / DATA',
    'documentation.data.heading': 'Why there is a database',
    'documentation.data.body': 'PostgreSQL keeps an operational record of each successful generation, not a password vault. This can support counts or audits of how the tool was used; the current interface does not offer a history or analytics view. A successful response depends on the record being saved.',
    'documentation.data.stored.label': 'Stored',
    'documentation.data.stored.body': 'Record ID, creation time, length, selected character types, and status.',
    'documentation.data.notStored.label': 'Not stored',
    'documentation.data.notStored.body': 'The generated password itself.',
    'documentation.data.persistence.label': 'Persistence',
    'documentation.data.persistence.body': 'Records live in a named Docker volume and survive container restarts until that volume is removed.',
    'documentation.limits.number': '05 / LIMITATIONS',
    'documentation.limits.heading': 'Before deploying publicly',
    'documentation.limits.body': 'The provided development setup uses local HTTP. HTTPS, authentication, rate limiting, and a retention or deletion policy for database records are not implemented here. The API allows requests from the local frontend through CORS, but CORS does not authenticate clients or protect the endpoint from direct requests.',
    'documentation.limits.deployment': 'Deploy behind HTTPS and decide who may call the API and how long metadata should be kept before using this service beyond local development.',
};