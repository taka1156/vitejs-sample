type CheckItem = {
  id: string;
  label: string;
  value: string;
};

type RadioItem = {
  id: string;
  label: string;
  value: string;
};

type SelectItem = {
  label: string;
  value: string;
};

type InputState = {
  sampleText: string;
  samplePassword: string;
  sampleTextarea: string;
  sampleRadio: string;
  sampleSelect: string;
  sampleCheck: [];
};

type ResultState = {
  results: null | InputState;
};
