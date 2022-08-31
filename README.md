<h1>A-HLS LWC Tooltips to Formula Elements - Documentation</h1>

<h2>Overview</h2>

It's not uncommon to need to surface how formulas are calculated within the user interface, particularly in Healthcare and Life Sciences use cases. 

Currently, tooltips are not officially supported on formula elements, although partially supported by the underlying masked input component. Unfortunately, the underlying support also has positioning issues, hence here are two visual samples:

[Image: image.png]
[Image: image.png]


<h2>Business Objective</h2>

Provide tool tips support for formulas

<h3>Business Value and Benefits</h3>

* Reduce development time
* Improve user experience


<h2>Package Includes:</h2>

*OmniScript (1)*

* ToolTip_OS

*Custom LWC Components (1)*

* FormulaToolTip


<h2>Configuration Requirements</h2>

1. Install the LWC found at https://github.com/healthcare-and-life-sciences/lwc-tooltips-to-formula-elements/tree/main/src/lwc/formulaToolTip 
2. Add a Formula Element of your choosing in your OmniScript
    1. In the Properties pane of the Formula Element, Choose “Edit JSON” and add your custom tooltip text in the helpText key value pair:

![](/images/tooltip1.png)

1. Extend the formula element via the LWC Designer (or VSC):
    1. You can give the LWC a name of your choosing

![](/images/tooltip2.png)
    1. Add the appropriate JS and HTML
    2. Add a new CSS file and add the CSS (see below).
    3. Return to your OS and associate the LWC extension:

![](/images/tooltip3.png)


1. Activate and review your tooltip.
2. A sample OS can be found at https://github.com/healthcare-and-life-sciences/lwc-tooltips-to-formula-elements/tree/main/Omnistudio

<h2>Assumptions</h2>

* You are an Omnistudio developer who knows how to use LWC in Omniscript and Flexcard. You should be familiar with SF LWC development and Git
* You are working in an org that has OmniStudio installed.


<h2>Revision History</h2>

* *Revision Short Description (Month Day, Year)*

    * Initial Commit (August 31, 2022

