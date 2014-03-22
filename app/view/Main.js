Ext.define('SenchaApp1.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.carousel.Carousel'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to my first Sencha Touch App'
                },

                html: [
                    "Test-App"
                ].join("")
            },
            {
                title: 'Carousel UI',
                iconCls: 'star',
                //displayField: 'title',
                cls: 'card',
                layout:{
                    type: 'vbox',
                    align: 'stretch'
                },
                defaults: {
                    flex: 1
                },
                items: [{
                    xtype: 'carousel',
                    items: [{
                          html: '<p>First Card.....</p>',
                          cls: 'card'
                        },
                        {
                          html: '<p>Second Card.....</p>',
                          cls: 'card'                    
                    }]
                }]

            },
            {
                title: 'Navigation UI',
                iconCls: 'star',
                displayField: 'title',
            
                xtype: 'navigationview',

                //we only give it one item by default, which will be the only item in the 'stack' when it loads
                items: [
                    {
                        //items can have titles
                        title: 'Navigation View',
                        padding: 10,

                        //inside this first item we are going to add a button
                        items: [
                            {
                                xtype: 'button',
                                text: 'Press Here! (No Function available!)',
                                handler: function() {
                                    //when someone taps this button, it will push another view into stack
                                    view.push({
                                        //this one also has a title
                                        title: 'Second View',
                                        padding: 10,

                                        //once again, this view has one button
                                        items: [
                                            {
                                                xtype: 'button',
                                                text: 'Press here again!',
                                                handler: function() {
                                                    //and when you press this button, it will pop the current view (this) out of the stack
                                                    view.pop();
                                                }
                                            }
                                        ]
                                    });
                                }
                            }
                        ]
                    }
                    ]
            },
            {
                title: 'TAB UI',
                iconCls: 'star',
                displayField: 'title',

                activeTab: 1,

                defaults: {
                    styleHtmlContent: true
                },

                items: [{
                        docked: 'top',
                        xtype: 'titlebar',
                        items: [{
                                title: 'Home-Example-TAB',
                                iconCls: 'home',
                                html: 'No-func-tab1'                            
                            },
                            {
                                title: 'Example-TAB-2',
                                iconCls: 'star',
                                html: 'No-func-tab2' 
                        }]                             
                }]  
            }
        ]
    }
});
