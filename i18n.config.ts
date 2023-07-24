export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            ul: {
                text: 'An advanced online playground for Tailwind CSS, including support for things like:',
                li1: "Customizing your",
                li1_1: "file",
                li2: "Extracting classes with ",
                li3: "Code completion with instant preview"
            },
            p: "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
            footer: {
                p: "Want to dig deeper into Tailwind?",
                link: "Read the docs"
            }
        },
        fr: {
            ul: {
                text: "Un terrain de jeu en ligne avancé pour Tailwind CSS, incluant la prise en charge d'éléments tels que : ",
                li1: "Personnaliser votre fichier ",
                li1_1: "",
                li2: "Extraction de classes avec ",
                li3: "Complétion de code avec aperçu instantané"
            },
            p: "Parfait pour apprendre le fonctionnement du framework, prototyper une nouvelle idée ou créer une démo à partager en ligne.",
            footer: {
                p: "Vous souhaitez en savoir plus sur Tailwind ?",
                link: "Lire la documentation"
            }
        }
    }
}))
