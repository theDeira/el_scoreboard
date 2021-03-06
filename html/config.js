var Config = {
    group_labels: { // these are custom labels that show instead of the normal group name
        superadmin: "<span style='color:red;'>Super Admin</span>",
        admin: "<span style='color:cyan;'>Admin</span>"
    },
    steam_api_key: "", // this is required for getting players' profile pics (https://steamcommunity.com/dev/apikey) or change this to a url for an image to use instead of players' pfp, recommended resolution is 96x96
    discord_url: "https://discord.gg/GbT49uH",
    website_url: "https://elipse458.me",
    steam_group_url: "https://steamcommunity.com/groups/Illuminated",
    navbar_buttons: [ // examples of custom buttons found below
        // { label: "MyCoolButton", page: "mycoolpage" }, // when page is specified, it will switch to the specified page (if defined)
        // { // if action is speicifed, page will not switch but the action function will be executed, there's a few custom functions you can use which are in github readme
        //     label: "MyCoolButton2",
        //     action: function() {
        // console.log("clicked my cool button 2");
        //     }
        // },
        { label: "Player List", page: "list" },
        { label: "Recent Disconnects", page: "disc" },
        { label: "Recent Connects", page: "con" },
        {
            label: "Website",
            action: function() {
                copyText(Config.website_url, "Website url copied to clipboard", 1500);
            }
        },
        {
            label: "Discord",
            action: function() {
                copyText(Config.discord_url, "Discord url copied to clipboard", 1500);
            }
        },
        {
            label: "Steam Group",
            action: function() {
                copyText(Config.steam_group_url, "Steam group url copied to clipboard", 1500);
            }
        }
    ],
    navbar_pages: {
        default: "list", // auto switch to this page when opening scoreboard (set to null to stay on last page)
        //mycoolpage: "<span style='color:green;font-size:20pt;'>My cool page</span>",
        list: "<table><thead><tr><th>ID</th><th>Name</th><th>Group</th><th>Job</th><th>Ping</th></tr></thead><tbody class='lcd-body'></tbody></table>",
        con: "<table><thead><tr><th>Name</th><th>Time</th></tr></thead><tbody class='lcd-body'></tbody></table>",
        disc: "<table><thead><tr><th>Name</th><th>Reason</th><th>Time</th></tr></thead><tbody class='lcd-body'></tbody></table>"
    },
    el_bwh_installed: false, // this will add ban and warn to the admin content menu
    admin_groups: ["admin", "superadmin"],
    admin_context_menu: [ // examples of custom buttons below
        // {label:"My Cool Button",action:function(target){ // this function doesn't require args, you'll only get target which is the player's server id as a string
        //     console.log("Clicked my cool button","player id "+target.toString());
        // }, style:"color:purple;"},
        // this example asks for text input from the user, if they press the "X" icon, your callback won't get called and current action will not proceed
        // {label:"My Cool Button",action:function(target,args){ // since this button uses args, you'll get a second parameter with the string content of the input
        //     console.log("Clicked my cool button","player id "+target.toString(),"input: "+args);
        // }, style:"color:purple;",args:{description:"Write something cool"}}, // args syntax: {description -> string, shows above text input; placeholder -> string, hint in text input (optional)}
        // {label:"My Cool Button",action:"some-action",style:"color:purple;"}, // this button will send a NUI event to client.lua (admin-ctx) with all the parameters, check client.lua and search for admin-ctx; this can also use args, check example above
        {
            label: "Copy SteamID",
            action: function() {
                copyText($(".player-context").data("steamid"), "SteamID Copied to clipboard", 1500);
            }
        },
        {
            label: "Copy SteamID64",
            action: function() {
                copyText(hexidtodec($(".player-context").data("steamid")), "SteamID Copied to clipboard", 1500);
            }
        },
        { label: "Goto", action: "goto" },
        { label: "Bring", action: "bring" },
        { label: "Slay", action: "slay", style: "color:yellow;" },
        { label: "Heal", action: "heal", style: "color:green;" },
        { label: "Revive", action: "revive", style: "color:green;" },
        { label: "Kick", action: "kick", style: "color:red;", args: { description: "Kick player", placeholder: "Kick reason" } }
    ]
};
