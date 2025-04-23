
import { createMachine } from 'xstate';

const taskMachine = createMachine(
  {
  "id": "taskProcess",
  "initial": "State 1",
  "states": {
    "State 1": {
      "description": "Description 1",
      "on": {
        "InstanceCreated": {
          "target": "CreateTask",
          "actions": "CreateTask"
        }
      }
    },
    "State 2": {
      "description": "Description 2",
      "on": {
        "TaskCreated": {
          "target": "None",
          "actions": "Log"
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
    