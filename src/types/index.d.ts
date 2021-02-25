type InputItem = {
  id: string;
  label: string;
  value: string;
};

type InputState = {
  sampleText: string;
  samplePassword: string;
  sampleTextarea: string;
  sampleRadio: string;
  sampleSelect: string;
  sampleCheck: string[];
};

type ResultState = {
  results: null | InputState;
};
