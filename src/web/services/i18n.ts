import {ref} from "vue";

type lang = 'en' | 'fr';
type country = 'GB' | 'FR';

class I18n {
    readonly availableLanguages = new Map<lang, country>([['en', 'GB'], ['fr', 'FR']]);
    #activeLanguage: string;
    readonly languageRef = ref('')
    constructor(language: string = 'en') {
        this.#activeLanguage = language;
        this.languageRef.value = this.#activeLanguage;
    };

    get activeLanguage(): string {
        return this.#activeLanguage;
    }

    set activeLanguage(value: string) {
        this.#activeLanguage = value;
        this.languageRef.value = this.#activeLanguage;
    }

    async getDocument<T>(url: string): Promise<T> {
        const data = await fetch( url ).then((response) => response.json()).catch((err) => {
            console.log(err);
            throw new Error('could not load file');
        });
       if (data.language && data.language[this.#activeLanguage]) return data.language[this.#activeLanguage] as T;
       else throw new Error('Language not found');
    }
}

export default new I18n('fr');
