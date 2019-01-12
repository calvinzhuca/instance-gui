import React from 'react';

export const MockupData_planList = [
   {
      "id":1,
      "name":"mockupTest1",
      "description":"mockup_",
      "mappings":{
         "_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E":"_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E"
      },
      "source_container_id":"evaluation_2.0.0-SNAPSHOT",
      "target_container_id":"evaluation_3.0.0-SNAPSHOT",
      "target_process_id":"evaluation"
   },
   {
      "id":2,
      "name":"upgrade",
      "description":"mockup_",
      "mappings":{
         "_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E":"_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E"
      },
      "source_container_id":"evaluation_2.0.0-SNAPSHOT",
      "target_container_id":"evaluation_3.0.0-SNAPSHOT",
      "target_process_id":"evaluation"
   },
   {
      "id":3,
      "name":"downgrade",
      "description":"mockup_",
      "mappings":{
         "_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E":"_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E"
      },
      "source_container_id":"evaluation_3.0.0-SNAPSHOT",
      "target_container_id":"evaluation_2.0.0-SNAPSHOT",
      "target_process_id":"evaluation"
   },
   {
      "id":5,
      "name":"bbb",
      "description":"mockup_dddd",
      "mappings":{

      },
      "source_container_id":"evaluation_2.0.0-SNAPSHOT",
      "target_container_id":"Mortgage_Process.MortgageApprovalProcess_1.0.0-SNAPSHOT",
      "target_process_id":"Mortgage_Process.MortgageApprovalProcess"
   },
   {
      "id":8,
      "name":"aa",
      "description":"mockup_bb",
      "mappings":{

      },
      "source_container_id":"evaluation_3.0.0-SNAPSHOT",
      "target_container_id":"evaluation_2.0.0-SNAPSHOT",
      "target_process_id":"evaluation"
   },
   {
      "id":9,
      "name":"a",
      "description":"mockup_bfff",
      "mappings":{

      },
      "source_container_id":"evaluation_2.0.0-SNAPSHOT",
      "target_container_id":"Mortgage_Process.MortgageApprovalProcess_1.0.0-SNAPSHOT",
      "target_process_id":"Mortgage_Process.MortgageApprovalProcess"
   },
   {
      "id":10,
      "name":"sdf",
      "description":"mockup_sdf",
      "mappings":{

      },
      "source_container_id":"evaluation_2.0.0-SNAPSHOT",
      "target_container_id":"Mortgage_Process.MortgageApprovalProcess_1.0.0-SNAPSHOT",
      "target_process_id":"Mortgage_Process.MortgageApprovalProcess"
   },
   {
      "id":11,
      "name":"dfdfd",
      "description":"mockup_dfdf",
      "mappings":{

      },
      "source_container_id":"evaluation_2.0.0-SNAPSHOT",
      "target_container_id":"Mortgage_Process.MortgageApprovalProcess_1.0.0-SNAPSHOT",
      "target_process_id":"Mortgage_Process.MortgageApprovalProcess"
   },
   {
      "id":12,
      "name":"upgrade",
      "description":"mockup_",
      "mappings":{
         "_D3E17247-1D94-47D8-93AD-D645E317B736":"_D3E17247-1D94-47D8-93AD-D645E317B736",
         "_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E":"_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E"
      },
      "source_container_id":"evaluation_2.0.0-SNAPSHOT",
      "target_container_id":"evaluation_3.0.0-SNAPSHOT",
      "target_process_id":"evaluation"
   },
   {
      "id":13,
      "name":"upgrade",
      "description":"mockup_upgrade123",
      "mappings":{
         "_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E":"_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E"
      },
      "source_container_id":"evaluation_2.0.0-SNAPSHOT",
      "target_container_id":"evaluation_3.0.0-SNAPSHOT",
      "target_process_id":"evaluation"
   }
];

export const MockupData_runningInstances = [
   {
      "id":1,
      "processInstanceId":2,
      "name":"Evaluation",
      "description":"mockup_Evaluation",
      "state":1,
      "startTime":"2019-01-06 21:06:55"
   },
   {
      "id":2,
      "processInstanceId":3,
      "name":"Evaluation",
      "description":"mockup_Evaluation",
      "state":1,
      "startTime":"2019-01-06 21:30:23"
   },
   {
      "id":3,
      "processInstanceId":4,
      "name":"Evaluation",
      "description":"mockup_Evaluation",
      "state":1,
      "startTime":"2019-01-06 21:49:27"
   },
   {
      "id":4,
      "processInstanceId":5,
      "name":"Evaluation",
      "description":"mockup_Evaluation",
      "state":1,
      "startTime":"2019-01-06 21:49:34"
   },
   {
      "id":5,
      "processInstanceId":6,
      "name":"Evaluation",
      "description":"mockup_Evaluation",
      "state":1,
      "startTime":"2019-01-06 21:58:54"
   },
   {
      "id":6,
      "processInstanceId":7,
      "name":"Evaluation",
      "description":"mockup_Evaluation",
      "state":1,
      "startTime":"2019-01-06 21:59:04"
   }
];


export const MockupData_PIM_response = {
  "id": 22,
  "definition": {
    "execution": {
      "type": "ASYNC",
      "callback_url": "This is mockup reponse",
      "scheduled_start_time": null
    },
    "plan_id": 2,
    "process_instance_ids": [
      1
    ]
  },
  "status": "CREATED",
  "created_at": "2019-01-12T01:04:52.035",
  "started_at": null,
  "finished_at": null,
  "cancelled_at": null,
  "error_message": null
};
