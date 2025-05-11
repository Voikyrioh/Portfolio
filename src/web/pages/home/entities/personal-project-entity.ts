import {z} from "zod";

const PersonalProjectEntitySchema = z.object({
    img: z.string(),
    name: z.string(),
    url: z.string(),
    description: z.string()
});

export const validatePersonalProjects = z.array(PersonalProjectEntitySchema).parse;

export type PersonalProjectEntity = z.infer<typeof PersonalProjectEntitySchema>;
