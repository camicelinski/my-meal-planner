import styled from 'styled-components'

const StyledMealPlanner = styled.div`
  .calendar {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  // font-family: sans-serif;
  border: 2px solid var(--border-calendar);
  border-radius: var(--radius-primary);
  position: relative;
}

.calendar a {
  color: grey;
}

.cell {
  // background: #fffeee;
  width: 14.2857%;
  height: 90px;
  font-size: 0.7em;
  // box-shadow: 0 0px 1px #393939;
  border-right: 1px solid var(--bg-calendar);
}

.cell:nth-child(9) {
  border-left: none;    
  -moz-border-radius-bottom-left: var(--radius-primary);
  -webkit-border-bottom-left-radius: var(--radius-primary);
  border-bottom-left-radius: var(--radius-primary);
}

.cell:last-child {
  border-right: none;    
  -moz-border-radius-bottom-right: var(--radius-primary);
  -webkit-border-bottom-right-radius: var(--radius-primary);
  border-bottom-right-radius: var(--radius-primary);
}

.cell .date {
  margin: 5px;
  display: flex;
  justify-content: space-between;
}

.date div {
  // padding: 5px;
  width: 1.5rem;
  height: 1.5rem;
}

.date div:first-child {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.date .day,
.date .addEventOnDay {
  border-radius: 50%;
  padding: 5px;
}

.date .day {
  font-size: 0.9rem;
}

.current {
  // background: #d3edd3;
}

.current .date div:first-child {
  font-weight: bold;
  color: var(--color-theme);
  // background-color: var(--color-theme);
}

.cell:hover .date div:first-child {
  background-color: var(--color-theme-hover);
}

.activedate {
  background-color: var(--bg-cell);
}

.otherMonth {
  background: #f7f7f7;
}

.otherMonth .date {
  color: #bfbfbf;
}

// button
.addEventOnDay {
  // display: inline-block;
  color: var(--text-primary);
  text-decoration: none;
  // margin-left: 4px;
  background: var(--bg-calendar);
  // padding: 0 6px;
  // border-radius: 3px;
  transition: var(--transition-style);
}

.addEventOnDay:hover {
  background: var(--border-calendar);
}

.miniEvent {
  background: #1f86ef;
  color: white;
  padding: 3px;
  margin: 2px;
  height: 1em;
  width: 1em;
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
}

.miniEvent.breakfast {
  background: var(--meal-breakfast);
}

.miniEvent.elevenses {
  background: var(--meal-elevenses);
}

.miniEvent.lunch {
  background: var(--meal-lunch);
}

.miniEvent.snacks {
  background: var(--meal-snacks);
}

.miniEvent.dinner {
  background: var(--meal-dinner);
}

.dayLabel.cell {
  // font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  height: auto;
  padding: 5px 0;
  // background: #e9e9e9;
  border: none;
  border-bottom: 1px solid var(--bg-calendar);
  // background: var(--bg-calendar);
}

.addEvent {
  text-decoration: none;
  color: black;
  display: block;
  text-align: center;
  width: 100%;
  background: #3fb73f;
  border-bottom: 2px solid green;
  color: white;
  padding: 10px;
}

.form input, .form select {
  width: calc(100% - 16px);
  padding: 5px;
  margin: 6px 0 10px 0;
  border: 3px solid #cacaca;
  border-radius: 4px;
  background: #f9f9f9;
}

.form select {
  width: 100%;
}

.form label {
  font-weight: bold;
  text-align: left;
  font-size: 0.8em;
  display: block;
}

button {
  width: 100%;
  // background: #3fb73f;
  border: 0;
  // border-bottom: 3px solid green;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
}

button.red {
  background: #c82727;
  border-bottom: 3px solid #a51616;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal {
  background: white;
  position: absolute;
  width: 50%;
  text-align: center;
  left: 25%;
  top: 5%;
  border-radius: 5px;
}

.modal .inner {
   padding: 20px 30px 30px 30px;
}

.modal h3 {
  margin: 0;
  background: #e6e6e6;
  padding: 12px;
  border-radius: 5px;
}

.modal p {
  font-size: 0.8em;
  line-height: 1.5em;
}

.modal .close {
  margin-top: 22px;
  font-size: 0.7em;
  display: block;
}

.eventModal p {
  margin-bottom: 24px;
}

.eventModal p:first-of-type {
  margin-top: 0;
  margin-bottom: 0;
}

.eventModal .delete {
  display: block;
  background: #df3317;
  border-bottom: 2pxsolid #a90c0c;
  color: white;
  text-decoration: none;
  padding: 10px;
  font-size: 0.8em;
  border-radius: 3px;
  margin-bottom: 6px;
}

.eventModal button.red {
  margin-top: 8px;
}

.feedback {
    position: absolute;
    width: 90%;
    padding: 16px 0;
    left: 5%;
    text-align: center;
    bottom: 5%;
    background: #3fb73f;
    border-bottom: 3px solid green;
    border-radius: 5px;
    text-align: center;
    color: white;
}

.loader {
  position: absolute;
  top: 50%;
  margin-top: -70px;
  left: 50%;
  margin-left: -38px;
}

/* animated loading spinner from https://loading.io/css/ */
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`

export default StyledMealPlanner
