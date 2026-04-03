

            // Os Mudules //
 
const operating_system = require('os');

let  os_filename                =   "Paltform-System-32:"
let  check_UPC                  =   "UPC:"
let  Testing_RAM                =   "check-RAM:"
let  check_freespace            =   "Free-Space:"
let  home_directory             =   "Home-Directory:"
let  CPU_CoreCheck              =   "CPU-Core:"
let  Testing_Os_useing_uptime   =   "Os-Uptime:" 
let  windows_versioncheck       =   "Windows-Version:"
let  os_check                   =    "Os-Check:"




console.log(os_filename,operating_system.platform());

console.log(check_UPC,operating_system.arch());

console.log(Testing_RAM,Math.round(operating_system.totalmem() /1024 ** 3),"GB");

console.log(check_freespace,Math.round(operating_system.freemem()/1024 ** 3),"GB");

console.log(home_directory,operating_system.homedir());

console.log(CPU_CoreCheck,operating_system.cpus().length);

console.log(Testing_Os_useing_uptime,operating_system.uptime());

console.log(windows_versioncheck,operating_system.version());

console.log(os_check,operating_system.type());







