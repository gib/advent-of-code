// --- Day 6: Tuning Trouble ---
//
// That's a BIG string! But not worth reading one line from a file for me
// ¯\_(0_o)_/¯
const input = "qnjjqgjqgglqqwrrvvcwwtjjzpjjfwwtwzwmzmrmttrvrpppbtbllhrrwtwzwjwzznfzfvvvngnrrhzrhhsmsrrsrrtqrrpzpnpfphfhllwlclfcfrrqffhvhsvswvswwngnzzcmmnrnzrnnwhwgwvggpcggnrntrrgmgdgmmgzmzssprrmddjndnsnrsrddnmdmqddrzznwznndfnndjjmgjmjmmnpmnmrmzmfzmmwhwzwrwqqqhshhncnvvhfvhfhzzvttrnrdnnwddptphpthhbgbgmbbvppnhphmmncnwcwqwppgddsqqjqppcrcncvnccjsjzztczttjzzwwhshnsnttrctchthnnswnnfzfhhsfhhdccgwcggbrblrlwlrlnntsscffpnnwffqgqdqhqhphhvtvmvhmmnssqbqfqfwwbfwbfwwzwgwgpgwwchcshslhssqsppqdqhhnssrzzvbbhjjqdjdgjgttvzzmvzvvnmvvfbbncbcqcpqpbbcjcncjnccjfjpjdjvdddbzzfrfwfpwpfwppvjvfjjhfhvvqttfhffscsvvbqbzqqjssbmsbshsrshsphhwhvwhwcwwnjjlzzfgfrgrwggfddpqpqqcmmtwtcwttgjjnfnnjvvmfmccvhchjcjmccmmwgghccnffjccqczqqbdbrdrsdsffmzzndnncbnbgbsshbhvbvsbvsbbvjbvbdvvqpqnpngpnggbbndbbdzdhzdhhjcjjmbbqgqbbfrrvzvcvffhggcbcjbbqtbbszbbvvcnvnccldddlrrtqrttpjpnjpnpznnqmnnrrmmsdmdbbffcwwllnffssspvvrjjwhwmmqhmmhjjtnjtjgttnrtnnsgsbssffstssjvjwwwwnjngjnnnlndndqdqqwdwcdcsccsgssgrrqwqqqhgqgfgffmnffzjjssqsfqqgddgcgtgrrvgrrdhdcdgdbdsswgwwpwggdfggnjnnvffzhhcqclqclcdlldbldlffdrrzttnhthdthhrthhgcgllzqlzzfhhmshssdvvtnnpngpprqrrrbnbssnhnnqdndsnshhzjjrnjnmjjwfffpbpnbbwddpwptwwpbpffvggmjmgghrrnqqhnhsnhsnnnlddmjddrdrhrchhgmgfmfdfcfpprsrzzzmhzhmhrmmrwmmpdmpmcclmlvvlffhlhhczccsvvptvpvwvdvqqdvqdddvnvsnswwspwpqqpddpvvsqsjjwnwrrjbjtttdhhhwbhbzzqrqfrrzlrzrqrbqrqzzfczfzrrqffnrnhrrcrtrvrffvflfsllcjcvvmqmlqqwjwgglhlvldltlqqdcddtssltsllsnndvdnddfqdffprrbssgccqmqrrnsrnnlzlhhqrhqhcqcjqcqpcqqmvqqgbgpbggnfggdpgpvpgvvsrrhqhshmsmwsmwssvnvtnttphpdpdspsvslshhlplmplmmljjvnnsrslrrvttqqprrptrptpnnmmflltntrrnjjcljcllwcllddbgbjbrrtwrtrftfctftsslsggggzqqhhrvvdqqwqbqtthdhrrpwpqpmmqcmqmllsmllhvfwbfvgzqgbhlfhqrqtzfpplgjtgngzrdfltnqlwsbhmwdfvrdjlgwftjvmdsgdgnswhrtmzgfqfsfnczjnmgqcfzvwlbgzsrpcbwwtrmbqtqhdmhmscqgjgpqdqcrvdvwplpdzsjqbvgpqcvfspqrcsjlhrqpjmdszjpqhmdwtddwqhbwsrlcjpzwsjjvbzcllqfwbhfvjqbqfbsrbgvgchdmgqjnvdrzlmrnlpzrljgjvtrdtqnzbnhpgpgjvwttmnfbpvrtmpstbmtwdwfzvznrwmspftgvrmdfwqltzzmlgrvvwjgdblnnbjzjfqpldsqbhrstnhrjqfcmzcrtqcpqmmfqzndgjwtcgnwrgdznzdgzbvmrlvrjvjgmfcrmrjbpjwqvhprbphnqsbpcpnflpgnpgggqpgrwghfpfvdljjqnvqgbvcpjbjlqghjppfhzfzczmcwnhrjzzrwlfqhvdwqrcbvprclnmqmqwdrhgtswwqhqtcjhndrmcrzdjnvwsstzplhcdzwzqbjjthsmjrmpfbqljlmnvmfddqflnhrfhchzgnlbcpvppnspsdtnqmfhrztznhltmqlrwzgczqmjggvnphwpvrwcnqhsdfglblvvdlqfnghtzgngtjnrzsjgwcglsrczlfqpmmzsrqwcclslzjpvpfgcwzwsfmwwswdsvnvtmwzmhwzvnnnldnjljbwlglpjvrggbmvhctsggtjgrmjrglnhtjzwhrvtmfmphgmpdmvlhzrhrtjcwswlnnjphsschrdvstmflzqsbqmqggjjdsdtjhcvjlzclbpvnbjgngnzvtdgszdtrwpnjmgwpcjpbsvrsmdjdjdbhqqvplbmfhmbgmtggvtltqjphlggscdbzncqhqqlmflmjbpnhbnqjcbfmggnftjjbzbrqwcgvfhsddrqgrvnztzzqzwjrjprmqctlttmgltdgrcvnbrbzrsbbqnsrslrswvmrqlctvsdfmcrdddcdwvfmwwcbqsdhmmgplzhnsfvhtctmvrzntvptpnbhhvjlphmtcctlhdvtvvqbmbczjqfvnqwzbgjzlgnqhvbjjnvrgfprvllltqdwvvmchrdqfczmmbmcjwtwgqbfjzgpcfzhhnwcghqltrlhlntjcrthpsbmcdzzqljdrdhfctwrzlvhdjvgmpscssmhdggrnhfbtfpqtsbqnqjfjwlbdfcpzfjtspnrjzshjcrrzwclddqqbplwghrcjhfqgblfrlrdhmdqmrzdnqthvvzlcjmqzqtgbcwcprpnjtbhsqmzlprhmssltfvvgqzzpnjtsmplhfpsnznjwrrgvmbbvjzzwctmwcwcwjwvmlpcmlmrfqbdjpclsqjnsnndzqfcghqsmhqcjwjjbbwmsttwnththhhgrlhrtrcjppvmjlqtqhpbhpsdhzcqpmqqbvwrlvjrnmlfvtntwghtphwzqmbmmpgvfrqsjwffdbcjjbwrrntrhnjwjfprzjcpnwvtwjcdhppspbdbwnzdbhvpqljbrfnpnbqdtqzdjlbvgbvvhcjrqwlqmhnhjfppllrsnsvnmttvrsdrqjfrdvhplwbhhnvglvgcvtzblfswzrrbwpjnslthjmgsdgwqrfjfplmbgsdcltzmdhrbpqggnjrcddltvdbrlhtzwfghbpnlmghwqdtpctmqbggfzflfzjgcbvfqtztsmgdvdlrrdrtmmjbtdtjvvjvlwwlwnzhlfqtrmdgvlflmbffnzlvtccnmcddrqfhgzlhngrfmsqdrnshshfhhtnwmnqmjtzggdfmpgcsrhjzhhvlppfnqmjsvtcwwjdvdrgrldbdnrqtvjjnddgmfdtqrncdlfznfpbqldztzzgpvwhvnqrrzdwsrdvcnslmwcdztvqzgbshpqrdbnmlfltpbsfrnbbcwvwvjnrdspwrwzpljqwwvqhbhhqqjnlrgwqvvsjrscbfqvhbwtjvwzmwzvftlwmtbmglvqvlnwrzvwclvzjcvgfstjpwdbtbhmnqzfgpqmthpchrrqfpqfflwhwrhmdzvgbzlmfgzvhrldprlgrvjcvjhslghqddfvqzgplmtfqjzhpctvtgrzjhwrjzbsqqrcztrstbvdjbtszrbvvzvwzfclsnrftcqtqdghdrnhglzptzwtqtgnfsqhmvnqqwtnwszgtvpnndbzcwgwhpcdlsdpptvlcqtmfhfjzbvfsvnjvqrrjqbggnjqfrrrvqmzscvlltfwzdlzqstlrrmqqmbmbtgbqjsvbncblddgzvlstmrpmrlfcqpvwthgbhlvfcfcwvslcjnztfwgdgwjfrwrzbbszmtvzchvstcfrgqllfrdccrjmtspshgqbzcldddqgjnpdsctmjphcwqvjtvmqlvvpzdgjdlpwdrjbshhrgjtglwnzlzsqngspbzgbwpgmfcv";

