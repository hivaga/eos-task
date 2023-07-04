# EOS TASK

## Requirements

Front End Developer

### Step 1:
Create a web page consisting of a left and right section separated by a splitter.
• the left section should occupy 20% of the page
• the right section should occupy 80% of the page

### Step 2:
Create and add a „tree“ type control in the left section:
• Еlements in the tree must be loaded from a file getWorkUnits.json
• Each element must be able to be opened and closed;
• A selected element must be highlighted by changing the font to bold

### Step 3:
Create and add a table type control in the right section:
• When selecting a face from the tree, the table should load and display the contents from a file
getPersonInfo.json

### Step 4:
Add the ability to add and edit an address from the table:
• When you select the link edit or add, a dialog should open to edit or add a new address
• Add validation for empty fields and change field color to red if it is empty

Remark: As an advantage will be considered an implementation that includes the use of Bootstrap, Javascript Framework
(AngularJS, ReactJS, Aurelia, KnockoutJS or similar)

Ниво на конфиденциалност: Public
            
ЕОС Матрикс ЕООД Стр. 2 от 4

Ниво на конфиденциалност: Public

ЕОС Матрикс ЕООД Стр. 3 от 4
The json files must be in the following format. Note that these are not real json files, you have to create them
with the appropriate guid ids, using the example format:

``` 
getWorkUnits.json

[
  {
    "workUnitId": "00000000-0000-0000-0000-000000000005",
    "entityType": "00000000-0000-0000-0000-000000000002",
    "status": "00000000-0000-0000-0000-000000000000",
    "key": "0000557",
    "date": "4/4/2016",
    "type": "00000000-0000-0000-0000-000000000003",
    "court": "ЧСИ - 851",
    "bailiffName": "Физическо лице 1",
    "debtors": [
      {
        "workUnitId": "00000000-0000-0000-0000-000000000022",
        "name": "Лице 11"
      },
      {
        "workUnitId": "00000000-0000-0000-0000-000000000023",
        "name": "Лице 12"
      }
    ],
    "otherPeople": [
      {
        "workUnitId": "00000000-0000-0000-0000-000000000024",
        "name": "Лице 13"
      }
    ],
    "cases": [
      {
        "workUnitId": "00000000-0000-0000-0000-000000000042",
        "package": "Случай 21",
        "status": 0
      }
    ]
  }
] 

getPersonAddresses.json
{
  "addresses": [
    {
      "id": "c8c9772d-4c6b-6865-e053-0100007f6ed2",
      "settlementName": "ПРОВАДИЯ",
      "zipCode": "9201",
      "address": "Ж.К.СЕВon RpL25 uvog tiJ3 rUo72",
      "dateAdded": "2011-06-07T13:39:52+03:00"
    },
    {
      "id": "8e1f0c1f-0efd-4b00-9d8e-413b9ecae3d6",
      "contactActivityTypeId": null,
      "settlementName": "МАЛО СЕЛО",
      "zipCode": "2636",
      "address": "ул.Първа 6",

      Ниво на конфиденциалност: Public

      ЕОС Матрикс ЕООД Стр. 4 от 4
    }
  ]
}

getCaseInfo.json
[
  {
    "workUnitId": "03123",
    "debtor": "банк 1",
    "date": "05/06/2016",
    "package": "PPPPP",
    "boughtAmount": {
      "amount": 4000,
      "currency": "BGN"
    },
    "paidAmount": {
      "amount": 500,
      "currency": "BGN"
    },
    "dueAmount": {
      "amount": 6000,
      "currency": "BGN"
    }
  },
  {
    "workUnitId": "04123",
    "debtor": "банк 2",
    "date": "05/06/2016",
    "package": "PPPPP",
    "boughtAmount": {
      "amount": 4300,
      "currency": "BGN"
    },
    "paidAmount": {
      "amount": 500,
      "currency": "BGN"
    },
    "dueAmount": {
      "amount": 7000,
      "currency": "BGN"
    }
  }
]

