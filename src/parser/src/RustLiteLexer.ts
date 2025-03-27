// Generated from src/RustLite.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class RustLiteLexer extends antlr.Lexer {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly INT = 24;
    public static readonly IDENTIFIER = 25;
    public static readonly TYPE = 26;
    public static readonly WS = 27;
    public static readonly COMMENT = 28;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'+'", "'{'", "'}'", "';'", "'let'", "'mut'", "'='", "'if'", 
        "'else'", "'loop'", "'while'", "'..'", "'range'", "'('", "','", 
        "')'", "'for'", "'in'", "':'", "'->'", "'return'", "'fn'", "'.'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, "INT", "IDENTIFIER", "TYPE", "WS", "COMMENT"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", 
        "T__16", "T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "INT", 
        "IDENTIFIER", "TYPE", "WS", "COMMENT",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, RustLiteLexer._ATN, RustLiteLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "RustLite.g4"; }

    public get literalNames(): (string | null)[] { return RustLiteLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return RustLiteLexer.symbolicNames; }
    public get ruleNames(): string[] { return RustLiteLexer.ruleNames; }

    public get serializedATN(): number[] { return RustLiteLexer._serializedATN; }

    public get channelNames(): string[] { return RustLiteLexer.channelNames; }

    public get modeNames(): string[] { return RustLiteLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,28,171,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,
        4,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,
        9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,12,
        1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,
        1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,19,1,19,1,19,1,20,1,20,1,20,
        1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,23,4,23,135,8,23,
        11,23,12,23,136,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
        1,25,1,25,1,25,3,25,152,8,25,1,26,4,26,155,8,26,11,26,12,26,156,
        1,26,1,26,1,27,1,27,1,27,1,27,5,27,165,8,27,10,27,12,27,168,9,27,
        1,27,1,27,0,0,28,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,
        11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,
        22,45,23,47,24,49,25,51,26,53,27,55,28,1,0,4,1,0,48,57,3,0,65,90,
        95,95,97,122,3,0,9,10,13,13,32,32,2,0,10,10,13,13,176,0,1,1,0,0,
        0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,
        13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,
        23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,
        33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,
        43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,
        53,1,0,0,0,0,55,1,0,0,0,1,57,1,0,0,0,3,59,1,0,0,0,5,61,1,0,0,0,7,
        63,1,0,0,0,9,65,1,0,0,0,11,69,1,0,0,0,13,73,1,0,0,0,15,75,1,0,0,
        0,17,78,1,0,0,0,19,83,1,0,0,0,21,88,1,0,0,0,23,94,1,0,0,0,25,97,
        1,0,0,0,27,103,1,0,0,0,29,105,1,0,0,0,31,107,1,0,0,0,33,109,1,0,
        0,0,35,113,1,0,0,0,37,116,1,0,0,0,39,118,1,0,0,0,41,121,1,0,0,0,
        43,128,1,0,0,0,45,131,1,0,0,0,47,134,1,0,0,0,49,138,1,0,0,0,51,151,
        1,0,0,0,53,154,1,0,0,0,55,160,1,0,0,0,57,58,5,43,0,0,58,2,1,0,0,
        0,59,60,5,123,0,0,60,4,1,0,0,0,61,62,5,125,0,0,62,6,1,0,0,0,63,64,
        5,59,0,0,64,8,1,0,0,0,65,66,5,108,0,0,66,67,5,101,0,0,67,68,5,116,
        0,0,68,10,1,0,0,0,69,70,5,109,0,0,70,71,5,117,0,0,71,72,5,116,0,
        0,72,12,1,0,0,0,73,74,5,61,0,0,74,14,1,0,0,0,75,76,5,105,0,0,76,
        77,5,102,0,0,77,16,1,0,0,0,78,79,5,101,0,0,79,80,5,108,0,0,80,81,
        5,115,0,0,81,82,5,101,0,0,82,18,1,0,0,0,83,84,5,108,0,0,84,85,5,
        111,0,0,85,86,5,111,0,0,86,87,5,112,0,0,87,20,1,0,0,0,88,89,5,119,
        0,0,89,90,5,104,0,0,90,91,5,105,0,0,91,92,5,108,0,0,92,93,5,101,
        0,0,93,22,1,0,0,0,94,95,5,46,0,0,95,96,5,46,0,0,96,24,1,0,0,0,97,
        98,5,114,0,0,98,99,5,97,0,0,99,100,5,110,0,0,100,101,5,103,0,0,101,
        102,5,101,0,0,102,26,1,0,0,0,103,104,5,40,0,0,104,28,1,0,0,0,105,
        106,5,44,0,0,106,30,1,0,0,0,107,108,5,41,0,0,108,32,1,0,0,0,109,
        110,5,102,0,0,110,111,5,111,0,0,111,112,5,114,0,0,112,34,1,0,0,0,
        113,114,5,105,0,0,114,115,5,110,0,0,115,36,1,0,0,0,116,117,5,58,
        0,0,117,38,1,0,0,0,118,119,5,45,0,0,119,120,5,62,0,0,120,40,1,0,
        0,0,121,122,5,114,0,0,122,123,5,101,0,0,123,124,5,116,0,0,124,125,
        5,117,0,0,125,126,5,114,0,0,126,127,5,110,0,0,127,42,1,0,0,0,128,
        129,5,102,0,0,129,130,5,110,0,0,130,44,1,0,0,0,131,132,5,46,0,0,
        132,46,1,0,0,0,133,135,7,0,0,0,134,133,1,0,0,0,135,136,1,0,0,0,136,
        134,1,0,0,0,136,137,1,0,0,0,137,48,1,0,0,0,138,139,7,1,0,0,139,50,
        1,0,0,0,140,141,5,105,0,0,141,142,5,51,0,0,142,152,5,50,0,0,143,
        144,5,105,0,0,144,145,5,54,0,0,145,152,5,52,0,0,146,147,5,98,0,0,
        147,148,5,111,0,0,148,149,5,111,0,0,149,152,5,108,0,0,150,152,3,
        49,24,0,151,140,1,0,0,0,151,143,1,0,0,0,151,146,1,0,0,0,151,150,
        1,0,0,0,152,52,1,0,0,0,153,155,7,2,0,0,154,153,1,0,0,0,155,156,1,
        0,0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,158,1,0,0,0,158,159,6,
        26,0,0,159,54,1,0,0,0,160,161,5,47,0,0,161,162,5,47,0,0,162,166,
        1,0,0,0,163,165,8,3,0,0,164,163,1,0,0,0,165,168,1,0,0,0,166,164,
        1,0,0,0,166,167,1,0,0,0,167,169,1,0,0,0,168,166,1,0,0,0,169,170,
        6,27,0,0,170,56,1,0,0,0,5,0,136,151,156,166,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!RustLiteLexer.__ATN) {
            RustLiteLexer.__ATN = new antlr.ATNDeserializer().deserialize(RustLiteLexer._serializedATN);
        }

        return RustLiteLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(RustLiteLexer.literalNames, RustLiteLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return RustLiteLexer.vocabulary;
    }

    private static readonly decisionsToDFA = RustLiteLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}