import React, { Component } from 'react';
import * as Datetime from 'react-datetime';

export default class PageMigrationScheduler extends Component {
    constructor(props){
        super(props);
        //this.disableScheduleTime();
        this.state = {
          dateTimeInput:false,
          dateTimePickerOpen:false
        };

    }

    setCallbackUrl = (event) =>{
        this.props.setCallbackUrl(event.target.value);
    }

    disableScheduleTime = () =>{
        console.log('disable scheduleTime');
//        var scheduleTime = document.getElementById("PageMigrationScheduler_scheduleTime")
//        console.log('disable scheduleTime' + scheduleTime.value);
//        scheduleTime.disabled = true;
//        scheduleTime.value='';

        this.setState({
            dateTimeInput:false,
            dateTimePickerOpen:false
         });
    }

    enableScheduleTime = () =>{
        console.log('enable scheduleTime');
        //document.getElementById("PageMigrationScheduler_scheduleTime").disabled = false;
        this.setState({
            dateTimeInput:true,
            dateTimePickerOpen:true
         });
    }

    handleDateTimeInput = (moment) =>{
        console.log('handleDateTimeInput' + moment.format("YYYY/MM/DD hh:mm:ss a"));
        this.props.setScheduleStartTime(moment.format("YYYY/MM/DD hh:mm:ss a"));
    }

  render() {

    return (
        <div className="form-horizontal">

            <table border="0" width="100%" height="30%">
              <tbody>
              <tr>
                  <td width="30%"/>
                  <td width="40%" align="left">
                      Callback URL: <input type="text" name="callbackUrl" onChange={this.setCallbackUrl}/>
                </td>
                <td width="40%"/>
              </tr>
                <tr>
                    <td width="30%"/>
                    <td width="40%" align="left">
                        <input type="radio" name="timeType" value="1" defaultChecked onClick={this.disableScheduleTime}/>Run Migration Now
                    </td>
                    <td width="30%"/>
                </tr>
                <tr>
                    <td width="30%"/>
                    <td width="40%" align="left">
                        <input type="radio" name="timeType" value="2" onClick={this.enableScheduleTime}/>Schedule Migration
                        <Datetime id="PageMigrationScheduler_scheduleTime"
                            input={this.state.dateTimeInput}
                            open={this.state.dateTimePickerOpen}
                            onChange={this.handleDateTimeInput}/>
                  </td>
                  <td width="40%"/>
                </tr>

              </tbody>
            </table>

        </div>

    );
  }
}
