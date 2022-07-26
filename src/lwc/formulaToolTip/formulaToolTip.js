import { LightningElement, api } from "lwc";
import omniscriptFormula from "vlocity_ins/omniscriptFormula";
import template from "./formulaToolTip.html"
import { OmniscriptBaseMixin } from 'vlocity_ins/omniscriptBaseMixin';
export default class formulaToolTip extends OmniscriptBaseMixin(omniscriptFormula){

// your properties and methods here
    @api tmpWidth=''
    connectedCallback() {

        super.connectedCallback();

    }

    render() {

//console.log(JSON.stringify(this.jsonDef.propSetMap.helpText)); //this is how you get at the properties of the formula element.
//I create a temporary div, fill it with the label, calculate the width to determine relative left placement, then delete it.
        var tmpDiv = document.createElement('div');
        tmpDiv.style.position='absolute';
        tmpDiv.style.height='auto';
        tmpDiv.style.width='auto';
        tmpDiv.style.whiteSpace='nowrap';
        tmpDiv.style.fontSize = '12px';
        tmpDiv.style.color='transparent';
        tmpDiv.innerHTML=this.jsonDef.propSetMap.label;
        document.body.appendChild(tmpDiv);
        this.tmpWidth = (tmpDiv.offsetWidth+25) + 'px'; //this isn't an exact science, but it gets pretty close
    console.log(this.tmpWidth);
        document.documentElement.style.setProperty('--myvariable', this.tmpWidth);
        tmpDiv.remove();
        return template;
    }

}