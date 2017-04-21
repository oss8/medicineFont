import XLSX from "xlsx"
import fs from 'file-saver'
    function datenum(v, date1904) {
        if(date1904) v+=1462;
        var epoch = Date.parse(v);
        return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
    }
    function Workbook() {
        if(!(this instanceof Workbook)) return new Workbook();
        this.SheetNames = [];
        this.Sheets = {};
    }
    function sheet_from_array_of_arrays(data, opts) {
        var ws = {};
        var range = {s: {c:10000000, r:10000000}, e: {c:0, r:0 }};
        var C = 0;
        if(data.length > 0 ) {
            for(var key in data[0]) {
                if(range.s.r > 0) range.s.r = 0;
                if(range.s.c > C) range.s.c = C;
                if(range.e.r < 0) range.e.r = 0;
                if(range.e.c < C) range.e.c = C;
                var cell = {v: key };
                if(cell.v == '$$hashKey') continue;
                var cell_ref = XLSX.utils.encode_cell({c:C,r:0});
                
                if(typeof cell.v === 'number') cell.t = 'n';
                else if(typeof cell.v === 'boolean') cell.t = 'b';
                else if(cell.v instanceof Date) {
                    cell.t = 'n'; cell.z = XLSX.SSF._table[14];
                    cell.v = dateService.formatDate(cell.v);
                }
                else cell.t = 's';
                
                ws[cell_ref] = cell;
                C++;
            }
        }

        for(var R = 0; R != data.length; ++R) {
            var C = 0;
            
                C = 0;
            for(var key in data[R]) {
                if(key == '$$hashKey' ) continue;
                if(range.s.r > R+1) range.s.r = R+1;
                if(range.s.c > C) range.s.c = C;
                if(range.e.r < R+1) range.e.r = R+1;
                if(range.e.c < C) range.e.c = C;
                var cell = {v: data[R][key] };
                
                if(cell.v == null) cell.v='null';
                var cell_ref = XLSX.utils.encode_cell({c:C,r:R+1});
                
                if(typeof cell.v === 'number') cell.t = 'n';
                else if(typeof cell.v === 'boolean') cell.t = 'b';
                else if(cell.v instanceof Date) {
                    cell.t = 'n'; cell.z = XLSX.SSF._table[14];
                    cell.v = dateService.formatDate(cell.v);
                }
                else cell.t = 's';
                
                ws[cell_ref] = cell;
                C++;
            }
            
        }
        if(range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
        return ws;
    }
    function s2ab(s) {
				var buf = new ArrayBuffer(s.length);
				var view = new Uint8Array(buf);
				for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
				return buf;
			}
    function xlsxExport(listData,fileName) {
			
			var wopts = { bookType:'xlsx', bookSST:false, type:'binary' };
			var ws_name = "SheetJS";
			var workbook = new Workbook(), ws = sheet_from_array_of_arrays(listData);
			workbook.SheetNames.push(ws_name);
			workbook.Sheets[ws_name] = ws;

			var wbout = XLSX.write(workbook, wopts);

			

			/* the saveAs call downloads a file on the local machine */
			fs.saveAs(new Blob([s2ab(wbout)],{type:""}), fileName+".xlsx")

		}
		

export default xlsxExport