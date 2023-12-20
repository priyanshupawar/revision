import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const questionsData = [
  {
    question: "Which type of JavaScript language is ________",
    options: [
      "Object-Oriented",
      "Object-Based",
      "Assembly-language",
      "High-level",
    ],
    correctOptionIndex: 1,
  },
  {
    question:
      "Which one of the following also known as Conditional Expression:",
    options: [
      "Alternative to if-else",
      "Switch statement",
      "If-then-else statement",
      "immediate if",
    ],
    correctOptionIndex: 4,
  },
  {
    question: "In JavaScript, what is a block of statement?",
    options: [
      "Conditional block",
      "Block that combines a number of statements into a single compound statement",
      "Both conditional block and a single statement",
      "Block that contains a single statement",
    ],
    correctOptionIndex: 2,
  },
  {
    question:
      "When interpreter encounters an empty statement, what will it do:",
    options: [
      "Shows a warning",
      "Prompts to complete the statement",
      "Throws an error",
      "Ignores the statements",
    ],
    correctOptionIndex: 4,
  },
  {
    question: 'The "function" and "var" are known as:',
    options: ["Keywords", "Data types", "Declaration statements", "Prototypes"],
    correctOptionIndex: 3,
  },
  {
    question:
      "Which one of the following is the correct way for calling the JavaScript code?",
    options: ["Preprocessor", "Triggering Event", "RMI", "Function/Method"],
    correctOptionIndex: 4,
  },
  {
    question: "Which of the following type of a variable is volatile?",
    options: [
      "Mutable variable",
      "Dynamic variable",
      "Volatile variable",
      "Immutable variable",
    ],
    correctOptionIndex: 1,
  },
  {
    question:
      "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
    options: [
      "Prints an exception error",
      "Prints an overflow error",
      'Displays "Infinity"',
      "Prints the value as such",
    ],
    correctOptionIndex: 3,
  },
  {
    question:
      "In JavaScript, which one of the following is not considered as an error:",
    options: [
      "Syntax error",
      "Missing of semicolons",
      "Division by zero",
      "Missing of Bracket",
    ],
    correctOptionIndex: 3,
  },
  {
    question:
      "Which of the following number object function returns the value of the number?",
    options: ["toString()", "valueOf()", "toLocaleString()", "toPrecision()"],
    correctOptionIndex: 2,
  },
];

