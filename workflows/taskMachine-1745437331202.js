
import { createMachine } from 'xstate';

const taskMachine = createMachine(
  {
  "id": "taskProcess",
  "initial": "1",
  "states": {
    "1": {
      "description": "1",
      "on": {
        "InstanceCreated": {
          "target": "CreateTask",
          "actions": "CreateTask"
        }
      }
    }
  }
},
  {
    actions: {},
  }
);

export default taskMachine;
    