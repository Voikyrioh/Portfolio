import { z } from "zod";

export class TranslationFile {
    readonly translations: Record<string, string>;

    customPatternReplacement(match: string, ...p: string[]): string {
        if (match.charAt(0) === '#') return `<code>${p[0]}</code>`;
        return match;
    }

    constructor(public readonly lang: string, translations: unknown) {
        this.translations =
        z.record(
            z.string().transform((v) => v.replace(/#(.*)#/, this.customPatternReplacement))
        ).parse(translations);
    }

    get(key: string) {
        return this.translations[key] ?? key;
    }
}
