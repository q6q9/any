 class DateHelper {
        getMonth(date) {
            date = this.nextMonth(date)
            date = this.prevDay(date)
            let days = [], last = date, quantity = this.getQuantity(date)
            for (let i = 0; i < (7 - last.getDay()) % 7; i++) {
                days.push((7 - last.getDay()) % 7 - i)
            }
            for (let i = 0; i < last.getDate(); i++) {
                days.push(last.getDate() - i)
            }
            date = this.prevMonth(date)
            date = this.nextMonth(date)
            date = this.prevDay(date)
            for (let i = 0, lenDays = quantity - days.length; i < lenDays; i++) {
                days.push(date.getDate() - i)
            }
            return days.reverse();
        }

        getQuantity(date) {
            if (this.isDayOff(date)) {
                return 42
            }
            if (this.prevDay(this.nextMonth(date)).getDate()==28){
                return 28;
            }
            return 35

        }

        isDayOff(date) {
            return [6, 0].includes(new Date(date.getFullYear(), date.getMonth(), 1).getDay())
        }

        prevDay(date) {
            return new Date(date.getTime() - 1000 * 3600 * 24)
        }

        nextMonth(date) {
            if (this.isDecember(date)) {
                return new Date(date.getFullYear() + 1, 0, 1)
            }
            return new Date(date.getFullYear(), date.getMonth() + 1, 1)
        }

        prevMonth(date) {
            if (this.isJanuary(date)) {
                return new Date(date.getFullYear() - 1, 11, 1)
            }
            return new Date(date.getFullYear(), date.getMonth() - 1, 1)
        }

        isDecember(date) {
            return 11 == date.getMonth()
        }

        isJanuary(date) {
            return 0 == date.getMonth()
        }
    }
