const spec = [{
    "name": "characteristics",
    "section_label": "Characteristics",
    "instruction": "Choose one...",
    "template": (context) =>  `${context.name} ${context.combined}.`,
    "items": [
        {
            "name": "kind_and_generous",
            "short_label": "Kind",
            "full_label": " is a very kind and generous young man and it is such a pleasure to have him in our class",
        },
        {
            "name": "funny ",
            "short_label": "Funny",
            "full_label": "is a bright young boy, who has a great sense of humor",
        },
        {
            "name": "curious_general_knowledge",
            "short_label": "Curious",
            "full_label": "is a curious young man who enjoys sharing lots of interesting facts with his class",
        },
        {
            "name": "thoughtful_and_sweet",
            "short_label": "Thoughtful",
            "full_label": "is a sweet and thoughtful member of our class",
        },
        {
            "name": "well_mannered",
            "short_label": "Well-mannered",
            "full_label": "is a very friendly boy and a true Wynberg gentleman",
        },
        {
            "name": "confident",
            "short_label": "Confident",
            "full_label": "is a confident boy who is popular amongst his peers",
        },
        {
            "name": "playful",
            "short_label": "Playful",
            "full_label": "is a very playful boy who always participates enthusiastically in our class discussions",
        },
        {
            "name": "hard_worker",
            "short_label": "Hard-worker",
            "full_label": "is a very hard-working and responsible boy",
        },
        {
            "name": "quiet",
            "short_label": "Quiet",
            "full_label": "is a quiet young man who always shows excellent manners in class",
        },
        {
            "name": "creative ",
            "short_label": "Creative",
            "full_label": "is a very creative boy, who enjoys sharing interesting ideas with the class",
        },
        
        {
            "name": "resilient",
            "short_label": "Persevered",
            "full_label": "can be very proud of the hard work and perseverance he has shown this term",
        },
        {
            "name": "happy",
            "short_label": "Happy",
            "full_label": "is a happy young man who is eager to please",
        },
        {
            "name": "sweet_natured",
            "short_label": "Sweet-natured",
            "full_label": "sweet-natured boy, who is always willing to offer help to his friends and his teacher",
        },
        {
            "name": "sensitive",
            "short_label": "Sensitive",
            "full_label": "is a sensitive, kind and hardworking young man.",
        },
        {
            "name": "wynberg_gentleman",
            "short_label": "Wynberg gentleman",
            "full_label": "is a true Wynberg gentleman and an excellent example to his peers",
        }
    ]
},

{
    "name": "strengths",
    "section_label": "Strengths",
    "instruction": "Choose one...",
    "template": (context) =>  `He ${context.combined}.`,
    "items": [
        {
            "name": "phonic tests",
            "short_label": "Phonic Tests",
            "full_label": "has worked steadily throughout the term and performs well in his weekly spelling tests in English and Afrikaans",
        },
        {
            "name": "spelling",
            "short_label": "Spelling and punctuation marks",
            "full_label": "is able to apply his phonetic knowledge in every day writing tasks and he is able to use punctuation marks effectively",
        },
        
        {
            "name": "reading",
            "short_label": "Reading",
            "full_label": "is able to read fluently and takes a variety of punctuation marks into account while reading aloud",
        },
        {
            "name": "reading_comprehension",
            "short_label": "Reading Comprehension",
            "full_label": "is able to apply different reading strategies to find and understand the meaning of the text",
        },
        {
            "name": "creative_writing",
            "short_label": "Creative Writing",
            "full_label": "is a creative writer and I always enjoy reading his detailed writing tasks",
        },
        {
            "name": "language_use",
            "short_label": "Language Use",
            "full_label": "has a good grasp of the parts of speech and punctuation marks and he is able to apply these skills in his everyday writing tasks",
        },
        {
            "name": "speaking",
            "short_label": "Speaking",
            "full_label": "is a very confident speaker who delivers his orals with enthusiasm and excellent voice projection",
        },
        {
            "name": "number_operations",
            "short_label": "Number Operations",
            "full_label": "has a good grasp of the number concepts taught and he is able to apply a variety of strategies to solve different mathematical problems",
        },
        {
            "name": "patterns",
            "short_label": "Patterns",
            "full_label": "does exceptionally well in identifying number-, growing- and moving patterns",
        },
        {
            "name": "space_and_shape",
            "short_label": "Space and Shape",
            "full_label": "is able to identify a variety of 3-D objects and 2-D shapes and he can recall object properties with ease",
        },
        {
            "name": "measurement",
            "short_label": "Measurement",
            "full_label": "is able to read and record 12hour as well as 24hour time with ease",
        },
        {
            "name": "data_handling",
            "short_label": "Data Handling",
            "full_label": "does well in interpreting and solving a variety of problems related to data handling",
        },
        {
            "name": "afrikaans_reading",
            "short_label": "Afrikaans Reading",
            "full_label": "can read fluently in Afrikaans and has excellent pronunciation and sight word recognition",
        },
        {
            "name": "afrikaans_spelling",
            "short_label": "Afrikaans Spelling",
            "full_label": "does well in his weekly Afrikaans phonic tests and he is able to apply these skills in his every day Afrikaans writing",
        },
        {
            "name": "afrikaans_writing",
            "short_label": "Afrikaans Writing",
            "full_label": "is a very creative writer and he always goes the extra mile when completing writing tasks in Afrikaans",
        },
        {
            "name": "afrikaans_speaking",
            "short_label": "Afrikaans Speaking",
            "full_label": "delivered his Afrikaans oral with confidence and uses excellent pronunciation in Afrikaans",
        }
    ]
},
{
    "name": "progress",
    "section_label": "Progressed in",
    "instruction": "Choose two...",
    "template": (context) =>  `He is making good progress in ${context.combined} and he is learning to apply new skills learned in these areas independently.`,
    "items": [
        {
            "name": "handwriting",
            "short_label": "Handwriting",
            "full_label": "handwriting",
        },
        {
            "name": "spelling",
            "short_label": "Spelling",
            "full_label": "spelling",
        },
        {
            "name": "reading",
            "short_label": "Reading",
            "full_label": "reading",
        },
        {
            "name": "reading_comprehension",
            "short_label": "Reading Comprehension",
            "full_label": "reading comprehension",
        },
        {
            "name": "creative_writing",
            "short_label": "Creative Writing",
            "full_label": "creative writing",
        },
        {
            "name": "language_use",
            "short_label": "Language Use",
            "full_label": "language use",
        },
        {
            "name": "speaking",
            "short_label": "Speaking",
            "full_label": "oral presentations",
        },
        {
            "name": "number_operations",
            "short_label": "Number Operations",
            "full_label": "number operations",
        },
        {
            "name": "patterns",
            "short_label": "Patterns",
            "full_label": "recognising and continuing growing- and moving patterns ",
        },
        {
            "name": "space_and_shape",
            "short_label": "Space and Shape",
            "full_label": "space and shape",
        },
        {
            "name": "measurement",
            "short_label": "Measurement",
            "full_label": "in telling the time",
        },
        {
            "name": "data_handling",
            "short_label": "Data Handling",
            "full_label": "data handling",
        },
        {
            "name": "afrikaans_reading",
            "short_label": "Afrikaans Reading",
            "full_label": "Afrikaans reading",
        },
        {
            "name": "afrikaans_spelling",
            "short_label": "Afrikaans Spelling",
            "full_label": "Afrikaans spelling",
        },
        {
            "name": "afrikaans_writing",
            "short_label": "Afrikaans Writing",
            "full_label": "Afrikaans writing",
        },
        {
            "name": "afrikaans_speaking",
            "short_label": "Afrikaans Speaking",
            "full_label": "Afrikaans pronunciation",
        },
      
    ]
},
{
    "name": "weaknesses",
    "section_label": "Weaknesses",
    "instruction": "Choose one...",
    "template": (context) =>  `${context.name} ${context.combined}.`,
    "items": [
        {
            "name": "phonics",
            "short_label": "Phonic Tests",
            "full_label": "will have to work hard in improving his spelling and phonic tests. Next term, I would like to see him apply strategies that we have learnt in class and work on breaking words into more managable parts when trying to spell bigger words",
        },
        {
            "name": "spelling",
            "short_label": "Spelling",
            "full_label": "finds it challenging to apply his phonetic knowledge to his every day writing tasks. Next term, I would like to see him work on applying this knowledge, as well as making use of a dictionary or asking for help when spelling tricky words more regularly",
        },
        {
            "name": "reading_decoding",
            "short_label": "Reading: Decoding",
            "full_label": "still finds reading and decoding tricky words challenging. Next term, I would like to see him practicing decoding strategies, such as breaking up bigger words into more manageable parts and rereading paragraphs",
        },
        {
            "name": "fluency_and_word_recognition",
            "short_label": "Reading: Fluency and Word Recognition",
            "full_label": "stills finds reading fluently challenging. Next term, I would like to see him praciticing sight words more regularly and practice finding and decoding tricky words before starting the reading",
        },
        {
            "name": "reading_comprehension",
            "short_label": "Reading Comprehension",
            "full_label": "still finds reading comprehension challenging. Next term, I would like to see him work on re-reading paragraphs, answering questions correctly by finding evidence in the text and using the appropriate punctuation marks",
        },
        {
            "name": "creative_writing",
            "short_label": "Creative Writing",
            "full_label": "still finds creative writing and sentence construction challenging. Next term, I would like to see him work on paying closer attention to his sentence construction and use of punctuation marks by reading his writing out loud before handing in his work",
        },
        {
            "name": "language_use",
            "short_label": "Language Use",
            "full_label": "still finds identifying the different parts of speech challenging. Next term, I would like to see him practice differentiating between the different parts of speech, using speech marks and tenses correctly",
        },
        {
            "name": "speaking",
            "short_label": "Oral presentation",
            "full_label": "finds oral presentations particularly challenging and next term I would like to see him work on his oral presentations by being well-prepared and work on making more consistent eye contact with the audience",
        },
        {
            "name": "number_operations",
            "short_label": "Number Operations",
            "full_label": "still finds basic number operations challenging and next term, I would like to see him practise number facts and skip counting every day. He will also have to practice solving mathematical problems using the different resources that are available to him",
        },
        {
            "name": "patterns",
            "short_label": "Patterns",
            "full_label": "finds completing growing-, moving- and number patterns challening. Next term, I would like to see him work on practising these patterns using concrete objects and strategies that were learnt in class",
        },
        {
            "name": "space_and_shape",
            "short_label": "Space and Shape",
            "full_label": "finds identifying and naming 2-D shapes and 3-D objects' properties difficult. Next term I would like to see him practise the spelling names and memorising the properties of different 3-D objects",
        },
        {
            "name": "measurement",
            "short_label": "Measurement",
            "full_label": "is still finding telling and recording the time difficult and next term I would like to see him practise telling the time every day and he will also need to work on converting 12 hour time to 24 hour time",
        },
        {
            "name": "word_problems",
            "short_label": "Word Problems",
            "full_label": "finds it difficult to apply strategies to solve different word problems. Next term, I would like to see him work on using strategies such as breaking the problem into smaller parts, visualising and finding key words to solve these problems",
        },
        {
            "name": "data_handling",
            "short_label": "Data Handling",
            "full_label": "finds it difficult to apply strategies to solve problems involving a data set. Next term, I would like to see him work on using strategies such as visualising and finding key words to solve these problems",
        },
        {
            "name": "afrikaans_reading",
            "short_label": "Afrikaans Reading",
            "full_label": "finds Afrikaans reading challening and he would benefit from taking out Afrikaans reading books from the Library and practising Afrikaans sight words regularly",
        },
        {
            "name": "afrikaans_spelling",
            "short_label": "Afrikaans Spelling",
            "full_label": "finds afrikaans spelling challengin and he would benefit from practicing his Afrikaans spelling more consistently and reading Afrikaans books in order to improve his Afrikaans phonic abilities",
        },
        {
            "name": "afrikaans_writing",
            "short_label": "Afrikaans Writing",
            "full_label": "finds Afrikaans sentence construction challengig and he would benefit from using his weekly Afrikaans phonic words to write simple sentences and reading them aloud",
        },
        {
            "name": "afrikaans_speaking",
            "short_label": "Afrikaans Speaking",
            "full_label": "finds Afrikaans oral presentations and Afrikaans pronunciation very challenging. I would like to see him work on his Afrikaans speaking by practising more consistently for Afrikaans oral presentations and reading more Afrikaans stories",
        },
        {
            "name": "listening_skills",
            "short_label": "Listening Skills",
            "full_label": "listening skills",
        },
        {
            "name": "attention",
            "short_label": "Attention to detail",
            "full_label": "n",
        }
    ]
},

{
    "name": "sign_off",
    "section_label": "Sign Off",
    "instruction": "Choose one...",
    "template": (context) => `${context.combined}, ${context.name}! `,
    "items": [
        {
            "name": "Keep up the hard work",
            "short_label": "Keep up the hard work",
            "full_label": "Keep up the hard work",
        },
        {
            "name": "Supera Moras",
            "short_label": "Supera Moras",
            "full_label": "Supera Moras",
        },
        {
            "name": "Reach for the stars",
            "short_label": "Reach for the stars",
            "full_label": "Reach for the stars",
        },
        {
            "name": "Well done on a successful term",
            "short_label": "Well done on a successful term",
            "full_label": "Well done on a successful term",
        },
        {
            "name": "Show me your best every day. Well done",
            "short_label": "Show me your best every day. Well done",
            "full_label": "Show me your best every day",
        },
        {
            "name": "You can do it",
            "short_label": "You can do it",
            "full_label": "You can do it",
        },
        {
            "name": "Keep trying your best",
            "short_label": "Keep trying your best",
            "full_label": " Keep trying your best",
        }
       
     ]
}


];