// Marker is the index of the char after the first set of
// unique (non duplicated) characters in a markerLength substring
const indexOfMarker = (buffer, markerLength) => {
    let pointer = 0;
    while (pointer < buffer.length - markerLength) {
        let trackingMap = {};
        for (let i = pointer; i < pointer + markerLength; i++) {
            // Duplicate found, not the marker
            if (Object.hasOwn(trackingMap, buffer[i])) {
                break;
            }
            // Add this character to the map
            trackingMap[buffer[i]] = 1;
            if (Object.keys(trackingMap).length === markerLength) {
                return pointer + markerLength;
            }
        }
        // Take look at the next group of markerLength characters
        pointer++;
    }
};

// --- Part One ---
console.log(indexOfMarker('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 4) === 7);
console.log(indexOfMarker('bvwbjplbgvbhsrlpgdmjqwftvncz', 4) === 5);
console.log(indexOfMarker('nppdvjthqldpwncqszvftbrmjlhg', 4) === 6);
console.log(indexOfMarker('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 4) === 10);
console.log(indexOfMarker('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 4) === 11);
console.log(indexOfMarker(input, 4) === 1625);

// --- Part Two ---
console.log(indexOfMarker('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 14) === 19);
console.log(indexOfMarker('bvwbjplbgvbhsrlpgdmjqwftvncz', 14) === 23);
console.log(indexOfMarker('nppdvjthqldpwncqszvftbrmjlhg', 14) === 23);
console.log(indexOfMarker('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 14) === 29);
console.log(indexOfMarker('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 14) === 26);
console.log(indexOfMarker(input, 14) === 2250);