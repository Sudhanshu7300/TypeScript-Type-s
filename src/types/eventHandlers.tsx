// eventHandlers.ts
import React, { ChangeEvent, MouseEvent } from "react";

export type InputChangeEventHandler = (
  event: ChangeEvent<HTMLInputElement>
) => void;

export type ButtonClickEventHandler = (
  event: MouseEvent<HTMLButtonElement>
) => void;

export type FormSubmitEventHandler = (
  event: React.FormEvent<HTMLFormElement>
) => void;

export type LinkClickEventHandler = (
  event: MouseEvent<HTMLAnchorElement>
) => void;

export type SelectChangeEventHandler = (
  event: ChangeEvent<HTMLSelectElement>
) => void;

export type TextAreaChangeEventHandler = (
  event: ChangeEvent<HTMLTextAreaElement>
) => void;

export type MouseOverEventHandler = (event: MouseEvent<HTMLElement>) => void;
export type MouseOutEventHandler = (event: MouseEvent<HTMLElement>) => void;
export type FocusEventHandler = (event: React.FocusEvent<HTMLElement>) => void;
export type BlurEventHandler = (event: React.FocusEvent<HTMLElement>) => void;
