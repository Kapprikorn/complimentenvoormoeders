import { Component } from '@angular/core';
import { NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-compliments',
  imports: [NgbCollapseModule],
  templateUrl: './compliments.html',
  styleUrl: './compliments.css'
})
export class Compliments {
  isCollapsed = true;

  private birthDay = 28
  private birthMonth = 8

  get isBirthday() {
    const today = new Date();
    return today.getMonth() === this.birthMonth && today.getDate() === this.birthDay;
  };

  get daysUntilBirthday() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const birthday = new Date(currentYear, this.birthMonth, this.birthDay);

    if (today > birthday) {
      birthday.setFullYear(currentYear + 1);
    }

    const diffTime = birthday.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  protected confirmBirthday(day: string | number, month: string | number) {
    const parsedDay = Number(day);
    const parsedMonth = Number(month);

    // Basic validation
    if (!Number.isInteger(parsedDay) || parsedDay < 1 || parsedDay > 31) {
      return;
    }
    if (!Number.isInteger(parsedMonth) || parsedMonth < 0 || parsedMonth > 11) {
      return;
    }

    this.birthDay = parsedDay;
    this.birthMonth = parsedMonth;
  }
}
