import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment'
import {loadScript} from 'lightning/platformResourceLoader'
export default class ThirdPartyFiles extends LightningElement {
    currentDate=''
    date = ''
    isLibLoaded = false
    renderedCallback(){ 
        if(this.isLibLoaded){ 
            return
        } else { 
   
            loadScript(this, MOMENT+'/moment/moment.min.js').then(()=>{ 
                this.setDateOnScreen()
            }).catch(error=>{ 
                console.error(error)
            })
            this.isLibLoaded = true
        }
       
    }
    setDateOnScreen(){ 
        this.currentDate = moment().format('LLLL')
        this.date = moment().format('MMMM Do YYYY, h:mm:ss a')
    }
}