export default function Mcqassign() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleRadioChange = (questionNumber, value) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionNumber]: value,
    }));
  };

  const calculateScore = () => {
    // Initialize the score
    let score = 0;

    // Iterate through each question in the questionsData array
    questionsData.forEach((question, index) => {
      // Extract the correct option index or indices for the current question
      const correctOptionIndex = question.correctOptionIndex; // For radio buttons
      const correctOptions = question.correctOptions || []; // For checkboxes

      // Extract the selected option(s) chosen by the user for the current question
      const selectedOption = selectedOptions[index + 1]; // Questions are 1-based indexed

      // Check if the question type is checkboxes
      if (Array.isArray(selectedOption)) {
        // For checkboxes
        // Check if the selected options match the correct options
        if (
          correctOptions.length === selectedOption.length &&
          correctOptions.every((option) => selectedOption.includes(option))
        ) {
          // If all correct options are selected, increment the score
          score += 1;
        }
      } else {
        // For radio buttons
        // Check if the selected option is the correct option
        if (selectedOption === correctOptionIndex) {
          score += 1;
        }
      }
    });

    return score;
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const score = calculateScore();

  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <h1 style={{ textAlign: "center", color: "GrayText" }}>JavaScript MCQ</h1>
      <div>
        {questionsData.map((questionData, index) => (
          <div key={index} className="container-fluid mt-5 w-50">
            <label>{`(${index + 1}) ${questionData.question}`}</label>
            <div className="container-fluid">
              {questionData.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name={index + 1}
                    value={optionIndex + 1}
                    checked={selectedOptions[index + 1] === optionIndex + 1}
                    onChange={() =>
                      handleRadioChange(index + 1, optionIndex + 1)
                    }
                  />

                  <label
                    className="form-check-label "
                    style={{ marginLeft: "10px" }}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="container-fluid mt-5 w-50">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        {showResults && (
          <div className="container-fluid mt-3 border w-25 text-center p-2">
            <h3>Results:</h3>
            <p
              style={{ color: "red", fontSize: "larger", fontWeight: "bolder" }}
            >
              Your score is: {score}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function Mcqassign() {
//     return (
//       <>
//         <h1 style={{ textAlign: "center", color: "GrayText" }}>JavaScript MCQ</h1>
//         <div>
//           <div className="container-fluid mt-5 w-50 ">
//             <label>(1) Which type of JavaScript language is ________</label>
//             <div className="conatiner-fluid  ">
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" value="" name="1" />
//                 <label className="form-check-label">Object-Oriented</label>
//               </div>

//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" value="" name="1" />
//                 <label className="form-check-label">Object-Based</label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" value="" name="1" />
//                 <label className="form-check-label">Assembly-language</label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" value="" name="1" />
//                 <label className="form-check-label">High-level</label>
//               </div>
//             </div>
//           </div>
//           <div className="container-fluid mt-5 w-50 ">
//             <label>
//               (2) Which one of the following also known as Conditional Expression:
//             </label>
//             <div className="conatiner-fluid  ">
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" value="" name="2" />
//                 <label className="form-check-label">Alternative to if-else</label>
//               </div>

//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" value="" name="2" />
//                 <label className="form-check-label">Switch statement</label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" value="" name="2" />
//                 <label className="form-check-label">If-then-else statement</label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" value="" name="2" />
//                 <label className="form-check-label">immediate if</label>
//               </div>
//             </div>
//           </div>
//           <div className="container-fluid mt-5 w-50 ">
//             <label>(3) In JavaScript, what is a block of statement?</label>
//             <div className="conatiner-fluid  ">
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="3" value="" />
//                 <label className="form-check-label">Conditional block</label>
//               </div>

//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="3" value="" />
//                 <label className="form-check-label">
//                   block that combines a number of statements into a single
//                   compound statement
//                 </label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="3" value="" />
//                 <label className="form-check-label">
//                   both conditional block and a single statement
//                 </label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="3" value="" />
//                 <label className="form-check-label">
//                   block that contains a single statement
//                 </label>
//               </div>
//             </div>
//           </div>
//           <div className="container-fluid mt-5 w-50 ">
//             <label>
//               (4) When interpreter encounters an empty statements, what it will
//               do:
//             </label>
//             <div className="conatiner-fluid  ">
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="4" value="" />
//                 <label className="form-check-label">Shows a warning</label>
//               </div>

//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="4" value="" />
//                 <label className="form-check-label">
//                   Prompts to complete the statement
//                 </label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="4" value="" />
//                 <label className="form-check-label">Throws an error</label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="4" value="" />
//                 <label className="form-check-label">Ignores the statements</label>
//               </div>
//             </div>
//           </div>
//           <div className="container-fluid mt-5 w-50 ">
//             <label>(5) The "function" and " var" are known as:</label>
//             <div className="conatiner-fluid  ">
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="5" value="" />
//                 <label className="form-check-label">Keywords</label>
//               </div>

//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="5" value="" />
//                 <label className="form-check-label">Data types</label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="5" value="" />
//                 <label className="form-check-label">Declaration statements</label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="5" value="" />
//                 <label className="form-check-label">Prototypes</label>
//               </div>
//             </div>
//           </div>
//           <div className="container-fluid mt-5 w-50 ">
//             <label>
//               (6) Which one of the following is the correct way for calling the
//               JavaScript code?
//             </label>
//             <div className="conatiner-fluid  ">
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" value="" name="6" />
//                 <label className="form-check-label">Preprocessor</label>
//               </div>

//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" value="" name="6" />
//                 <label className="form-check-label">Triggering Event</label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" value="" name="6" />
//                 <label className="form-check-label">RMI</label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" value="" name="6" />
//                 <label className="form-check-label">Function/Method</label>
//               </div>
//             </div>
//           </div>
//           <div className="container-fluid mt-5 w-50 ">
//             <label>
//               (7) Which of the following type of a variable is volatile?
//             </label>
//             <div className="conatiner-fluid  ">
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="7" value="" />
//                 <label className="form-check-label">Mutable variable</label>
//               </div>

//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="7" value="" />
//                 <label className="form-check-label">Dynamic variable</label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="7" value="" />
//                 <label className="form-check-label">Volatile variable</label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="7" value="" />
//                 <label className="form-check-label">Immutable variable</label>
//               </div>
//             </div>
//           </div>
//           <div className="container-fluid mt-5 w-50 ">
//             <label>
//               (8) When there is an indefinite or an infinite value during an
//               arithmetic computation in a program, then JavaScript prints______.
//             </label>
//             <div className="conatiner-fluid  ">
//               <div className="d-flex gap-3">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   name="8"
//                   value=""
//                 />
//                 <label className="form-check-label">
//                   Prints an exception error
//                 </label>
//               </div>

//               <div className="d-flex gap-3">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   name="8"
//                   value=""
//                 />
//                 <label className="form-check-label">
//                   Prints an overflow error
//                 </label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   name="8"
//                   value=""
//                 />
//                 <label className="form-check-label">Displays "Infinity"</label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   name="8"
//                   value=""
//                 />
//                 <label className="form-check-label">
//                   Prints the value as such
//                 </label>
//               </div>
//             </div>
//           </div>
//           <div className="container-fluid mt-5 w-50 ">
//             <label>
//               (9) In the JavaScript, which one of the following is not considered
//               as an error:
//             </label>
//             <div className="conatiner-fluid  ">
//               <div className="d-flex gap-3">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   name="9"
//                   value=""
//                 />
//                 <label className="form-check-label">Syntax error</label>
//               </div>

//               <div className="d-flex gap-3">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   name="9"
//                   value=""
//                 />
//                 <label className="form-check-label">Missing of semicolons</label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   name="9"
//                   value=""
//                 />
//                 <label className="form-check-label">Division by zero</label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   name="9"
//                   value=""
//                 />
//                 <label className="form-check-label">Missing of Bracket</label>
//               </div>
//             </div>
//           </div>
//           <div className="container-fluid mt-5 w-50 ">
//             <label>
//               (10) Which of the following number object function returns the value
//               of the number?
//             </label>
//             <div className="conatiner-fluid  ">
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="10" value="" />
//                 <label className="form-check-label">toString()</label>
//               </div>

//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="10" value="" />
//                 <label className="form-check-label">valueOf()</label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="10" value="" />
//                 <label className="form-check-label">toLocaleString()</label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="10" value="" />
//                 <label className="form-check-label">toPrecision()</label>
//               </div>
//             </div>
//           </div>
//           <div className="container-fluid mt-5 w-50 ">
//             <label>
//               (11) Which of the following number object function returns the value
//               of the number?
//             </label>
//             <div className="conatiner-fluid  ">
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="12" value="" />
//                 <label className="form-check-label">toString()</label>
//               </div>

//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="12" value="" />
//                 <label className="form-check-label">Missing of semicolons</label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="12" value="" />
//                 <label className="form-check-label">Division by zero</label>
//               </div>
//               <div className="d-flex gap-3">
//                 <input class="form-check-input" type="radio" name="12" value="" />
//                 <label className="form-check-label">Missing of Bracket</label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
