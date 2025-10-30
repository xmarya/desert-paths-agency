import styled from "styled-components";

export const Form = styled.form`
  background-color: var(--colour-highlight-background);
  width: 60%;
  min-width: 30rem;
  display: flex;
  flex-direction: column;
  gap: var(--contents-gap);
  border-radius: var(--sm-radius);
  padding-block: 5rem;
  backdrop-filter: blur(6px) saturate(180%);
  -webkit-backdrop-filter: blur(6px) saturate(180%);

  @media (max-width:43.75em) {
    width: 90%;
  }
`;

export const FormRow = styled.div`
  color: var(--colour-primary-dark-brown);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.2rem;
  padding-inline: 4rem;

  label {
    font-size: var(--xl-text);
  }

  input {
    background-color: var(--colour-main-background) ;
    width: 90%;
    height: 3rem;
    border-radius: var(--sm-radius);
    padding: 1.2rem;
    outline: none;
    border: 0;
  }

  textarea {
    background-color: var(--colour-main-background) ;
    width: 90%;
    height: 10rem;
    resize: none;
    border-radius: var(--sm-radius);
    border: 0;
    padding: 1.2rem;

    &::-webkit-scrollbar {
      scrollbar-width: thin;
      background-color: var(--colour-grey-300);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--colour-grey-300);
      border-radius: 1rem; /* Optional: for rounded corners */
      border: 0.3rem solid var(--colour-grey-300); /* Matches the container background color */
      background-clip: padding-box; /* Ensures that the border is visible */
    }
  }

  input:hover,
    textarea:hover {
        border: 0;
        border-radius: var(--sm-radius);
        /* outline: 0.2rem solid var(--colour-primary-light-brown); */
    }

    input:focus,
    textarea:focus{
        border-radius: var(--sm-radius);
        outline: 0.2rem solid var(--colour-primary-light-brown);
        outline-offset: 0.2rem; // overriding the outline in the general :focus selector in index.css
    }

    @media (max-width: 37.5em) {
      padding-inline: 2rem;
      input, textarea {
        width: 100%;
      }
    }
`;

