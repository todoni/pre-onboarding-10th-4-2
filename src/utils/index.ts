import { FormRef, InputRef } from "../types/todo";

export const blurInput = (ref: InputRef, formRef: FormRef) => {
  if (!ref.current || !formRef.current) return;
  const { scrollWidth, clientWidth } = ref.current;
  if (scrollWidth > clientWidth && scrollWidth > 290)
    formRef.current.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
  else formRef.current.style.boxShadow = "none";
};