function generateForm(spec) {
    spec.forEach(function (section) {
        insertHeading(section.section_label);
        
        insertInstruction(section.instruction);

               
        section.items.forEach(function (item) {
            insertCheckbox(section, item);
        });
    });

    const formContainer = document.getElementById("form-container");
    formContainer.addEventListener("change", () => {
        generateReport(spec);
        
    });
};

function insertHeading(heading) {
    document.getElementById("form-container").innerHTML += '<h1>'+heading+'</h1>';
}

function insertInstruction(instruction) {
    document.getElementById("form-container").innerHTML += `<h2>${instruction}</h2>`;
}




function insertCheckbox(section, item) {
    let formContainer = document.getElementById("form-container");
    let checkbox = document.createElement("input");
    

    checkbox.type = "checkbox";
    checkbox.name = item.name;
    checkbox.value = "value";
    checkbox.id = section.name + "-" + item.name;
          
    let label = document.createElement("label");
    label.htmlFor = item.name;
    label.className = "checkbox";
 
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(item.short_label));
   
    formContainer.appendChild(label);
     //console.log(section.name, item.name);
    
}

function generateReport(spec) {
    const sentences = spec.map(function (section) {
        const selections = [];

        section.items.forEach(function (item) {
            const checkbox = getCheckbox(section, item);
            if (checkbox.checked) selections.push(item);
        });
       
        return writeSentence(section, selections);
        
    });

    const text = document.getElementById('textArea');
    text.value = sentences.join(" "); 
}



function getCheckbox(section, item) {
    return document.getElementById(section.name + "-" + item.name);
   
}


function writeSentence(section, selections) {
    const context = {};
    context.combined = selections.map(sel => sel.full_label).join(",");
    context.name = document.getElementById("name").value;
    const sentence = section.template(context);
    
    return sentence;
    
}



generateForm(spec);


//reduce of map
//return sentence
//eventHandler moet iets skryf wat se if valid generate report otherwise show what invalid
//getElementById().value

