Ext.define('oaisis.view.toptab.JobTab', {
    extend: 'Ext.form.Panel',
    alias: 'widget.job',

    intiComponent: function(){
        this.layout = 'column';
        this.items = [this.column1(), this.column2(), this.column3()];

        return this.callParent(arguments);
    },

    column1: function() {
        return {
            columnWidth:.40,
            bodyStyle: 'padding:5px',
            items:[{
                xtype: 'textfield',
                name: 'job_name',
                blankText: 'Job Name',
                allowBlank: false
            },{
                xtype: 'textfield',
                name: 'job_number',
                blankText: 'Job #',
                allowBlank: false
            },{
                xtype: 'textfield',
                name:'street_number',
                blankText: 'Street',
                allowBlank: false
            },{
                xtype:'container',
                layout: 'hbox',
                items:[{
                    xtype: 'textfield',
                    flex: 4,
                    name:'city',
                    blankText: 'City',
                    allowBlank: false
                },{
                    xtype: 'textfield',
                    flex: 1,
                    name: 'state',
                    blankText:'State',
                    allowBlank:false
                },{
                    xtype: 'textfield',
                    flex: 2,
                    name: 'zipcode',
                    blankText:'Zipcode',
                    allowBlank: false
                }]

            }]

        };
    },

    column2: function(){
        return {
            columnWidth: .4,
            bodyStyle: 'padding:5px',
            itmes:[{
                xtype:'textfield',
                name:'ref_number',
                blankText:"Ref #(Customer's)"
            },{
                xtype: 'textfield',
                name: 'po_number',
                blankText: 'PO #'
            },{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype:'button',
                    text: 'Contacts',
                    iconCls:''
                }]

            }]
        };
    },
    column3: function(){
        return{

        };
    }
});