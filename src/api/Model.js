function getAllCourses() {
    /*fetch("https://virtserver.swaggerhub.com/KEVINSCHERF/ShortcutTraine/1.0.0/Courses")
        .then(e => e.json())
        .then(e => {
            return e;
        });*/

    return [{
        courseId: 1,
        courseTitle: "Testkurs",
        description: "Das ist ein toller Kurs",
        imageUrl: "https://images.t3n.de/news/wp-content/uploads/2022/11/getimgai-ki-bilder.jpg?class=hero-small",
        isFavourite: true,
        totalQuestionNumber: 6,
        correctionQuestionNumber: 3,
        falseQuestionNumber: 1
    },
    {
        courseId: 3,
        courseTitle: "Testkurs4",
        description: "Das ist ein toller Kurs",
        imageUrl: "https://images.t3n.de/news/wp-content/uploads/2022/11/getimgai-ki-bilder.jpg?class=hero-small",
        isFavourite: true,
        totalQuestionNumber: 6,
        correctionQuestionNumber: 3,
        falseQuestionNumber: 1
    },
    {
        courseId: 4,
        courseTitle: "Testkurs3",
        description: "Das ist ein toller Kurs",
        imageUrl: "https://images.t3n.de/news/wp-content/uploads/2022/11/getimgai-ki-bilder.jpg?class=hero-small",
        isFavourite: false,
        totalQuestionNumber: 6,
        correctionQuestionNumber: 3,
        falseQuestionNumber: 1
    },
    {
        courseId: 6,
        courseTitle: "Testkurs234",
        description: "Das ist ein toller Kurs",
        imageUrl: "https://images.t3n.de/news/wp-content/uploads/2022/11/getimgai-ki-bilder.jpg?class=hero-small",
        isFavourite: false,
        totalQuestionNumber: 6,
        correctionQuestionNumber: 3,
        falseQuestionNumber: 1
    }];
}

function getQuestions(id) {
    /*fetch("https://virtserver.swaggerhub.com/KEVINSCHERF/ShortcutTraine/1.0.0/Questions?id=" + id)
    .then(e => e.json())
    .then(e => {
        return e;
    });*/

    return [
        {
            questionId: 3,
            question: "Shortcut für Kopieren 3",
            description: "Beschreibung",
            keyCombination:
                [
                    64,
                    83
                ]
        },
        {
            questionId: 4,
            question: "Shortcut für Kopieren 4",
            description: "Beschreibung",
            keyCombination:
                [
                    64,
                    83
                ]
        },
        {
            questionId: 5,
            question: "Shortcut für Kopieren 5",
            description: "Beschreibung",
            keyCombination:
                [
                    64,
                    83
                ]
        },
        {
            questionId: 6,
            question: "Shortcut für Kopieren 6",
            description: "Beschreibung",
            keyCombination:
                [
                    64,
                    83
                ]
        },
        {
            questionId: 7,
            question: "Shortcut für Kopieren 7",
            description: "Beschreibung",
            keyCombination:
                [
                    64,
                    83
                ]
        }
    ];
}



function getResult(course_id, user_id) {
    /*fetch("https://virtserver.swaggerhub.com/KEVINSCHERF/ShortcutTraine/1.0.0/Questions?id=" + id)
    .then(e => e.json())
    .then(e => {
        return e;
    });*/

    return [
        {   
            user_id:1,
            questionId: 3,
            question: "Shortcut für Kopieren 3",
            description: "Beschreibung",
            keyCombination:
                [
                    64,
                    83
                ]
        },
        {
            user_id:1,
            questionId: 4,
            question: "Shortcut für Kopieren 4",
            description: "Beschreibung",
            keyCombination:
                [
                    64,
                    83
                ]
        },
        {
            user_id:1,
            questionId: 5,
            question: "Shortcut für Kopieren 5",
            description: "Beschreibung",
            keyCombination:
                [
                    64,
                    83
                ]
        },
        {
            user_id:1,
            questionId: 6,
            question: "Shortcut für Kopieren 6",
            description: "Beschreibung",
            keyCombination:
                [
                    64,
                    83
                ]
        },
        {
            user_id:1,
            questionId: 7,
            question: "Shortcut für Kopieren 7",
            description: "Beschreibung",
            keyCombination:
                [
                    64,
                    83
                ]
        }
    ];
}

module.exports = {
    getAllCourses, getQuestions, getResult
}