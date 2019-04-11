import * as React from "react";
import "./App.css";
import {
  Day, Week, WorkWeek, Month, Agenda, ScheduleComponent,
  ViewsDirective, ViewDirective, Inject, Resize, DragAndDrop
} from "@syncfusion/ej2-react-schedule";


export default class App extends React.Component {
  mouseupHandler(e: any) {
    let sch: any = ((document.querySelector('.e-schedule')) as any).ej2_instances[0];
    var target = e.target.classList.contains('e-work-cells');
    var selectedCells = sch.element.querySelectorAll(".e-selected-cell");
    if (selectedCells.length > 1 && target) {
      var activeCellsData = sch.getCellDetails(sch.getSelectedElements());
      sch.openEditor(activeCellsData, 'Add');
    }
  }
  componentDidMount() {
    document.addEventListener('mouseup', this.mouseupHandler.bind(this));
  }
  componentWillUnmount() {
    document.removeEventListener('mouseup', this.mouseupHandler.bind(this));
  }
  render() {
    return (
      <ScheduleComponent height='500px' selectedDate={new Date(2018, 1, 15)}>
        <ViewsDirective>
          <ViewDirective option='Day' />
          <ViewDirective option='Week' />
          <ViewDirective option='WorkWeek' />
          <ViewDirective option='Month' />
          <ViewDirective option='Agenda' />
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>);
  }
}
