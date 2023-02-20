export class TransferModel {
  outcome: string;
  income: string;
  reason: string;
  amount: string;

  constructor(
    outcome: string,
    income: string,
    reason: string,
    amount: string
  ) {
    this.outcome = outcome;
    this.income = income;
    this.reason = reason;
    this.amount = amount;
  }
}
