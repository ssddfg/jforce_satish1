import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import APPOINTMENT_OBJECT from '@salesforce/schema/Appointment_Details__c'
import NAME_FIELD from '@salesforce/schema/Appointment_Details__c.Name'
import CONTACT_FIELD from '@salesforce/schema/Appointment_Details__c.Contact__c'
import SUBJECT_FIELD from '@salesforce/schema/Appointment_Details__c.Subject__c'
import APPOINTMENT_DATE_FIELD from '@salesforce/schema/Appointment_Details__c.Appointment_Date__c'
import APPOINTMENT_TIME_FIELD from '@salesforce/schema/Appointment_Details__c.Appointment_Time__c'
import DESCRIPTION_FIELD from '@salesforce/schema/Appointment_Details__c.Description__c'


export default class AppointmentForm extends LightningElement 
{
    //Description__c
    objectName = APPOINTMENT_OBJECT
    fields = {
        //accountField : ACCOUNT_FIELD,
        nameField : NAME_FIELD,
        contactField : CONTACT_FIELD,
        subjectField : SUBJECT_FIELD,
        appointmentDateField : APPOINTMENT_DATE_FIELD,
        appointmentTimeField : APPOINTMENT_TIME_FIELD,
        descriptionField : DESCRIPTION_FIELD
       
        }

        successHandler(event)
        {
        //console.log(event.detail.id)
        const toastEvent = new ShowToastEvent({
            title : "Account Created",
            //message : "Record ID :" +  event.detail.id,
            variant : "success"
        })
        this.dispatchEvent(toastEvent)
        }
}