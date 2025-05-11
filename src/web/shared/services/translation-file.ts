import { z } from "zod";

export class TranslationFile {
    readonly translations: Record<string, string>;
    constructor(public readonly lang: string, translations: unknown) {
        this.translations = z.record(z.string()).parse(translations);
    }

    get(key: string) {
        return this.translations[key] ?? key;
    }
}
