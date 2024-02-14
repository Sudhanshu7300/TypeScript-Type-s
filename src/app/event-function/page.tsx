"use client";
import React, { useState } from "react";
import {
  InputChangeEventHandler,
  ButtonClickEventHandler,
  FormSubmitEventHandler,
  LinkClickEventHandler,
  SelectChangeEventHandler,
  TextAreaChangeEventHandler,
  MouseOverEventHandler,
  MouseOutEventHandler,
  FocusEventHandler,
} from "../../types/eventHandlers";
import styles from "../page.module.css";

export default function EventFunction() {
  const handleInputChange: InputChangeEventHandler = (event) => {
    const inputValue = event.target.value;
    console.log(`Input value changed to: ${inputValue}`);
  };
  const handleButtonClick: ButtonClickEventHandler = (event) => {
    console.log("Button clicked!");
  };
  const handleSubmit: FormSubmitEventHandler = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };
  const handleLinkClick: LinkClickEventHandler = (event) => {
    console.log("Link clicked!");
  };
  const handleSelectChange: SelectChangeEventHandler = (event) => {
    const selectedValue = event.target.value;
    console.log(`Selected value: ${selectedValue}`);
  };
  const handleTextareaChange: TextAreaChangeEventHandler = (event) => {
    const textValue = event.target.value;

    console.log(`Textarea value changed to: ${textValue}`);
  };
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver: MouseOverEventHandler = (event) => {
    setIsHovered(true);
  };

  const handleMouseLeave: MouseOverEventHandler = (event) => {
    setIsHovered(false);
  };
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOut: MouseOutEventHandler = (event) => {
    setIsMouseOver(false);
  };

  const handleMouseEnter: MouseOutEventHandler = (event) => {
    setIsMouseOver(true);
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus: FocusEventHandler = (event) => {
    setIsFocused(true);
  };

  const handleBlur: FocusEventHandler = (event) => {
    setIsFocused(false);
  };

  return (
    <div
      style={{
        padding: "6rem",
      }}
    >
      <div style={{ width: "100%", display: "flex" }}>
        <h2>
          Work with event handling functions in a strongly typed manner. Event
          handling functions are typically used in web development to respond to
          user interactions, such as clicking a button or submitting a form
        </h2>
      </div>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <div>
          <div className="mt-20">
            <h3>1. InputChangeEventHandler</h3>
            <div className="mt-20">
              <label>Enter text: </label>
              <input
                className="ml-10"
                type="text"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mt-20">
            <h3>2. ButtonClickEventHandler</h3>
            <div className="mt-20">
              <button onClick={handleButtonClick}>Click me</button>
            </div>
          </div>
          <div className="mt-20">
            <h3>3. FormSubmitEventHandler</h3>
            <div className="mt-20">
              <form onSubmit={handleSubmit}>
                <label>
                  Enter Name:
                  <input className="ml-10" type="text" />
                </label>
                <button className="ml-10" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="mt-20">
            <h3>4. LinkClickEventHandler</h3>
            <div className="mt-20">
              <button>
                <a href="/" onClick={handleLinkClick}>
                  Go To Home
                </a>
              </button>
            </div>
          </div>
          <div className="mt-20">
            <h3>5. SelectChangeEventHandler</h3>
            <div className="mt-20">
              <label className="ml-10">Select an option: </label>
              <select onChange={handleSelectChange}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-20">
            <h3>6. TextAreaChangeEventHandler</h3>
            <div className="mt-20">
              <textarea rows={4} cols={50} onChange={handleTextareaChange} />
            </div>
          </div>
          <div className="mt-20">
            <h3>7. MouseOverEventHandler</h3>
            <div className="mt-20">
              <p
                className={isHovered ? "hovered" : ""}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              >
                Hover over this paragraph
              </p>
            </div>
          </div>
          <div className="mt-20">
            <h3>8. MouseOutEventHandler</h3>
            <div className="mt-20">
              <p
                onMouseOut={handleMouseOut}
                onMouseEnter={handleMouseEnter}
                style={{ color: isMouseOver ? "red" : "white" }}
              >
                Mouse out of this paragraph to change color
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="mt-20">
              <h3>9. FocusEventHandler</h3>
              <div className="mt-20">
                <input
                  type="text"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={{ borderColor: isFocused ? "blue" : "black" }}
                />
                <label className="ml-10">
                  {isFocused ? "Input is focused" : "Input is not focused"}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
