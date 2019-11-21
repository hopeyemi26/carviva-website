import React, { useState } from "react";
import PlusIcon from "../assets/plus.svg";

const Faq = ({ questions, title }) => {
  const [selected, setSelected] = useState(null);

  const handleOpen = questionId => {
    selected === questionId ? setSelected(null) : setSelected(questionId);
  };

  return (
    <div className="questions">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h3 className="title has-text-primary has-text-centered">
              {title}
            </h3>
            <div className="faqs">
              {questions.map(question => (
                <div className="faq" key={question.id}>
                  <button
                    className="title"
                    onClick={() => handleOpen(question.id)}
                  >
                    <h4>{question.title}</h4>
                    <PlusIcon />
                  </button>
                  <div
                    className={
                      selected === question.id ? "selected text" : "text"
                    }
                  >
                    {question.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
