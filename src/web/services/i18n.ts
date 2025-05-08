class I18n {
    #activeLanguage: string;
    constructor(language: string = 'en') {
        this.#activeLanguage = language;
    };

    get activeLanguage(): string {
        return this.#activeLanguage;
    }

    set activeLanguage(value: string) {
        this.#activeLanguage = value;
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
