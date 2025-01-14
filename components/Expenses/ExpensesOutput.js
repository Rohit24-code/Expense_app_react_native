import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES=[
  {id:"e1",
   description:"A pair of shoes",
   amount:59.99,
   date: new Date('2021-12-19')
  },
  {id:"e2",
    description:"A pair of trousers",
    amount:89.99,
    date: new Date('2022-01-05')
   },
   {id:"e3",
    description:"A book",
    amount:14.99,
    date: new Date('2022-02-19')
   },
   {id:"e4",
    description:"A pen",
    amount:9.99,
    date: new Date('2022-02-18')
   }
]

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES}  periodName={expensesPeriod}/>
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles= StyleSheet.create({
  container:{
    paddingHorizontal:24,
    paddingTop:24,
    paddingBottom:0,
    backgroundColor: GlobalStyles.colors.primary700,
    flex:1
  }
})
