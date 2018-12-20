import React, { Component } from 'react';


export default class PageMigrationScheduler extends Component {

  render() {

    return (
        <div className="form-horizontal">
            <table border="0" width="100%" height="30%">
              <tbody>
                <tr>
                    <td width="30%"/>
                    <td width="40%" align="left">
                        <input type="radio" name="reason" name="group1" value="Fit Description" checked="checked"/>Run Migration Now
                    </td>
                    <td width="30%"/>
                </tr>
                <tr>
                    <td width="30%"/>
                    <td width="40%" align="left">
                        <input type="radio" name="reason" name="group1" value="" />Schedule Migration
                        <input type="text" name="scheduleTime" placeholder="yyyy-MM-dd HH:mm"/>
                  </td>
                  <td width="40%"/>
                </tr>
              </tbody>
            </table>

        </div>



    );
  }
}
