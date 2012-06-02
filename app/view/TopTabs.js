Ext.define('oasis.view.TopTabs', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.toptabs',
    requires: [
        'oasis.view.toptab.JobTab',
        'oasis.view.toptab.CompanyTab',
        'oasis.view.toptab.NotesTab'
    ],

    initComponent: function(){
        this.tabPosition = 'bottom';
        this.title = 'Top Tabs';
        this.items =[{
            xtype: 'jobtab'
        },{
            xtype: 'companytab'
        },{
            xtype: 'notestab'
        }];
        return this.callParent(arguments);
    }
});