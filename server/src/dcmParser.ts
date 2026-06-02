// Generated from src/dcmParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { dcmParserListener } from "./dcmParserListener";

export class dcmParser extends Parser {
	public static readonly SSTX = 1;
	public static readonly SSTY = 2;
	public static readonly COMMENT = 3;
	public static readonly WS = 4;
	public static readonly NEWLINE = 5;
	public static readonly STRING = 6;
	public static readonly TRUE = 7;
	public static readonly FALSE = 8;
	public static readonly WERT = 9;
	public static readonly TEXT = 10;
	public static readonly END = 11;
	public static readonly KONSERVIERUNG_FORMAT = 12;
	public static readonly FESTWERT = 13;
	public static readonly FESTWERTEBLOCK = 14;
	public static readonly KENNLINIE = 15;
	public static readonly ST_X = 16;
	public static readonly KENNFELD = 17;
	public static readonly ST_Y = 18;
	public static readonly FESTKENNLINIE = 19;
	public static readonly FESTKENNFELD = 20;
	public static readonly GRUPPENKENNLINIE = 21;
	public static readonly GRUPPENKENNFELD = 22;
	public static readonly STUETZSTELLENVERTEILUNG = 23;
	public static readonly FUNKTIONEN = 24;
	public static readonly FKT = 25;
	public static readonly VARIANTENKODIERUNG = 26;
	public static readonly KRITERIUM = 27;
	public static readonly MODULKOPF = 28;
	public static readonly LANGNAME = 29;
	public static readonly DISPLAYNAME = 30;
	public static readonly VAR = 31;
	public static readonly FUNKTION = 32;
	public static readonly EINHEIT_W = 33;
	public static readonly EINHEIT_X = 34;
	public static readonly EINHEIT_Y = 35;
	public static readonly INT = 36;
	public static readonly DECIMAL = 37;
	public static readonly PARAMETER_NAME = 38;
	public static readonly IDENTIFIER = 39;
	public static readonly EQUALS = 40;
	public static readonly AT = 41;
	public static readonly RULE_string_exp = 0;
	public static readonly RULE_dcm_file = 1;
	public static readonly RULE_nl = 2;
	public static readonly RULE_value = 3;
	public static readonly RULE_comment_exp = 4;
	public static readonly RULE_konservierung_format_exp = 5;
	public static readonly RULE_dcm_file_sub_exp = 6;
	public static readonly RULE_end_exp = 7;
	public static readonly RULE_functions_exp = 8;
	public static readonly RULE_functions_sub_exp = 9;
	public static readonly RULE_variant_coding_exp = 10;
	public static readonly RULE_variant_coding_sub_exp = 11;
	public static readonly RULE_module_header_exp = 12;
	public static readonly RULE_module_header_short_exp = 13;
	public static readonly RULE_parameter_name_exp = 14;
	public static readonly RULE_parameter_exp = 15;
	public static readonly RULE_parameter_sub_exp = 16;
	public static readonly RULE_longname_exp = 17;
	public static readonly RULE_displayname_exp = 18;
	public static readonly RULE_var_exp = 19;
	public static readonly RULE_name_value_pair = 20;
	public static readonly RULE_function_exp = 21;
	public static readonly RULE_unit_w_exp = 22;
	public static readonly RULE_unit_x_exp = 23;
	public static readonly RULE_unit_y_exp = 24;
	public static readonly RULE_value_exp = 25;
	public static readonly RULE_number_value_exp = 26;
	public static readonly RULE_string_value_exp = 27;
	public static readonly RULE_size_exp = 28;
	public static readonly RULE_array_exp = 29;
	public static readonly RULE_array_sub_exp = 30;
	public static readonly RULE_value_list_exp = 31;
	public static readonly RULE_number_value_list_exp = 32;
	public static readonly RULE_string_value_list_exp = 33;
	public static readonly RULE_matrix_exp = 34;
	public static readonly RULE_matrix_sub_exp = 35;
	public static readonly RULE_characteristic_line_exp = 36;
	public static readonly RULE_characteristic_line_sub_exp = 37;
	public static readonly RULE_st_x_exp = 38;
	public static readonly RULE_st_y_exp = 39;
	public static readonly RULE_characteristic_map_exp = 40;
	public static readonly RULE_characteristic_map_sub_exp = 41;
	public static readonly RULE_fixed_characteristic_line_exp = 42;
	public static readonly RULE_fixed_characteristic_line_sub_exp = 43;
	public static readonly RULE_fixed_characteristic_map_exp = 44;
	public static readonly RULE_fixed_characteristic_map_sub_exp = 45;
	public static readonly RULE_group_characteristic_line_exp = 46;
	public static readonly RULE_group_characteristic_line_sub_exp = 47;
	public static readonly RULE_sstx_exp = 48;
	public static readonly RULE_group_characteristic_map_exp = 49;
	public static readonly RULE_group_characteristic_map_sub_exp = 50;
	public static readonly RULE_ssty_exp = 51;
	public static readonly RULE_distribution_exp = 52;
	public static readonly RULE_distribution_sub_exp = 53;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"string_exp", "dcm_file", "nl", "value", "comment_exp", "konservierung_format_exp", 
		"dcm_file_sub_exp", "end_exp", "functions_exp", "functions_sub_exp", "variant_coding_exp", 
		"variant_coding_sub_exp", "module_header_exp", "module_header_short_exp", 
		"parameter_name_exp", "parameter_exp", "parameter_sub_exp", "longname_exp", 
		"displayname_exp", "var_exp", "name_value_pair", "function_exp", "unit_w_exp", 
		"unit_x_exp", "unit_y_exp", "value_exp", "number_value_exp", "string_value_exp", 
		"size_exp", "array_exp", "array_sub_exp", "value_list_exp", "number_value_list_exp", 
		"string_value_list_exp", "matrix_exp", "matrix_sub_exp", "characteristic_line_exp", 
		"characteristic_line_sub_exp", "st_x_exp", "st_y_exp", "characteristic_map_exp", 
		"characteristic_map_sub_exp", "fixed_characteristic_line_exp", "fixed_characteristic_line_sub_exp", 
		"fixed_characteristic_map_exp", "fixed_characteristic_map_sub_exp", "group_characteristic_line_exp", 
		"group_characteristic_line_sub_exp", "sstx_exp", "group_characteristic_map_exp", 
		"group_characteristic_map_sub_exp", "ssty_exp", "distribution_exp", "distribution_sub_exp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'WERT'", "'TEXT'", "'END'", undefined, "'FESTWERT'", 
		"'FESTWERTEBLOCK'", "'KENNLINIE'", "'ST/X'", "'KENNFELD'", "'ST/Y'", "'FESTKENNLINIE'", 
		"'FESTKENNFELD'", "'GRUPPENKENNLINIE'", "'GRUPPENKENNFELD'", "'STUETZSTELLENVERTEILUNG'", 
		"'FUNKTIONEN'", "'FKT'", "'VARIANTENKODIERUNG'", "'KRITERIUM'", "'MODULKOPF'", 
		"'LANGNAME'", "'DISPLAYNAME'", "'VAR'", "'FUNKTION'", "'EINHEIT_W'", "'EINHEIT_X'", 
		"'EINHEIT_Y'", undefined, undefined, undefined, undefined, "'='", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SSTX", "SSTY", "COMMENT", "WS", "NEWLINE", "STRING", "TRUE", 
		"FALSE", "WERT", "TEXT", "END", "KONSERVIERUNG_FORMAT", "FESTWERT", "FESTWERTEBLOCK", 
		"KENNLINIE", "ST_X", "KENNFELD", "ST_Y", "FESTKENNLINIE", "FESTKENNFELD", 
		"GRUPPENKENNLINIE", "GRUPPENKENNFELD", "STUETZSTELLENVERTEILUNG", "FUNKTIONEN", 
		"FKT", "VARIANTENKODIERUNG", "KRITERIUM", "MODULKOPF", "LANGNAME", "DISPLAYNAME", 
		"VAR", "FUNKTION", "EINHEIT_W", "EINHEIT_X", "EINHEIT_Y", "INT", "DECIMAL", 
		"PARAMETER_NAME", "IDENTIFIER", "EQUALS", "AT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(dcmParser._LITERAL_NAMES, dcmParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return dcmParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "dcmParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return dcmParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return dcmParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(dcmParser._ATN, this);
	}
	// @RuleVersion(0)
	public string_exp(): String_expContext {
		let _localctx: String_expContext = new String_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, dcmParser.RULE_string_exp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			_localctx._string = this.match(dcmParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dcm_file(): Dcm_fileContext {
		let _localctx: Dcm_fileContext = new Dcm_fileContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, dcmParser.RULE_dcm_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 110;
				this.comment_exp();
				}
			}

			this.state = 113;
			this.konservierung_format_exp();
			this.state = 114;
			this.dcm_file_sub_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nl(): NlContext {
		let _localctx: NlContext = new NlContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, dcmParser.RULE_nl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			_la = this._input.LA(1);
			if (!(_la === dcmParser.EOF || _la === dcmParser.NEWLINE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, dcmParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			_la = this._input.LA(1);
			if (!(((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (dcmParser.TRUE - 7)) | (1 << (dcmParser.FALSE - 7)) | (1 << (dcmParser.INT - 7)) | (1 << (dcmParser.DECIMAL - 7)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comment_exp(): Comment_expContext {
		let _localctx: Comment_expContext = new Comment_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, dcmParser.RULE_comment_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 120;
				this.match(dcmParser.COMMENT);
				}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === dcmParser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public konservierung_format_exp(): Konservierung_format_expContext {
		let _localctx: Konservierung_format_expContext = new Konservierung_format_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, dcmParser.RULE_konservierung_format_exp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(dcmParser.KONSERVIERUNG_FORMAT);
			this.state = 126;
			this.nl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dcm_file_sub_exp(): Dcm_file_sub_expContext {
		let _localctx: Dcm_file_sub_expContext = new Dcm_file_sub_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, dcmParser.RULE_dcm_file_sub_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dcmParser.COMMENT) | (1 << dcmParser.FESTWERT) | (1 << dcmParser.FESTWERTEBLOCK) | (1 << dcmParser.KENNLINIE) | (1 << dcmParser.KENNFELD) | (1 << dcmParser.FESTKENNLINIE) | (1 << dcmParser.FESTKENNFELD) | (1 << dcmParser.GRUPPENKENNLINIE) | (1 << dcmParser.GRUPPENKENNFELD) | (1 << dcmParser.STUETZSTELLENVERTEILUNG) | (1 << dcmParser.FUNKTIONEN) | (1 << dcmParser.VARIANTENKODIERUNG) | (1 << dcmParser.MODULKOPF))) !== 0)) {
				{
				this.state = 141;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 128;
					this.functions_exp();
					}
					break;

				case 2:
					{
					this.state = 129;
					this.variant_coding_exp();
					}
					break;

				case 3:
					{
					this.state = 130;
					this.module_header_exp();
					}
					break;

				case 4:
					{
					this.state = 131;
					this.parameter_exp();
					}
					break;

				case 5:
					{
					this.state = 132;
					this.array_exp();
					}
					break;

				case 6:
					{
					this.state = 133;
					this.matrix_exp();
					}
					break;

				case 7:
					{
					this.state = 134;
					this.characteristic_line_exp();
					}
					break;

				case 8:
					{
					this.state = 135;
					this.characteristic_map_exp();
					}
					break;

				case 9:
					{
					this.state = 136;
					this.fixed_characteristic_line_exp();
					}
					break;

				case 10:
					{
					this.state = 137;
					this.fixed_characteristic_map_exp();
					}
					break;

				case 11:
					{
					this.state = 138;
					this.group_characteristic_line_exp();
					}
					break;

				case 12:
					{
					this.state = 139;
					this.group_characteristic_map_exp();
					}
					break;

				case 13:
					{
					this.state = 140;
					this.distribution_exp();
					}
					break;
				}
				}
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public end_exp(): End_expContext {
		let _localctx: End_expContext = new End_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, dcmParser.RULE_end_exp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.match(dcmParser.END);
			this.state = 147;
			this.nl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functions_exp(): Functions_expContext {
		let _localctx: Functions_expContext = new Functions_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, dcmParser.RULE_functions_exp);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 149;
				_localctx._preComment = this.comment_exp();
				}
			}

			this.state = 152;
			this.match(dcmParser.FUNKTIONEN);
			this.state = 153;
			this.nl();
			this.state = 157;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 154;
					this.functions_sub_exp();
					}
					}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 160;
				_localctx._endComment = this.comment_exp();
				}
			}

			this.state = 163;
			this.end_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functions_sub_exp(): Functions_sub_expContext {
		let _localctx: Functions_sub_expContext = new Functions_sub_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, dcmParser.RULE_functions_sub_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 165;
				this.comment_exp();
				}
			}

			this.state = 168;
			this.match(dcmParser.FKT);
			this.state = 169;
			_localctx._name = this.parameter_name_exp();
			this.state = 170;
			_localctx._version = this.string_exp();
			this.state = 171;
			_localctx._longname = this.string_exp();
			this.state = 172;
			this.nl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variant_coding_exp(): Variant_coding_expContext {
		let _localctx: Variant_coding_expContext = new Variant_coding_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, dcmParser.RULE_variant_coding_exp);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 174;
				_localctx._preComment = this.comment_exp();
				}
			}

			this.state = 177;
			this.match(dcmParser.VARIANTENKODIERUNG);
			this.state = 178;
			this.nl();
			this.state = 182;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 179;
					this.variant_coding_sub_exp();
					}
					}
				}
				this.state = 184;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 185;
				_localctx._endComment = this.comment_exp();
				}
			}

			this.state = 188;
			this.end_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variant_coding_sub_exp(): Variant_coding_sub_expContext {
		let _localctx: Variant_coding_sub_expContext = new Variant_coding_sub_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, dcmParser.RULE_variant_coding_sub_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 190;
				this.comment_exp();
				}
			}

			this.state = 193;
			this.match(dcmParser.KRITERIUM);
			this.state = 194;
			_localctx._name = this.parameter_name_exp();
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (dcmParser.TRUE - 7)) | (1 << (dcmParser.FALSE - 7)) | (1 << (dcmParser.INT - 7)) | (1 << (dcmParser.DECIMAL - 7)))) !== 0)) {
				{
				{
				this.state = 195;
				_localctx._value = this.value();
				_localctx._values.push(_localctx._value);
				}
				}
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 201;
			this.nl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public module_header_exp(): Module_header_expContext {
		let _localctx: Module_header_expContext = new Module_header_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, dcmParser.RULE_module_header_exp);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 203;
				this.comment_exp();
				}
			}

			{
			this.state = 206;
			this.match(dcmParser.MODULKOPF);
			this.state = 207;
			_localctx._name = this.parameter_name_exp();
			this.state = 208;
			_localctx._text = this.string_exp();
			this.state = 209;
			this.nl();
			}
			this.state = 214;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 211;
					_localctx._module_header_short_exp = this.module_header_short_exp();
					_localctx._lines.push(_localctx._module_header_short_exp);
					}
					}
				}
				this.state = 216;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public module_header_short_exp(): Module_header_short_expContext {
		let _localctx: Module_header_short_expContext = new Module_header_short_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, dcmParser.RULE_module_header_short_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 217;
				this.comment_exp();
				}
			}

			this.state = 220;
			this.match(dcmParser.MODULKOPF);
			this.state = 221;
			_localctx._text = this.string_exp();
			this.state = 222;
			this.nl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter_name_exp(): Parameter_name_expContext {
		let _localctx: Parameter_name_expContext = new Parameter_name_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, dcmParser.RULE_parameter_name_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			_la = this._input.LA(1);
			if (!(_la === dcmParser.PARAMETER_NAME || _la === dcmParser.IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter_exp(): Parameter_expContext {
		let _localctx: Parameter_expContext = new Parameter_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, dcmParser.RULE_parameter_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 226;
				_localctx._preComment = this.comment_exp();
				}
			}

			this.state = 229;
			this.match(dcmParser.FESTWERT);
			this.state = 230;
			_localctx._name = this.parameter_name_exp();
			this.state = 231;
			this.nl();
			this.state = 232;
			this.parameter_sub_exp();
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 233;
				_localctx._endComment = this.comment_exp();
				}
			}

			this.state = 236;
			this.end_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter_sub_exp(): Parameter_sub_expContext {
		let _localctx: Parameter_sub_expContext = new Parameter_sub_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, dcmParser.RULE_parameter_sub_exp);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 244;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
					case 1:
						{
						this.state = 238;
						this.longname_exp();
						}
						break;

					case 2:
						{
						this.state = 239;
						this.displayname_exp();
						}
						break;

					case 3:
						{
						this.state = 240;
						this.var_exp();
						}
						break;

					case 4:
						{
						this.state = 241;
						this.function_exp();
						}
						break;

					case 5:
						{
						this.state = 242;
						this.unit_w_exp();
						}
						break;

					case 6:
						{
						this.state = 243;
						this.value_exp();
						}
						break;
					}
					}
				}
				this.state = 248;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public longname_exp(): Longname_expContext {
		let _localctx: Longname_expContext = new Longname_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, dcmParser.RULE_longname_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 249;
				this.comment_exp();
				}
			}

			this.state = 252;
			this.match(dcmParser.LANGNAME);
			this.state = 253;
			this.string_exp();
			this.state = 254;
			this.nl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public displayname_exp(): Displayname_expContext {
		let _localctx: Displayname_expContext = new Displayname_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, dcmParser.RULE_displayname_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 256;
				this.comment_exp();
				}
			}

			this.state = 259;
			this.match(dcmParser.DISPLAYNAME);
			this.state = 260;
			this.parameter_name_exp();
			this.state = 261;
			this.nl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var_exp(): Var_expContext {
		let _localctx: Var_expContext = new Var_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, dcmParser.RULE_var_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 263;
				this.comment_exp();
				}
			}

			this.state = 266;
			this.match(dcmParser.VAR);
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === dcmParser.PARAMETER_NAME || _la === dcmParser.IDENTIFIER) {
				{
				{
				this.state = 267;
				this.name_value_pair();
				}
				}
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 273;
			this.nl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name_value_pair(): Name_value_pairContext {
		let _localctx: Name_value_pairContext = new Name_value_pairContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, dcmParser.RULE_name_value_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			_localctx._name = this.parameter_name_exp();
			this.state = 276;
			this.match(dcmParser.EQUALS);
			this.state = 277;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_exp(): Function_expContext {
		let _localctx: Function_expContext = new Function_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, dcmParser.RULE_function_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 279;
				this.comment_exp();
				}
			}

			this.state = 282;
			this.match(dcmParser.FUNKTION);
			this.state = 283;
			_localctx._name = this.parameter_name_exp();
			this.state = 284;
			this.nl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unit_w_exp(): Unit_w_expContext {
		let _localctx: Unit_w_expContext = new Unit_w_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, dcmParser.RULE_unit_w_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 286;
				this.comment_exp();
				}
			}

			this.state = 289;
			this.match(dcmParser.EINHEIT_W);
			this.state = 290;
			this.string_exp();
			this.state = 291;
			this.nl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unit_x_exp(): Unit_x_expContext {
		let _localctx: Unit_x_expContext = new Unit_x_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, dcmParser.RULE_unit_x_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 293;
				this.comment_exp();
				}
			}

			this.state = 296;
			this.match(dcmParser.EINHEIT_X);
			this.state = 297;
			this.string_exp();
			this.state = 298;
			this.nl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unit_y_exp(): Unit_y_expContext {
		let _localctx: Unit_y_expContext = new Unit_y_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, dcmParser.RULE_unit_y_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 300;
				this.comment_exp();
				}
			}

			this.state = 303;
			this.match(dcmParser.EINHEIT_Y);
			this.state = 304;
			this.string_exp();
			this.state = 305;
			this.nl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value_exp(): Value_expContext {
		let _localctx: Value_expContext = new Value_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, dcmParser.RULE_value_exp);
		try {
			this.state = 309;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 307;
				this.number_value_exp();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 308;
				this.string_value_exp();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number_value_exp(): Number_value_expContext {
		let _localctx: Number_value_expContext = new Number_value_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, dcmParser.RULE_number_value_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 311;
				this.comment_exp();
				}
			}

			this.state = 314;
			this.match(dcmParser.WERT);
			this.state = 315;
			this.value();
			this.state = 316;
			this.nl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_value_exp(): String_value_expContext {
		let _localctx: String_value_expContext = new String_value_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, dcmParser.RULE_string_value_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 318;
				this.comment_exp();
				}
			}

			this.state = 321;
			this.match(dcmParser.TEXT);
			this.state = 322;
			this.string_exp();
			this.state = 323;
			this.nl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public size_exp(): Size_expContext {
		let _localctx: Size_expContext = new Size_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, dcmParser.RULE_size_exp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this.match(dcmParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array_exp(): Array_expContext {
		let _localctx: Array_expContext = new Array_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, dcmParser.RULE_array_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 327;
				_localctx._preComment = this.comment_exp();
				}
			}

			this.state = 330;
			this.match(dcmParser.FESTWERTEBLOCK);
			this.state = 331;
			_localctx._name = this.parameter_name_exp();
			this.state = 332;
			_localctx._sizeX = this.size_exp();
			this.state = 333;
			this.nl();
			this.state = 334;
			this.array_sub_exp();
			this.state = 336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 335;
				_localctx._endComment = this.comment_exp();
				}
			}

			this.state = 338;
			this.end_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array_sub_exp(): Array_sub_expContext {
		let _localctx: Array_sub_expContext = new Array_sub_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, dcmParser.RULE_array_sub_exp);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 346;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
					case 1:
						{
						this.state = 340;
						this.longname_exp();
						}
						break;

					case 2:
						{
						this.state = 341;
						this.displayname_exp();
						}
						break;

					case 3:
						{
						this.state = 342;
						this.var_exp();
						}
						break;

					case 4:
						{
						this.state = 343;
						this.function_exp();
						}
						break;

					case 5:
						{
						this.state = 344;
						this.unit_w_exp();
						}
						break;

					case 6:
						{
						this.state = 345;
						this.value_list_exp();
						}
						break;
					}
					}
				}
				this.state = 350;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value_list_exp(): Value_list_expContext {
		let _localctx: Value_list_expContext = new Value_list_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, dcmParser.RULE_value_list_exp);
		try {
			this.state = 353;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 351;
				this.number_value_list_exp();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 352;
				this.string_value_list_exp();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number_value_list_exp(): Number_value_list_expContext {
		let _localctx: Number_value_list_expContext = new Number_value_list_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, dcmParser.RULE_number_value_list_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 355;
				this.comment_exp();
				}
			}

			this.state = 358;
			this.match(dcmParser.WERT);
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 359;
				this.value();
				}
				}
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (dcmParser.TRUE - 7)) | (1 << (dcmParser.FALSE - 7)) | (1 << (dcmParser.INT - 7)) | (1 << (dcmParser.DECIMAL - 7)))) !== 0));
			this.state = 364;
			this.nl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_value_list_exp(): String_value_list_expContext {
		let _localctx: String_value_list_expContext = new String_value_list_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, dcmParser.RULE_string_value_list_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 366;
				this.comment_exp();
				}
			}

			this.state = 369;
			this.match(dcmParser.TEXT);
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 370;
				this.string_exp();
				}
				}
				this.state = 373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === dcmParser.STRING);
			this.state = 375;
			this.nl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matrix_exp(): Matrix_expContext {
		let _localctx: Matrix_expContext = new Matrix_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, dcmParser.RULE_matrix_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 377;
				_localctx._preComment = this.comment_exp();
				}
			}

			this.state = 380;
			this.match(dcmParser.FESTWERTEBLOCK);
			this.state = 381;
			_localctx._name = this.parameter_name_exp();
			this.state = 382;
			_localctx._sizeX = this.size_exp();
			this.state = 383;
			this.match(dcmParser.AT);
			this.state = 384;
			_localctx._sizeY = this.size_exp();
			this.state = 385;
			this.nl();
			this.state = 386;
			this.matrix_sub_exp();
			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 387;
				_localctx._endComment = this.comment_exp();
				}
			}

			this.state = 390;
			this.end_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matrix_sub_exp(): Matrix_sub_expContext {
		let _localctx: Matrix_sub_expContext = new Matrix_sub_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, dcmParser.RULE_matrix_sub_exp);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 400;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 398;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
					case 1:
						{
						this.state = 392;
						this.longname_exp();
						}
						break;

					case 2:
						{
						this.state = 393;
						this.displayname_exp();
						}
						break;

					case 3:
						{
						this.state = 394;
						this.var_exp();
						}
						break;

					case 4:
						{
						this.state = 395;
						this.function_exp();
						}
						break;

					case 5:
						{
						this.state = 396;
						this.unit_w_exp();
						}
						break;

					case 6:
						{
						this.state = 397;
						this.value_list_exp();
						}
						break;
					}
					}
				}
				this.state = 402;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public characteristic_line_exp(): Characteristic_line_expContext {
		let _localctx: Characteristic_line_expContext = new Characteristic_line_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, dcmParser.RULE_characteristic_line_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 403;
				_localctx._preComment = this.comment_exp();
				}
			}

			this.state = 406;
			this.match(dcmParser.KENNLINIE);
			this.state = 407;
			_localctx._name = this.parameter_name_exp();
			this.state = 408;
			_localctx._sizeX = this.size_exp();
			this.state = 409;
			this.nl();
			this.state = 410;
			this.characteristic_line_sub_exp();
			this.state = 412;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 411;
				_localctx._endComment = this.comment_exp();
				}
			}

			this.state = 414;
			this.end_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public characteristic_line_sub_exp(): Characteristic_line_sub_expContext {
		let _localctx: Characteristic_line_sub_expContext = new Characteristic_line_sub_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, dcmParser.RULE_characteristic_line_sub_exp);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 424;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
					case 1:
						{
						this.state = 416;
						this.longname_exp();
						}
						break;

					case 2:
						{
						this.state = 417;
						this.displayname_exp();
						}
						break;

					case 3:
						{
						this.state = 418;
						this.var_exp();
						}
						break;

					case 4:
						{
						this.state = 419;
						this.function_exp();
						}
						break;

					case 5:
						{
						this.state = 420;
						this.unit_x_exp();
						}
						break;

					case 6:
						{
						this.state = 421;
						this.unit_w_exp();
						}
						break;

					case 7:
						{
						this.state = 422;
						this.st_x_exp();
						}
						break;

					case 8:
						{
						this.state = 423;
						this.value_list_exp();
						}
						break;
					}
					}
				}
				this.state = 428;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public st_x_exp(): St_x_expContext {
		let _localctx: St_x_expContext = new St_x_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, dcmParser.RULE_st_x_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 429;
				this.comment_exp();
				}
			}

			this.state = 432;
			this.match(dcmParser.ST_X);
			this.state = 434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 433;
				this.value();
				}
				}
				this.state = 436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (dcmParser.TRUE - 7)) | (1 << (dcmParser.FALSE - 7)) | (1 << (dcmParser.INT - 7)) | (1 << (dcmParser.DECIMAL - 7)))) !== 0));
			this.state = 438;
			this.nl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public st_y_exp(): St_y_expContext {
		let _localctx: St_y_expContext = new St_y_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, dcmParser.RULE_st_y_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 440;
				this.comment_exp();
				}
			}

			this.state = 443;
			this.match(dcmParser.ST_Y);
			this.state = 445;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 444;
				this.value();
				}
				}
				this.state = 447;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (dcmParser.TRUE - 7)) | (1 << (dcmParser.FALSE - 7)) | (1 << (dcmParser.INT - 7)) | (1 << (dcmParser.DECIMAL - 7)))) !== 0));
			this.state = 449;
			this.nl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public characteristic_map_exp(): Characteristic_map_expContext {
		let _localctx: Characteristic_map_expContext = new Characteristic_map_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, dcmParser.RULE_characteristic_map_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 452;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 451;
				_localctx._preComment = this.comment_exp();
				}
			}

			this.state = 454;
			this.match(dcmParser.KENNFELD);
			this.state = 455;
			_localctx._name = this.parameter_name_exp();
			this.state = 456;
			_localctx._sizeX = this.size_exp();
			this.state = 457;
			_localctx._sizeY = this.size_exp();
			this.state = 458;
			this.nl();
			this.state = 459;
			this.characteristic_map_sub_exp();
			this.state = 461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 460;
				_localctx._endComment = this.comment_exp();
				}
			}

			this.state = 463;
			this.end_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public characteristic_map_sub_exp(): Characteristic_map_sub_expContext {
		let _localctx: Characteristic_map_sub_expContext = new Characteristic_map_sub_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, dcmParser.RULE_characteristic_map_sub_exp);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 475;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
					case 1:
						{
						this.state = 465;
						this.longname_exp();
						}
						break;

					case 2:
						{
						this.state = 466;
						this.displayname_exp();
						}
						break;

					case 3:
						{
						this.state = 467;
						this.var_exp();
						}
						break;

					case 4:
						{
						this.state = 468;
						this.function_exp();
						}
						break;

					case 5:
						{
						this.state = 469;
						this.unit_x_exp();
						}
						break;

					case 6:
						{
						this.state = 470;
						this.unit_y_exp();
						}
						break;

					case 7:
						{
						this.state = 471;
						this.unit_w_exp();
						}
						break;

					case 8:
						{
						this.state = 472;
						this.st_x_exp();
						}
						break;

					case 9:
						{
						this.state = 473;
						this.st_y_exp();
						}
						break;

					case 10:
						{
						this.state = 474;
						this.value_list_exp();
						}
						break;
					}
					}
				}
				this.state = 479;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fixed_characteristic_line_exp(): Fixed_characteristic_line_expContext {
		let _localctx: Fixed_characteristic_line_expContext = new Fixed_characteristic_line_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, dcmParser.RULE_fixed_characteristic_line_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 480;
				_localctx._preComment = this.comment_exp();
				}
			}

			this.state = 483;
			this.match(dcmParser.FESTKENNLINIE);
			this.state = 484;
			_localctx._name = this.parameter_name_exp();
			this.state = 485;
			_localctx._sizeX = this.size_exp();
			this.state = 486;
			this.nl();
			this.state = 487;
			this.fixed_characteristic_line_sub_exp();
			this.state = 489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 488;
				_localctx._endComment = this.comment_exp();
				}
			}

			this.state = 491;
			this.end_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fixed_characteristic_line_sub_exp(): Fixed_characteristic_line_sub_expContext {
		let _localctx: Fixed_characteristic_line_sub_expContext = new Fixed_characteristic_line_sub_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, dcmParser.RULE_fixed_characteristic_line_sub_exp);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 501;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
					case 1:
						{
						this.state = 493;
						this.longname_exp();
						}
						break;

					case 2:
						{
						this.state = 494;
						this.displayname_exp();
						}
						break;

					case 3:
						{
						this.state = 495;
						this.var_exp();
						}
						break;

					case 4:
						{
						this.state = 496;
						this.function_exp();
						}
						break;

					case 5:
						{
						this.state = 497;
						this.unit_x_exp();
						}
						break;

					case 6:
						{
						this.state = 498;
						this.unit_w_exp();
						}
						break;

					case 7:
						{
						this.state = 499;
						this.st_x_exp();
						}
						break;

					case 8:
						{
						this.state = 500;
						this.value_list_exp();
						}
						break;
					}
					}
				}
				this.state = 505;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fixed_characteristic_map_exp(): Fixed_characteristic_map_expContext {
		let _localctx: Fixed_characteristic_map_expContext = new Fixed_characteristic_map_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, dcmParser.RULE_fixed_characteristic_map_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 506;
				_localctx._preComment = this.comment_exp();
				}
			}

			this.state = 509;
			this.match(dcmParser.FESTKENNFELD);
			this.state = 510;
			_localctx._name = this.parameter_name_exp();
			this.state = 511;
			_localctx._sizeX = this.size_exp();
			this.state = 512;
			_localctx._sizeY = this.size_exp();
			this.state = 513;
			this.nl();
			this.state = 514;
			this.fixed_characteristic_map_sub_exp();
			this.state = 516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 515;
				_localctx._endComment = this.comment_exp();
				}
			}

			this.state = 518;
			this.end_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fixed_characteristic_map_sub_exp(): Fixed_characteristic_map_sub_expContext {
		let _localctx: Fixed_characteristic_map_sub_expContext = new Fixed_characteristic_map_sub_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, dcmParser.RULE_fixed_characteristic_map_sub_exp);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 530;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
					case 1:
						{
						this.state = 520;
						this.longname_exp();
						}
						break;

					case 2:
						{
						this.state = 521;
						this.displayname_exp();
						}
						break;

					case 3:
						{
						this.state = 522;
						this.var_exp();
						}
						break;

					case 4:
						{
						this.state = 523;
						this.function_exp();
						}
						break;

					case 5:
						{
						this.state = 524;
						this.unit_x_exp();
						}
						break;

					case 6:
						{
						this.state = 525;
						this.unit_y_exp();
						}
						break;

					case 7:
						{
						this.state = 526;
						this.unit_w_exp();
						}
						break;

					case 8:
						{
						this.state = 527;
						this.st_x_exp();
						}
						break;

					case 9:
						{
						this.state = 528;
						this.st_y_exp();
						}
						break;

					case 10:
						{
						this.state = 529;
						this.value_list_exp();
						}
						break;
					}
					}
				}
				this.state = 534;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group_characteristic_line_exp(): Group_characteristic_line_expContext {
		let _localctx: Group_characteristic_line_expContext = new Group_characteristic_line_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, dcmParser.RULE_group_characteristic_line_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 535;
				_localctx._preComment = this.comment_exp();
				}
			}

			this.state = 538;
			this.match(dcmParser.GRUPPENKENNLINIE);
			this.state = 539;
			_localctx._name = this.parameter_name_exp();
			this.state = 540;
			_localctx._sizeX = this.size_exp();
			this.state = 541;
			this.nl();
			this.state = 542;
			this.group_characteristic_line_sub_exp();
			this.state = 544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 543;
				_localctx._endComment = this.comment_exp();
				}
			}

			this.state = 546;
			this.end_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group_characteristic_line_sub_exp(): Group_characteristic_line_sub_expContext {
		let _localctx: Group_characteristic_line_sub_expContext = new Group_characteristic_line_sub_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, dcmParser.RULE_group_characteristic_line_sub_exp);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 559;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 557;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
					case 1:
						{
						this.state = 548;
						this.longname_exp();
						}
						break;

					case 2:
						{
						this.state = 549;
						this.displayname_exp();
						}
						break;

					case 3:
						{
						this.state = 550;
						this.var_exp();
						}
						break;

					case 4:
						{
						this.state = 551;
						this.function_exp();
						}
						break;

					case 5:
						{
						this.state = 552;
						this.unit_x_exp();
						}
						break;

					case 6:
						{
						this.state = 553;
						this.unit_w_exp();
						}
						break;

					case 7:
						{
						this.state = 554;
						this.sstx_exp();
						}
						break;

					case 8:
						{
						this.state = 555;
						this.st_x_exp();
						}
						break;

					case 9:
						{
						this.state = 556;
						this.value_list_exp();
						}
						break;
					}
					}
				}
				this.state = 561;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sstx_exp(): Sstx_expContext {
		let _localctx: Sstx_expContext = new Sstx_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, dcmParser.RULE_sstx_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 562;
				this.comment_exp();
				}
			}

			this.state = 565;
			this.match(dcmParser.SSTX);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group_characteristic_map_exp(): Group_characteristic_map_expContext {
		let _localctx: Group_characteristic_map_expContext = new Group_characteristic_map_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, dcmParser.RULE_group_characteristic_map_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 567;
				_localctx._preComment = this.comment_exp();
				}
			}

			this.state = 570;
			this.match(dcmParser.GRUPPENKENNFELD);
			this.state = 571;
			_localctx._name = this.parameter_name_exp();
			this.state = 572;
			_localctx._sizeX = this.size_exp();
			this.state = 573;
			_localctx._sizeY = this.size_exp();
			this.state = 574;
			this.nl();
			this.state = 575;
			this.group_characteristic_map_sub_exp();
			this.state = 577;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 576;
				_localctx._endComment = this.comment_exp();
				}
			}

			this.state = 579;
			this.end_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group_characteristic_map_sub_exp(): Group_characteristic_map_sub_expContext {
		let _localctx: Group_characteristic_map_sub_expContext = new Group_characteristic_map_sub_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, dcmParser.RULE_group_characteristic_map_sub_exp);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 593;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
					case 1:
						{
						this.state = 581;
						this.longname_exp();
						}
						break;

					case 2:
						{
						this.state = 582;
						this.displayname_exp();
						}
						break;

					case 3:
						{
						this.state = 583;
						this.var_exp();
						}
						break;

					case 4:
						{
						this.state = 584;
						this.function_exp();
						}
						break;

					case 5:
						{
						this.state = 585;
						this.unit_x_exp();
						}
						break;

					case 6:
						{
						this.state = 586;
						this.unit_y_exp();
						}
						break;

					case 7:
						{
						this.state = 587;
						this.unit_w_exp();
						}
						break;

					case 8:
						{
						this.state = 588;
						this.sstx_exp();
						}
						break;

					case 9:
						{
						this.state = 589;
						this.ssty_exp();
						}
						break;

					case 10:
						{
						this.state = 590;
						this.st_x_exp();
						}
						break;

					case 11:
						{
						this.state = 591;
						this.st_y_exp();
						}
						break;

					case 12:
						{
						this.state = 592;
						this.value_list_exp();
						}
						break;
					}
					}
				}
				this.state = 597;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ssty_exp(): Ssty_expContext {
		let _localctx: Ssty_expContext = new Ssty_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, dcmParser.RULE_ssty_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 598;
				this.comment_exp();
				}
			}

			this.state = 601;
			this.match(dcmParser.SSTY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public distribution_exp(): Distribution_expContext {
		let _localctx: Distribution_expContext = new Distribution_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, dcmParser.RULE_distribution_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 604;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 603;
				_localctx._preComment = this.comment_exp();
				}
			}

			this.state = 606;
			this.match(dcmParser.STUETZSTELLENVERTEILUNG);
			this.state = 607;
			_localctx._name = this.parameter_name_exp();
			this.state = 608;
			_localctx._sizeX = this.size_exp();
			this.state = 609;
			this.nl();
			this.state = 610;
			this.distribution_sub_exp();
			this.state = 612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dcmParser.COMMENT) {
				{
				this.state = 611;
				_localctx._endComment = this.comment_exp();
				}
			}

			this.state = 614;
			this.end_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public distribution_sub_exp(): Distribution_sub_expContext {
		let _localctx: Distribution_sub_expContext = new Distribution_sub_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, dcmParser.RULE_distribution_sub_exp);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 624;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 622;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
					case 1:
						{
						this.state = 616;
						this.longname_exp();
						}
						break;

					case 2:
						{
						this.state = 617;
						this.displayname_exp();
						}
						break;

					case 3:
						{
						this.state = 618;
						this.var_exp();
						}
						break;

					case 4:
						{
						this.state = 619;
						this.function_exp();
						}
						break;

					case 5:
						{
						this.state = 620;
						this.unit_x_exp();
						}
						break;

					case 6:
						{
						this.state = 621;
						this.st_x_exp();
						}
						break;
					}
					}
				}
				this.state = 626;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03+\u0276\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x03\x02\x03\x02\x03\x03\x05\x03r\n\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x06\x06|" +
		"\n\x06\r\x06\x0E\x06}\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\x90\n\b\f" +
		"\b\x0E\b\x93\v\b\x03\t\x03\t\x03\t\x03\n\x05\n\x99\n\n\x03\n\x03\n\x03" +
		"\n\x07\n\x9E\n\n\f\n\x0E\n\xA1\v\n\x03\n\x05\n\xA4\n\n\x03\n\x03\n\x03" +
		"\v\x05\v\xA9\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x05\f\xB2\n" +
		"\f\x03\f\x03\f\x03\f\x07\f\xB7\n\f\f\f\x0E\f\xBA\v\f\x03\f\x05\f\xBD\n" +
		"\f\x03\f\x03\f\x03\r\x05\r\xC2\n\r\x03\r\x03\r\x03\r\x07\r\xC7\n\r\f\r" +
		"\x0E\r\xCA\v\r\x03\r\x03\r\x03\x0E\x05\x0E\xCF\n\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xD7\n\x0E\f\x0E\x0E\x0E\xDA\v\x0E" +
		"\x03\x0F\x05\x0F\xDD\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03" +
		"\x10\x03\x11\x05\x11\xE6\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x05\x11\xED\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x07\x12\xF7\n\x12\f\x12\x0E\x12\xFA\v\x12\x03\x13\x05\x13" +
		"\xFD\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x05\x14\u0104\n\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x05\x15\u010B\n\x15\x03\x15\x03" +
		"\x15\x07\x15\u010F\n\x15\f\x15\x0E\x15\u0112\v\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x17\x05\x17\u011B\n\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x18\x05\x18\u0122\n\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x19\x05\x19\u0129\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A" +
		"\x05\x1A\u0130\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05" +
		"\x1B\u0138\n\x1B\x03\x1C\x05\x1C\u013B\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x05\x1D\u0142\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E" +
		"\x03\x1E\x03\x1F\x05\x1F\u014B\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u0153\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03" +
		" \x03 \x07 \u015D\n \f \x0E \u0160\v \x03!\x03!\x05!\u0164\n!\x03\"\x05" +
		"\"\u0167\n\"\x03\"\x03\"\x06\"\u016B\n\"\r\"\x0E\"\u016C\x03\"\x03\"\x03" +
		"#\x05#\u0172\n#\x03#\x03#\x06#\u0176\n#\r#\x0E#\u0177\x03#\x03#\x03$\x05" +
		"$\u017D\n$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u0187\n$\x03$" +
		"\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x07%\u0191\n%\f%\x0E%\u0194\v%\x03" +
		"&\x05&\u0197\n&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u019F\n&\x03&\x03&" +
		"\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u01AB\n\'\f\'\x0E" +
		"\'\u01AE\v\'\x03(\x05(\u01B1\n(\x03(\x03(\x06(\u01B5\n(\r(\x0E(\u01B6" +
		"\x03(\x03(\x03)\x05)\u01BC\n)\x03)\x03)\x06)\u01C0\n)\r)\x0E)\u01C1\x03" +
		")\x03)\x03*\x05*\u01C7\n*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u01D0" +
		"\n*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x07+\u01DE" +
		"\n+\f+\x0E+\u01E1\v+\x03,\x05,\u01E4\n,\x03,\x03,\x03,\x03,\x03,\x03," +
		"\x05,\u01EC\n,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x07-" +
		"\u01F8\n-\f-\x0E-\u01FB\v-\x03.\x05.\u01FE\n.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x05.\u0207\n.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x07/\u0215\n/\f/\x0E/\u0218\v/\x030\x050\u021B\n0\x03" +
		"0\x030\x030\x030\x030\x030\x050\u0223\n0\x030\x030\x031\x031\x031\x03" +
		"1\x031\x031\x031\x031\x031\x071\u0230\n1\f1\x0E1\u0233\v1\x032\x052\u0236" +
		"\n2\x032\x032\x033\x053\u023B\n3\x033\x033\x033\x033\x033\x033\x033\x05" +
		"3\u0244\n3\x033\x033\x034\x034\x034\x034\x034\x034\x034\x034\x034\x03" +
		"4\x034\x034\x074\u0254\n4\f4\x0E4\u0257\v4\x035\x055\u025A\n5\x035\x03" +
		"5\x036\x056\u025F\n6\x036\x036\x036\x036\x036\x036\x056\u0267\n6\x036" +
		"\x036\x037\x037\x037\x037\x037\x037\x077\u0271\n7\f7\x0E7\u0274\v7\x03" +
		"7\x02\x02\x028\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02\x02\x05\x03\x03\x07\x07\x04\x02" +
		"\t\n&\'\x03\x02()\x02\u02D5\x02n\x03\x02\x02\x02\x04q\x03\x02\x02\x02" +
		"\x06v\x03\x02\x02\x02\bx\x03\x02\x02\x02\n{\x03\x02\x02\x02\f\x7F\x03" +
		"\x02\x02\x02\x0E\x91\x03\x02\x02\x02\x10\x94\x03\x02\x02\x02\x12\x98\x03" +
		"\x02\x02\x02\x14\xA8\x03\x02\x02\x02\x16\xB1\x03\x02\x02\x02\x18\xC1\x03" +
		"\x02\x02\x02\x1A\xCE\x03\x02\x02\x02\x1C\xDC\x03\x02\x02\x02\x1E\xE2\x03" +
		"\x02\x02\x02 \xE5\x03\x02\x02\x02\"\xF8\x03\x02\x02\x02$\xFC\x03\x02\x02" +
		"\x02&\u0103\x03\x02\x02\x02(\u010A\x03\x02\x02\x02*\u0115\x03\x02\x02" +
		"\x02,\u011A\x03\x02\x02\x02.\u0121\x03\x02\x02\x020\u0128\x03\x02\x02" +
		"\x022\u012F\x03\x02\x02\x024\u0137\x03\x02\x02\x026\u013A\x03\x02\x02" +
		"\x028\u0141\x03\x02\x02\x02:\u0147\x03\x02\x02\x02<\u014A\x03\x02\x02" +
		"\x02>\u015E\x03\x02\x02\x02@\u0163\x03\x02\x02\x02B\u0166\x03\x02\x02" +
		"\x02D\u0171\x03\x02\x02\x02F\u017C\x03\x02\x02\x02H\u0192\x03\x02\x02" +
		"\x02J\u0196\x03\x02\x02\x02L\u01AC\x03\x02\x02\x02N\u01B0\x03\x02\x02" +
		"\x02P\u01BB\x03\x02\x02\x02R\u01C6\x03\x02\x02\x02T\u01DF\x03\x02\x02" +
		"\x02V\u01E3\x03\x02\x02\x02X\u01F9\x03\x02\x02\x02Z\u01FD\x03\x02\x02" +
		"\x02\\\u0216\x03\x02\x02\x02^\u021A\x03\x02\x02\x02`\u0231\x03\x02\x02" +
		"\x02b\u0235\x03\x02\x02\x02d\u023A\x03\x02\x02\x02f\u0255\x03\x02\x02" +
		"\x02h\u0259\x03\x02\x02\x02j\u025E\x03\x02\x02\x02l\u0272\x03\x02\x02" +
		"\x02no\x07\b\x02\x02o\x03\x03\x02\x02\x02pr\x05\n\x06\x02qp\x03\x02\x02" +
		"\x02qr\x03\x02\x02\x02rs\x03\x02\x02\x02st\x05\f\x07\x02tu\x05\x0E\b\x02" +
		"u\x05\x03\x02\x02\x02vw\t\x02\x02\x02w\x07\x03\x02\x02\x02xy\t\x03\x02" +
		"\x02y\t\x03\x02\x02\x02z|\x07\x05\x02\x02{z\x03\x02\x02\x02|}\x03\x02" +
		"\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02\x02~\v\x03\x02\x02\x02\x7F\x80" +
		"\x07\x0E\x02\x02\x80\x81\x05\x06\x04\x02\x81\r\x03\x02\x02\x02\x82\x90" +
		"\x05\x12\n\x02\x83\x90\x05\x16\f\x02\x84\x90\x05\x1A\x0E\x02\x85\x90\x05" +
		" \x11\x02\x86\x90\x05<\x1F\x02\x87\x90\x05F$\x02\x88\x90\x05J&\x02\x89" +
		"\x90\x05R*\x02\x8A\x90\x05V,\x02\x8B\x90\x05Z.\x02\x8C\x90\x05^0\x02\x8D" +
		"\x90\x05d3\x02\x8E\x90\x05j6\x02\x8F\x82\x03\x02\x02\x02\x8F\x83\x03\x02" +
		"\x02\x02\x8F\x84\x03\x02\x02\x02\x8F\x85\x03\x02\x02\x02\x8F\x86\x03\x02" +
		"\x02\x02\x8F\x87\x03\x02\x02\x02\x8F\x88\x03\x02\x02\x02\x8F\x89\x03\x02" +
		"\x02\x02\x8F\x8A\x03\x02\x02\x02\x8F\x8B\x03\x02\x02\x02\x8F\x8C\x03\x02" +
		"\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x8E\x03\x02\x02\x02\x90\x93\x03\x02" +
		"\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x0F\x03\x02" +
		"\x02\x02\x93\x91\x03\x02\x02\x02\x94\x95\x07\r\x02\x02\x95\x96\x05\x06" +
		"\x04\x02\x96\x11\x03\x02\x02\x02\x97\x99\x05\n\x06\x02\x98\x97\x03\x02" +
		"\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B\x07\x1A" +
		"\x02\x02\x9B\x9F\x05\x06\x04\x02\x9C\x9E\x05\x14\v\x02\x9D\x9C\x03\x02" +
		"\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02" +
		"\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA4\x05\n" +
		"\x06\x02\xA3\xA2\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x03\x02" +
		"\x02\x02\xA5\xA6\x05\x10\t\x02\xA6\x13\x03\x02\x02\x02\xA7\xA9\x05\n\x06" +
		"\x02\xA8\xA7\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAA\x03\x02\x02" +
		"\x02\xAA\xAB\x07\x1B\x02\x02\xAB\xAC\x05\x1E\x10\x02\xAC\xAD\x05\x02\x02" +
		"\x02\xAD\xAE\x05\x02\x02\x02\xAE\xAF\x05\x06\x04\x02\xAF\x15\x03\x02\x02" +
		"\x02\xB0\xB2\x05\n\x06\x02\xB1\xB0\x03\x02\x02\x02\xB1\xB2\x03\x02\x02" +
		"\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x07\x1C\x02\x02\xB4\xB8\x05\x06\x04" +
		"\x02\xB5\xB7\x05\x18\r\x02\xB6\xB5\x03\x02\x02\x02\xB7\xBA\x03\x02\x02" +
		"\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBC\x03\x02\x02" +
		"\x02\xBA\xB8\x03\x02\x02\x02\xBB\xBD\x05\n\x06\x02\xBC\xBB\x03\x02\x02" +
		"\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x05\x10\t" +
		"\x02\xBF\x17\x03\x02\x02\x02\xC0\xC2\x05\n\x06\x02\xC1\xC0\x03\x02\x02" +
		"\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x07\x1D\x02" +
		"\x02\xC4\xC8\x05\x1E\x10\x02\xC5\xC7\x05\b\x05\x02\xC6\xC5\x03\x02\x02" +
		"\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02" +
		"\x02\xC9\xCB\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB\xCC\x05\x06\x04" +
		"\x02\xCC\x19\x03\x02\x02\x02\xCD\xCF\x05\n\x06\x02\xCE\xCD\x03\x02\x02" +
		"\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x07\x1E\x02" +
		"\x02\xD1\xD2\x05\x1E\x10\x02\xD2\xD3\x05\x02\x02\x02\xD3\xD4\x05\x06\x04" +
		"\x02\xD4\xD8\x03\x02\x02\x02\xD5\xD7\x05\x1C\x0F\x02\xD6\xD5\x03\x02\x02" +
		"\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02" +
		"\x02\xD9\x1B\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDD\x05\n\x06" +
		"\x02\xDC\xDB\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x03\x02\x02" +
		"\x02\xDE\xDF\x07\x1E\x02\x02\xDF\xE0\x05\x02\x02\x02\xE0\xE1\x05\x06\x04" +
		"\x02\xE1\x1D\x03\x02\x02\x02\xE2\xE3\t\x04\x02\x02\xE3\x1F\x03\x02\x02" +
		"\x02\xE4\xE6\x05\n\x06\x02\xE5\xE4\x03\x02\x02\x02\xE5\xE6\x03\x02\x02" +
		"\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x07\x0F\x02\x02\xE8\xE9\x05\x1E\x10" +
		"\x02\xE9\xEA\x05\x06\x04\x02\xEA\xEC\x05\"\x12\x02\xEB\xED\x05\n\x06\x02" +
		"\xEC\xEB\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02" +
		"\xEE\xEF\x05\x10\t\x02\xEF!\x03\x02\x02\x02\xF0\xF7\x05$\x13\x02\xF1\xF7" +
		"\x05&\x14\x02\xF2\xF7\x05(\x15\x02\xF3\xF7\x05,\x17\x02\xF4\xF7\x05.\x18" +
		"\x02\xF5\xF7\x054\x1B\x02\xF6\xF0\x03\x02\x02\x02\xF6\xF1\x03\x02\x02" +
		"\x02\xF6\xF2\x03\x02\x02\x02\xF6\xF3\x03\x02\x02\x02\xF6\xF4\x03\x02\x02" +
		"\x02\xF6\xF5\x03\x02\x02\x02\xF7\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02" +
		"\x02\xF8\xF9\x03\x02\x02\x02\xF9#\x03\x02\x02\x02\xFA\xF8\x03\x02\x02" +
		"\x02\xFB\xFD\x05\n\x06\x02\xFC\xFB\x03\x02\x02\x02\xFC\xFD\x03\x02\x02" +
		"\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x07\x1F\x02\x02\xFF\u0100\x05\x02" +
		"\x02\x02\u0100\u0101\x05\x06\x04\x02\u0101%\x03\x02\x02\x02\u0102\u0104" +
		"\x05\n\x06\x02\u0103\u0102\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02" +
		"\u0104\u0105\x03\x02\x02\x02\u0105\u0106\x07 \x02\x02\u0106\u0107\x05" +
		"\x1E\x10\x02\u0107\u0108\x05\x06\x04\x02\u0108\'\x03\x02\x02\x02\u0109" +
		"\u010B\x05\n\x06\x02\u010A\u0109\x03\x02\x02\x02\u010A\u010B\x03\x02\x02" +
		"\x02\u010B\u010C\x03\x02\x02\x02\u010C\u0110\x07!\x02\x02\u010D\u010F" +
		"\x05*\x16\x02\u010E\u010D\x03\x02\x02\x02\u010F\u0112\x03\x02\x02\x02" +
		"\u0110\u010E\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0113\x03" +
		"\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0113\u0114\x05\x06\x04\x02\u0114" +
		")\x03\x02\x02\x02\u0115\u0116\x05\x1E\x10\x02\u0116\u0117\x07*\x02\x02" +
		"\u0117\u0118\x05\b\x05\x02\u0118+\x03\x02\x02\x02\u0119\u011B\x05\n\x06" +
		"\x02\u011A\u0119\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C" +
		"\x03\x02\x02\x02\u011C\u011D\x07\"\x02\x02\u011D\u011E\x05\x1E\x10\x02" +
		"\u011E\u011F\x05\x06\x04\x02\u011F-\x03\x02\x02\x02\u0120\u0122\x05\n" +
		"\x06\x02\u0121\u0120\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122" +
		"\u0123\x03\x02\x02\x02\u0123\u0124\x07#\x02\x02\u0124\u0125\x05\x02\x02" +
		"\x02\u0125\u0126\x05\x06\x04\x02\u0126/\x03\x02\x02\x02\u0127\u0129\x05" +
		"\n\x06\x02\u0128\u0127\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129" +
		"\u012A\x03\x02\x02\x02\u012A\u012B\x07$\x02\x02\u012B\u012C\x05\x02\x02" +
		"\x02\u012C\u012D\x05\x06\x04\x02\u012D1\x03\x02\x02\x02\u012E\u0130\x05" +
		"\n\x06\x02\u012F\u012E\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130" +
		"\u0131\x03\x02\x02\x02\u0131\u0132\x07%\x02\x02\u0132\u0133\x05\x02\x02" +
		"\x02\u0133\u0134\x05\x06\x04\x02\u01343\x03\x02\x02\x02\u0135\u0138\x05" +
		"6\x1C\x02\u0136\u0138\x058\x1D\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0136" +
		"\x03\x02\x02\x02\u01385\x03\x02\x02\x02\u0139\u013B\x05\n\x06\x02\u013A" +
		"\u0139\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013C\x03\x02" +
		"\x02\x02\u013C\u013D\x07\v\x02\x02\u013D\u013E\x05\b\x05\x02\u013E\u013F" +
		"\x05\x06\x04\x02\u013F7\x03\x02\x02\x02\u0140\u0142\x05\n\x06\x02\u0141" +
		"\u0140\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0143\x03\x02" +
		"\x02\x02\u0143\u0144\x07\f\x02\x02\u0144\u0145\x05\x02\x02\x02\u0145\u0146" +
		"\x05\x06\x04\x02\u01469\x03\x02\x02\x02\u0147\u0148\x07&\x02\x02\u0148" +
		";\x03\x02\x02\x02\u0149\u014B\x05\n\x06\x02\u014A\u0149\x03\x02\x02\x02" +
		"\u014A\u014B\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x07" +
		"\x10\x02\x02\u014D\u014E\x05\x1E\x10\x02\u014E\u014F\x05:\x1E\x02\u014F" +
		"\u0150\x05\x06\x04\x02\u0150\u0152\x05> \x02\u0151\u0153\x05\n\x06\x02" +
		"\u0152\u0151\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0154\x03" +
		"\x02\x02\x02\u0154\u0155\x05\x10\t\x02\u0155=\x03\x02\x02\x02\u0156\u015D" +
		"\x05$\x13\x02\u0157\u015D\x05&\x14\x02\u0158\u015D\x05(\x15\x02\u0159" +
		"\u015D\x05,\x17\x02\u015A\u015D\x05.\x18\x02\u015B\u015D\x05@!\x02\u015C" +
		"\u0156\x03\x02\x02\x02\u015C\u0157\x03\x02\x02\x02\u015C\u0158\x03\x02" +
		"\x02\x02\u015C\u0159\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C" +
		"\u015B\x03\x02\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E\u015C\x03\x02" +
		"\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F?\x03\x02\x02\x02\u0160\u015E" +
		"\x03\x02\x02\x02\u0161\u0164\x05B\"\x02\u0162\u0164\x05D#\x02\u0163\u0161" +
		"\x03\x02\x02\x02\u0163\u0162\x03\x02\x02\x02\u0164A\x03\x02\x02\x02\u0165" +
		"\u0167\x05\n\x06\x02\u0166\u0165\x03\x02\x02\x02\u0166\u0167\x03\x02\x02" +
		"\x02\u0167\u0168\x03\x02\x02\x02\u0168\u016A\x07\v\x02\x02\u0169\u016B" +
		"\x05\b\x05\x02\u016A\u0169\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02" +
		"\u016C\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x03" +
		"\x02\x02\x02\u016E\u016F\x05\x06\x04\x02\u016FC\x03\x02\x02\x02\u0170" +
		"\u0172\x05\n\x06\x02\u0171\u0170\x03\x02\x02\x02\u0171\u0172\x03\x02\x02" +
		"\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0175\x07\f\x02\x02\u0174\u0176" +
		"\x05\x02\x02\x02\u0175\u0174\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02" +
		"\u0177\u0175\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u0179\x03" +
		"\x02\x02\x02\u0179\u017A\x05\x06\x04\x02\u017AE\x03\x02\x02\x02\u017B" +
		"\u017D\x05\n\x06\x02\u017C\u017B\x03\x02\x02\x02\u017C\u017D\x03\x02\x02" +
		"\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x07\x10\x02\x02\u017F\u0180" +
		"\x05\x1E\x10\x02\u0180\u0181\x05:\x1E\x02\u0181\u0182\x07+\x02\x02\u0182" +
		"\u0183\x05:\x1E\x02\u0183\u0184\x05\x06\x04\x02\u0184\u0186\x05H%\x02" +
		"\u0185\u0187\x05\n\x06\x02\u0186\u0185\x03\x02\x02\x02\u0186\u0187\x03" +
		"\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u0189\x05\x10\t\x02\u0189" +
		"G\x03\x02\x02\x02\u018A\u0191\x05$\x13\x02\u018B\u0191\x05&\x14\x02\u018C" +
		"\u0191\x05(\x15\x02\u018D\u0191\x05,\x17\x02\u018E\u0191\x05.\x18\x02" +
		"\u018F\u0191\x05@!\x02\u0190\u018A\x03\x02\x02\x02\u0190\u018B\x03\x02" +
		"\x02\x02\u0190\u018C\x03\x02\x02\x02\u0190\u018D\x03\x02\x02\x02\u0190" +
		"\u018E\x03\x02\x02\x02\u0190\u018F\x03\x02\x02\x02\u0191\u0194\x03\x02" +
		"\x02\x02\u0192\u0190\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193" +
		"I\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0195\u0197\x05\n\x06\x02" +
		"\u0196\u0195\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0198\x03" +
		"\x02\x02\x02\u0198\u0199\x07\x11\x02\x02\u0199\u019A\x05\x1E\x10\x02\u019A" +
		"\u019B\x05:\x1E\x02\u019B\u019C\x05\x06\x04\x02\u019C\u019E\x05L\'\x02" +
		"\u019D\u019F\x05\n\x06\x02\u019E\u019D\x03\x02\x02\x02\u019E\u019F\x03" +
		"\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A1\x05\x10\t\x02\u01A1" +
		"K\x03\x02\x02\x02\u01A2\u01AB\x05$\x13\x02\u01A3\u01AB\x05&\x14\x02\u01A4" +
		"\u01AB\x05(\x15\x02\u01A5\u01AB\x05,\x17\x02\u01A6\u01AB\x050\x19\x02" +
		"\u01A7\u01AB\x05.\x18\x02\u01A8\u01AB\x05N(\x02\u01A9\u01AB\x05@!\x02" +
		"\u01AA\u01A2\x03\x02\x02\x02\u01AA\u01A3\x03\x02\x02\x02\u01AA\u01A4\x03" +
		"\x02\x02\x02\u01AA\u01A5\x03\x02\x02\x02\u01AA\u01A6\x03\x02\x02\x02\u01AA" +
		"\u01A7\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AA\u01A9\x03\x02" +
		"\x02\x02\u01AB\u01AE\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AC" +
		"\u01AD\x03\x02\x02\x02\u01ADM\x03\x02\x02\x02\u01AE\u01AC\x03\x02\x02" +
		"\x02\u01AF\u01B1\x05\n\x06\x02\u01B0\u01AF\x03\x02\x02\x02\u01B0\u01B1" +
		"\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B4\x07\x12\x02\x02" +
		"\u01B3\u01B5\x05\b\x05\x02\u01B4\u01B3\x03\x02\x02\x02\u01B5\u01B6\x03" +
		"\x02\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7" +
		"\u01B8\x03\x02\x02\x02\u01B8\u01B9\x05\x06\x04\x02\u01B9O\x03\x02\x02" +
		"\x02\u01BA\u01BC\x05\n\x06\x02\u01BB\u01BA\x03\x02\x02\x02\u01BB\u01BC" +
		"\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BF\x07\x14\x02\x02" +
		"\u01BE\u01C0\x05\b\x05\x02\u01BF\u01BE\x03\x02\x02\x02\u01C0\u01C1\x03" +
		"\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2" +
		"\u01C3\x03\x02\x02\x02\u01C3\u01C4\x05\x06\x04\x02\u01C4Q\x03\x02\x02" +
		"\x02\u01C5\u01C7\x05\n\x06\x02\u01C6\u01C5\x03\x02\x02\x02\u01C6\u01C7" +
		"\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01C9\x07\x13\x02\x02" +
		"\u01C9\u01CA\x05\x1E\x10\x02\u01CA\u01CB\x05:\x1E\x02\u01CB\u01CC\x05" +
		":\x1E\x02\u01CC\u01CD\x05\x06\x04\x02\u01CD\u01CF\x05T+\x02\u01CE\u01D0" +
		"\x05\n\x06\x02\u01CF\u01CE\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02" +
		"\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\x05\x10\t\x02\u01D2S\x03\x02" +
		"\x02\x02\u01D3\u01DE\x05$\x13\x02\u01D4\u01DE\x05&\x14\x02\u01D5\u01DE" +
		"\x05(\x15\x02\u01D6\u01DE\x05,\x17\x02\u01D7\u01DE\x050\x19\x02\u01D8" +
		"\u01DE\x052\x1A\x02\u01D9\u01DE\x05.\x18\x02\u01DA\u01DE\x05N(\x02\u01DB" +
		"\u01DE\x05P)\x02\u01DC\u01DE\x05@!\x02\u01DD\u01D3\x03\x02\x02\x02\u01DD" +
		"\u01D4\x03\x02\x02\x02\u01DD\u01D5\x03\x02\x02\x02\u01DD\u01D6\x03\x02" +
		"\x02\x02\u01DD\u01D7\x03\x02\x02\x02\u01DD\u01D8\x03\x02\x02\x02\u01DD" +
		"\u01D9\x03\x02\x02\x02\u01DD\u01DA\x03\x02\x02\x02\u01DD\u01DB\x03\x02" +
		"\x02\x02\u01DD\u01DC\x03\x02\x02\x02\u01DE\u01E1\x03\x02\x02\x02\u01DF" +
		"\u01DD\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0U\x03\x02\x02" +
		"\x02\u01E1\u01DF\x03\x02\x02\x02\u01E2\u01E4\x05\n\x06\x02\u01E3\u01E2" +
		"\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02" +
		"\u01E5\u01E6\x07\x15\x02\x02\u01E6\u01E7\x05\x1E\x10\x02\u01E7\u01E8\x05" +
		":\x1E\x02\u01E8\u01E9\x05\x06\x04\x02\u01E9\u01EB\x05X-\x02\u01EA\u01EC" +
		"\x05\n\x06\x02\u01EB\u01EA\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02" +
		"\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EE\x05\x10\t\x02\u01EEW\x03\x02" +
		"\x02\x02\u01EF\u01F8\x05$\x13\x02\u01F0\u01F8\x05&\x14\x02\u01F1\u01F8" +
		"\x05(\x15\x02\u01F2\u01F8\x05,\x17\x02\u01F3\u01F8\x050\x19\x02\u01F4" +
		"\u01F8\x05.\x18\x02\u01F5\u01F8\x05N(\x02\u01F6\u01F8\x05@!\x02\u01F7" +
		"\u01EF\x03\x02\x02\x02\u01F7\u01F0\x03\x02\x02\x02\u01F7\u01F1\x03\x02" +
		"\x02\x02\u01F7\u01F2\x03\x02\x02\x02\u01F7\u01F3\x03\x02\x02\x02\u01F7" +
		"\u01F4\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F7\u01F6\x03\x02" +
		"\x02\x02\u01F8\u01FB\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9" +
		"\u01FA\x03\x02\x02\x02\u01FAY\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02" +
		"\x02\u01FC\u01FE\x05\n\x06\x02\u01FD\u01FC\x03\x02\x02\x02\u01FD\u01FE" +
		"\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0200\x07\x16\x02\x02" +
		"\u0200\u0201\x05\x1E\x10\x02\u0201\u0202\x05:\x1E\x02\u0202\u0203\x05" +
		":\x1E\x02\u0203\u0204\x05\x06\x04\x02\u0204\u0206\x05\\/\x02\u0205\u0207" +
		"\x05\n\x06\x02\u0206\u0205\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02" +
		"\u0207\u0208\x03\x02\x02\x02\u0208\u0209\x05\x10\t\x02\u0209[\x03\x02" +
		"\x02\x02\u020A\u0215\x05$\x13\x02\u020B\u0215\x05&\x14\x02\u020C\u0215" +
		"\x05(\x15\x02\u020D\u0215\x05,\x17\x02\u020E\u0215\x050\x19\x02\u020F" +
		"\u0215\x052\x1A\x02\u0210\u0215\x05.\x18\x02\u0211\u0215\x05N(\x02\u0212" +
		"\u0215\x05P)\x02\u0213\u0215\x05@!\x02\u0214\u020A\x03\x02\x02\x02\u0214" +
		"\u020B\x03\x02\x02\x02\u0214\u020C\x03\x02\x02\x02\u0214\u020D\x03\x02" +
		"\x02\x02\u0214\u020E\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u0214\u020F\x03\x02\x02\x02\u0214\u0210\x03\x02\x02\x02\u0214" +
		"\u0211\x03\x02\x02\x02\u0214\u0212\x03\x02\x02\x02\u0214\u0213\x03\x02" +
		"\x02\x02\u0215\u0218\x03\x02\x02\x02\u0216\u0214\x03\x02\x02\x02\u0216" +
		"\u0217\x03\x02\x02\x02\u0217]\x03\x02\x02\x02\u0218\u0216\x03\x02\x02" +
		"\x02\u0219\u021B\x05\n\x06\x02\u021A\u0219\x03\x02\x02\x02\u021A\u021B" +
		"\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C\u021D\x07\x17\x02\x02" +
		"\u021D\u021E\x05\x1E\x10\x02\u021E\u021F\x05:\x1E\x02\u021F\u0220\x05" +
		"\x06\x04\x02\u0220\u0222\x05`1\x02\u0221\u0223\x05\n\x06\x02\u0222\u0221" +
		"\x03\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02" +
		"\u0224\u0225\x05\x10\t\x02\u0225_\x03\x02\x02\x02\u0226\u0230\x05$\x13" +
		"\x02\u0227\u0230\x05&\x14\x02\u0228\u0230\x05(\x15\x02\u0229\u0230\x05" +
		",\x17\x02\u022A\u0230\x050\x19\x02\u022B\u0230\x05.\x18\x02\u022C\u0230" +
		"\x05b2\x02\u022D\u0230\x05N(\x02\u022E\u0230\x05@!\x02\u022F\u0226\x03" +
		"\x02\x02\x02\u022F\u0227\x03\x02\x02\x02\u022F\u0228\x03\x02\x02\x02\u022F" +
		"\u0229\x03\x02\x02\x02\u022F\u022A\x03\x02\x02\x02\u022F\u022B\x03\x02" +
		"\x02\x02\u022F\u022C\x03\x02\x02\x02\u022F\u022D\x03\x02\x02\x02\u022F" +
		"\u022E\x03\x02\x02\x02\u0230\u0233\x03\x02\x02\x02\u0231\u022F\x03\x02" +
		"\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232a\x03\x02\x02\x02\u0233\u0231" +
		"\x03\x02\x02\x02\u0234\u0236\x05\n\x06\x02\u0235\u0234\x03\x02\x02\x02" +
		"\u0235\u0236\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u0238\x07" +
		"\x03\x02\x02\u0238c\x03\x02\x02\x02\u0239\u023B\x05\n\x06\x02\u023A\u0239" +
		"\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02" +
		"\u023C\u023D\x07\x18\x02\x02\u023D\u023E\x05\x1E\x10\x02\u023E\u023F\x05" +
		":\x1E\x02\u023F\u0240\x05:\x1E\x02\u0240\u0241\x05\x06\x04\x02\u0241\u0243" +
		"\x05f4\x02\u0242\u0244\x05\n\x06\x02\u0243\u0242\x03\x02\x02\x02\u0243" +
		"\u0244\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0246\x05\x10" +
		"\t\x02\u0246e\x03\x02\x02\x02\u0247\u0254\x05$\x13\x02\u0248\u0254\x05" +
		"&\x14\x02\u0249\u0254\x05(\x15\x02\u024A\u0254\x05,\x17\x02\u024B\u0254" +
		"\x050\x19\x02\u024C\u0254\x052\x1A\x02\u024D\u0254\x05.\x18\x02\u024E" +
		"\u0254\x05b2\x02\u024F\u0254\x05h5\x02\u0250\u0254\x05N(\x02\u0251\u0254" +
		"\x05P)\x02\u0252\u0254\x05@!\x02\u0253\u0247\x03\x02\x02\x02\u0253\u0248" +
		"\x03\x02\x02\x02\u0253\u0249\x03\x02\x02\x02\u0253\u024A\x03\x02\x02\x02" +
		"\u0253\u024B\x03\x02\x02\x02\u0253\u024C\x03\x02\x02\x02\u0253\u024D\x03" +
		"\x02\x02\x02\u0253\u024E\x03\x02\x02\x02\u0253\u024F\x03\x02\x02\x02\u0253" +
		"\u0250\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02\u0253\u0252\x03\x02" +
		"\x02\x02\u0254\u0257\x03\x02\x02\x02\u0255\u0253\x03\x02\x02\x02\u0255" +
		"\u0256\x03\x02\x02\x02\u0256g\x03\x02\x02\x02\u0257\u0255\x03\x02\x02" +
		"\x02\u0258\u025A\x05\n\x06\x02\u0259\u0258\x03\x02\x02\x02\u0259\u025A" +
		"\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025C\x07\x04\x02\x02" +
		"\u025Ci\x03\x02\x02\x02\u025D\u025F\x05\n\x06\x02\u025E\u025D\x03\x02" +
		"\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260" +
		"\u0261\x07\x19\x02\x02\u0261\u0262\x05\x1E\x10\x02\u0262\u0263\x05:\x1E" +
		"\x02\u0263\u0264\x05\x06\x04\x02\u0264\u0266\x05l7\x02\u0265\u0267\x05" +
		"\n\x06\x02\u0266\u0265\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267" +
		"\u0268\x03\x02\x02\x02\u0268\u0269\x05\x10\t\x02\u0269k\x03\x02\x02\x02" +
		"\u026A\u0271\x05$\x13\x02\u026B\u0271\x05&\x14\x02\u026C\u0271\x05(\x15" +
		"\x02\u026D\u0271\x05,\x17\x02\u026E\u0271\x050\x19\x02\u026F\u0271\x05" +
		"N(\x02\u0270\u026A\x03\x02\x02\x02\u0270\u026B\x03\x02\x02\x02\u0270\u026C" +
		"\x03\x02\x02\x02\u0270\u026D\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02" +
		"\u0270\u026F\x03\x02\x02\x02\u0271\u0274\x03\x02\x02\x02\u0272\u0270\x03" +
		"\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273m\x03\x02\x02\x02\u0274" +
		"\u0272\x03\x02\x02\x02Pq}\x8F\x91\x98\x9F\xA3\xA8\xB1\xB8\xBC\xC1\xC8" +
		"\xCE\xD8\xDC\xE5\xEC\xF6\xF8\xFC\u0103\u010A\u0110\u011A\u0121\u0128\u012F" +
		"\u0137\u013A\u0141\u014A\u0152\u015C\u015E\u0163\u0166\u016C\u0171\u0177" +
		"\u017C\u0186\u0190\u0192\u0196\u019E\u01AA\u01AC\u01B0\u01B6\u01BB\u01C1" +
		"\u01C6\u01CF\u01DD\u01DF\u01E3\u01EB\u01F7\u01F9\u01FD\u0206\u0214\u0216" +
		"\u021A\u0222\u022F\u0231\u0235\u023A\u0243\u0253\u0255\u0259\u025E\u0266" +
		"\u0270\u0272";
	public static readonly _serializedATN: string = Utils.join(
		[
			dcmParser._serializedATNSegment0,
			dcmParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!dcmParser.__ATN) {
			dcmParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(dcmParser._serializedATN));
		}

		return dcmParser.__ATN;
	}

}

export class String_expContext extends ParserRuleContext {
	public _string!: Token;
	public STRING(): TerminalNode { return this.getToken(dcmParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_string_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterString_exp) {
			listener.enterString_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitString_exp) {
			listener.exitString_exp(this);
		}
	}
}


export class Dcm_fileContext extends ParserRuleContext {
	public konservierung_format_exp(): Konservierung_format_expContext {
		return this.getRuleContext(0, Konservierung_format_expContext);
	}
	public dcm_file_sub_exp(): Dcm_file_sub_expContext {
		return this.getRuleContext(0, Dcm_file_sub_expContext);
	}
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_dcm_file; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterDcm_file) {
			listener.enterDcm_file(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitDcm_file) {
			listener.exitDcm_file(this);
		}
	}
}


export class NlContext extends ParserRuleContext {
	public EOF(): TerminalNode | undefined { return this.tryGetToken(dcmParser.EOF, 0); }
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(dcmParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_nl; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterNl) {
			listener.enterNl(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitNl) {
			listener.exitNl(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(dcmParser.INT, 0); }
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(dcmParser.DECIMAL, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(dcmParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(dcmParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_value; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
}


export class Comment_expContext extends ParserRuleContext {
	public COMMENT(): TerminalNode[];
	public COMMENT(i: number): TerminalNode;
	public COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dcmParser.COMMENT);
		} else {
			return this.getToken(dcmParser.COMMENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_comment_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterComment_exp) {
			listener.enterComment_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitComment_exp) {
			listener.exitComment_exp(this);
		}
	}
}


export class Konservierung_format_expContext extends ParserRuleContext {
	public KONSERVIERUNG_FORMAT(): TerminalNode { return this.getToken(dcmParser.KONSERVIERUNG_FORMAT, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_konservierung_format_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterKonservierung_format_exp) {
			listener.enterKonservierung_format_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitKonservierung_format_exp) {
			listener.exitKonservierung_format_exp(this);
		}
	}
}


export class Dcm_file_sub_expContext extends ParserRuleContext {
	public functions_exp(): Functions_expContext[];
	public functions_exp(i: number): Functions_expContext;
	public functions_exp(i?: number): Functions_expContext | Functions_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Functions_expContext);
		} else {
			return this.getRuleContext(i, Functions_expContext);
		}
	}
	public variant_coding_exp(): Variant_coding_expContext[];
	public variant_coding_exp(i: number): Variant_coding_expContext;
	public variant_coding_exp(i?: number): Variant_coding_expContext | Variant_coding_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Variant_coding_expContext);
		} else {
			return this.getRuleContext(i, Variant_coding_expContext);
		}
	}
	public module_header_exp(): Module_header_expContext[];
	public module_header_exp(i: number): Module_header_expContext;
	public module_header_exp(i?: number): Module_header_expContext | Module_header_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Module_header_expContext);
		} else {
			return this.getRuleContext(i, Module_header_expContext);
		}
	}
	public parameter_exp(): Parameter_expContext[];
	public parameter_exp(i: number): Parameter_expContext;
	public parameter_exp(i?: number): Parameter_expContext | Parameter_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Parameter_expContext);
		} else {
			return this.getRuleContext(i, Parameter_expContext);
		}
	}
	public array_exp(): Array_expContext[];
	public array_exp(i: number): Array_expContext;
	public array_exp(i?: number): Array_expContext | Array_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Array_expContext);
		} else {
			return this.getRuleContext(i, Array_expContext);
		}
	}
	public matrix_exp(): Matrix_expContext[];
	public matrix_exp(i: number): Matrix_expContext;
	public matrix_exp(i?: number): Matrix_expContext | Matrix_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Matrix_expContext);
		} else {
			return this.getRuleContext(i, Matrix_expContext);
		}
	}
	public characteristic_line_exp(): Characteristic_line_expContext[];
	public characteristic_line_exp(i: number): Characteristic_line_expContext;
	public characteristic_line_exp(i?: number): Characteristic_line_expContext | Characteristic_line_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Characteristic_line_expContext);
		} else {
			return this.getRuleContext(i, Characteristic_line_expContext);
		}
	}
	public characteristic_map_exp(): Characteristic_map_expContext[];
	public characteristic_map_exp(i: number): Characteristic_map_expContext;
	public characteristic_map_exp(i?: number): Characteristic_map_expContext | Characteristic_map_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Characteristic_map_expContext);
		} else {
			return this.getRuleContext(i, Characteristic_map_expContext);
		}
	}
	public fixed_characteristic_line_exp(): Fixed_characteristic_line_expContext[];
	public fixed_characteristic_line_exp(i: number): Fixed_characteristic_line_expContext;
	public fixed_characteristic_line_exp(i?: number): Fixed_characteristic_line_expContext | Fixed_characteristic_line_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fixed_characteristic_line_expContext);
		} else {
			return this.getRuleContext(i, Fixed_characteristic_line_expContext);
		}
	}
	public fixed_characteristic_map_exp(): Fixed_characteristic_map_expContext[];
	public fixed_characteristic_map_exp(i: number): Fixed_characteristic_map_expContext;
	public fixed_characteristic_map_exp(i?: number): Fixed_characteristic_map_expContext | Fixed_characteristic_map_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fixed_characteristic_map_expContext);
		} else {
			return this.getRuleContext(i, Fixed_characteristic_map_expContext);
		}
	}
	public group_characteristic_line_exp(): Group_characteristic_line_expContext[];
	public group_characteristic_line_exp(i: number): Group_characteristic_line_expContext;
	public group_characteristic_line_exp(i?: number): Group_characteristic_line_expContext | Group_characteristic_line_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Group_characteristic_line_expContext);
		} else {
			return this.getRuleContext(i, Group_characteristic_line_expContext);
		}
	}
	public group_characteristic_map_exp(): Group_characteristic_map_expContext[];
	public group_characteristic_map_exp(i: number): Group_characteristic_map_expContext;
	public group_characteristic_map_exp(i?: number): Group_characteristic_map_expContext | Group_characteristic_map_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Group_characteristic_map_expContext);
		} else {
			return this.getRuleContext(i, Group_characteristic_map_expContext);
		}
	}
	public distribution_exp(): Distribution_expContext[];
	public distribution_exp(i: number): Distribution_expContext;
	public distribution_exp(i?: number): Distribution_expContext | Distribution_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Distribution_expContext);
		} else {
			return this.getRuleContext(i, Distribution_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_dcm_file_sub_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterDcm_file_sub_exp) {
			listener.enterDcm_file_sub_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitDcm_file_sub_exp) {
			listener.exitDcm_file_sub_exp(this);
		}
	}
}


export class End_expContext extends ParserRuleContext {
	public END(): TerminalNode { return this.getToken(dcmParser.END, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_end_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterEnd_exp) {
			listener.enterEnd_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitEnd_exp) {
			listener.exitEnd_exp(this);
		}
	}
}


export class Functions_expContext extends ParserRuleContext {
	public _preComment!: Comment_expContext;
	public _endComment!: Comment_expContext;
	public FUNKTIONEN(): TerminalNode { return this.getToken(dcmParser.FUNKTIONEN, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public end_exp(): End_expContext {
		return this.getRuleContext(0, End_expContext);
	}
	public functions_sub_exp(): Functions_sub_expContext[];
	public functions_sub_exp(i: number): Functions_sub_expContext;
	public functions_sub_exp(i?: number): Functions_sub_expContext | Functions_sub_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Functions_sub_expContext);
		} else {
			return this.getRuleContext(i, Functions_sub_expContext);
		}
	}
	public comment_exp(): Comment_expContext[];
	public comment_exp(i: number): Comment_expContext;
	public comment_exp(i?: number): Comment_expContext | Comment_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comment_expContext);
		} else {
			return this.getRuleContext(i, Comment_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_functions_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterFunctions_exp) {
			listener.enterFunctions_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitFunctions_exp) {
			listener.exitFunctions_exp(this);
		}
	}
}


export class Functions_sub_expContext extends ParserRuleContext {
	public _name!: Parameter_name_expContext;
	public _version!: String_expContext;
	public _longname!: String_expContext;
	public FKT(): TerminalNode { return this.getToken(dcmParser.FKT, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public parameter_name_exp(): Parameter_name_expContext {
		return this.getRuleContext(0, Parameter_name_expContext);
	}
	public string_exp(): String_expContext[];
	public string_exp(i: number): String_expContext;
	public string_exp(i?: number): String_expContext | String_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(String_expContext);
		} else {
			return this.getRuleContext(i, String_expContext);
		}
	}
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_functions_sub_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterFunctions_sub_exp) {
			listener.enterFunctions_sub_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitFunctions_sub_exp) {
			listener.exitFunctions_sub_exp(this);
		}
	}
}


export class Variant_coding_expContext extends ParserRuleContext {
	public _preComment!: Comment_expContext;
	public _endComment!: Comment_expContext;
	public VARIANTENKODIERUNG(): TerminalNode { return this.getToken(dcmParser.VARIANTENKODIERUNG, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public end_exp(): End_expContext {
		return this.getRuleContext(0, End_expContext);
	}
	public variant_coding_sub_exp(): Variant_coding_sub_expContext[];
	public variant_coding_sub_exp(i: number): Variant_coding_sub_expContext;
	public variant_coding_sub_exp(i?: number): Variant_coding_sub_expContext | Variant_coding_sub_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Variant_coding_sub_expContext);
		} else {
			return this.getRuleContext(i, Variant_coding_sub_expContext);
		}
	}
	public comment_exp(): Comment_expContext[];
	public comment_exp(i: number): Comment_expContext;
	public comment_exp(i?: number): Comment_expContext | Comment_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comment_expContext);
		} else {
			return this.getRuleContext(i, Comment_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_variant_coding_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterVariant_coding_exp) {
			listener.enterVariant_coding_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitVariant_coding_exp) {
			listener.exitVariant_coding_exp(this);
		}
	}
}


export class Variant_coding_sub_expContext extends ParserRuleContext {
	public _name!: Parameter_name_expContext;
	public _value!: ValueContext;
	public _values: ValueContext[] = [];
	public KRITERIUM(): TerminalNode { return this.getToken(dcmParser.KRITERIUM, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public parameter_name_exp(): Parameter_name_expContext {
		return this.getRuleContext(0, Parameter_name_expContext);
	}
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_variant_coding_sub_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterVariant_coding_sub_exp) {
			listener.enterVariant_coding_sub_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitVariant_coding_sub_exp) {
			listener.exitVariant_coding_sub_exp(this);
		}
	}
}


export class Module_header_expContext extends ParserRuleContext {
	public _name!: Parameter_name_expContext;
	public _text!: String_expContext;
	public _module_header_short_exp!: Module_header_short_expContext;
	public _lines: Module_header_short_expContext[] = [];
	public MODULKOPF(): TerminalNode | undefined { return this.tryGetToken(dcmParser.MODULKOPF, 0); }
	public nl(): NlContext | undefined {
		return this.tryGetRuleContext(0, NlContext);
	}
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	public parameter_name_exp(): Parameter_name_expContext | undefined {
		return this.tryGetRuleContext(0, Parameter_name_expContext);
	}
	public string_exp(): String_expContext | undefined {
		return this.tryGetRuleContext(0, String_expContext);
	}
	public module_header_short_exp(): Module_header_short_expContext[];
	public module_header_short_exp(i: number): Module_header_short_expContext;
	public module_header_short_exp(i?: number): Module_header_short_expContext | Module_header_short_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Module_header_short_expContext);
		} else {
			return this.getRuleContext(i, Module_header_short_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_module_header_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterModule_header_exp) {
			listener.enterModule_header_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitModule_header_exp) {
			listener.exitModule_header_exp(this);
		}
	}
}


export class Module_header_short_expContext extends ParserRuleContext {
	public _text!: String_expContext;
	public MODULKOPF(): TerminalNode { return this.getToken(dcmParser.MODULKOPF, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public string_exp(): String_expContext {
		return this.getRuleContext(0, String_expContext);
	}
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_module_header_short_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterModule_header_short_exp) {
			listener.enterModule_header_short_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitModule_header_short_exp) {
			listener.exitModule_header_short_exp(this);
		}
	}
}


export class Parameter_name_expContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(dcmParser.IDENTIFIER, 0); }
	public PARAMETER_NAME(): TerminalNode | undefined { return this.tryGetToken(dcmParser.PARAMETER_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_parameter_name_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterParameter_name_exp) {
			listener.enterParameter_name_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitParameter_name_exp) {
			listener.exitParameter_name_exp(this);
		}
	}
}


export class Parameter_expContext extends ParserRuleContext {
	public _preComment!: Comment_expContext;
	public _name!: Parameter_name_expContext;
	public _endComment!: Comment_expContext;
	public FESTWERT(): TerminalNode { return this.getToken(dcmParser.FESTWERT, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public parameter_sub_exp(): Parameter_sub_expContext {
		return this.getRuleContext(0, Parameter_sub_expContext);
	}
	public end_exp(): End_expContext {
		return this.getRuleContext(0, End_expContext);
	}
	public parameter_name_exp(): Parameter_name_expContext {
		return this.getRuleContext(0, Parameter_name_expContext);
	}
	public comment_exp(): Comment_expContext[];
	public comment_exp(i: number): Comment_expContext;
	public comment_exp(i?: number): Comment_expContext | Comment_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comment_expContext);
		} else {
			return this.getRuleContext(i, Comment_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_parameter_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterParameter_exp) {
			listener.enterParameter_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitParameter_exp) {
			listener.exitParameter_exp(this);
		}
	}
}


export class Parameter_sub_expContext extends ParserRuleContext {
	public longname_exp(): Longname_expContext[];
	public longname_exp(i: number): Longname_expContext;
	public longname_exp(i?: number): Longname_expContext | Longname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Longname_expContext);
		} else {
			return this.getRuleContext(i, Longname_expContext);
		}
	}
	public displayname_exp(): Displayname_expContext[];
	public displayname_exp(i: number): Displayname_expContext;
	public displayname_exp(i?: number): Displayname_expContext | Displayname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Displayname_expContext);
		} else {
			return this.getRuleContext(i, Displayname_expContext);
		}
	}
	public var_exp(): Var_expContext[];
	public var_exp(i: number): Var_expContext;
	public var_exp(i?: number): Var_expContext | Var_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Var_expContext);
		} else {
			return this.getRuleContext(i, Var_expContext);
		}
	}
	public function_exp(): Function_expContext[];
	public function_exp(i: number): Function_expContext;
	public function_exp(i?: number): Function_expContext | Function_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Function_expContext);
		} else {
			return this.getRuleContext(i, Function_expContext);
		}
	}
	public unit_w_exp(): Unit_w_expContext[];
	public unit_w_exp(i: number): Unit_w_expContext;
	public unit_w_exp(i?: number): Unit_w_expContext | Unit_w_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_w_expContext);
		} else {
			return this.getRuleContext(i, Unit_w_expContext);
		}
	}
	public value_exp(): Value_expContext[];
	public value_exp(i: number): Value_expContext;
	public value_exp(i?: number): Value_expContext | Value_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_expContext);
		} else {
			return this.getRuleContext(i, Value_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_parameter_sub_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterParameter_sub_exp) {
			listener.enterParameter_sub_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitParameter_sub_exp) {
			listener.exitParameter_sub_exp(this);
		}
	}
}


export class Longname_expContext extends ParserRuleContext {
	public LANGNAME(): TerminalNode { return this.getToken(dcmParser.LANGNAME, 0); }
	public string_exp(): String_expContext {
		return this.getRuleContext(0, String_expContext);
	}
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_longname_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterLongname_exp) {
			listener.enterLongname_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitLongname_exp) {
			listener.exitLongname_exp(this);
		}
	}
}


export class Displayname_expContext extends ParserRuleContext {
	public DISPLAYNAME(): TerminalNode { return this.getToken(dcmParser.DISPLAYNAME, 0); }
	public parameter_name_exp(): Parameter_name_expContext {
		return this.getRuleContext(0, Parameter_name_expContext);
	}
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_displayname_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterDisplayname_exp) {
			listener.enterDisplayname_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitDisplayname_exp) {
			listener.exitDisplayname_exp(this);
		}
	}
}


export class Var_expContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(dcmParser.VAR, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	public name_value_pair(): Name_value_pairContext[];
	public name_value_pair(i: number): Name_value_pairContext;
	public name_value_pair(i?: number): Name_value_pairContext | Name_value_pairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Name_value_pairContext);
		} else {
			return this.getRuleContext(i, Name_value_pairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_var_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterVar_exp) {
			listener.enterVar_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitVar_exp) {
			listener.exitVar_exp(this);
		}
	}
}


export class Name_value_pairContext extends ParserRuleContext {
	public _name!: Parameter_name_expContext;
	public EQUALS(): TerminalNode { return this.getToken(dcmParser.EQUALS, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public parameter_name_exp(): Parameter_name_expContext {
		return this.getRuleContext(0, Parameter_name_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_name_value_pair; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterName_value_pair) {
			listener.enterName_value_pair(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitName_value_pair) {
			listener.exitName_value_pair(this);
		}
	}
}


export class Function_expContext extends ParserRuleContext {
	public _name!: Parameter_name_expContext;
	public FUNKTION(): TerminalNode { return this.getToken(dcmParser.FUNKTION, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public parameter_name_exp(): Parameter_name_expContext {
		return this.getRuleContext(0, Parameter_name_expContext);
	}
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_function_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterFunction_exp) {
			listener.enterFunction_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitFunction_exp) {
			listener.exitFunction_exp(this);
		}
	}
}


export class Unit_w_expContext extends ParserRuleContext {
	public EINHEIT_W(): TerminalNode { return this.getToken(dcmParser.EINHEIT_W, 0); }
	public string_exp(): String_expContext {
		return this.getRuleContext(0, String_expContext);
	}
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_unit_w_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterUnit_w_exp) {
			listener.enterUnit_w_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitUnit_w_exp) {
			listener.exitUnit_w_exp(this);
		}
	}
}


export class Unit_x_expContext extends ParserRuleContext {
	public EINHEIT_X(): TerminalNode { return this.getToken(dcmParser.EINHEIT_X, 0); }
	public string_exp(): String_expContext {
		return this.getRuleContext(0, String_expContext);
	}
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_unit_x_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterUnit_x_exp) {
			listener.enterUnit_x_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitUnit_x_exp) {
			listener.exitUnit_x_exp(this);
		}
	}
}


export class Unit_y_expContext extends ParserRuleContext {
	public EINHEIT_Y(): TerminalNode { return this.getToken(dcmParser.EINHEIT_Y, 0); }
	public string_exp(): String_expContext {
		return this.getRuleContext(0, String_expContext);
	}
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_unit_y_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterUnit_y_exp) {
			listener.enterUnit_y_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitUnit_y_exp) {
			listener.exitUnit_y_exp(this);
		}
	}
}


export class Value_expContext extends ParserRuleContext {
	public number_value_exp(): Number_value_expContext | undefined {
		return this.tryGetRuleContext(0, Number_value_expContext);
	}
	public string_value_exp(): String_value_expContext | undefined {
		return this.tryGetRuleContext(0, String_value_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_value_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterValue_exp) {
			listener.enterValue_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitValue_exp) {
			listener.exitValue_exp(this);
		}
	}
}


export class Number_value_expContext extends ParserRuleContext {
	public WERT(): TerminalNode { return this.getToken(dcmParser.WERT, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_number_value_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterNumber_value_exp) {
			listener.enterNumber_value_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitNumber_value_exp) {
			listener.exitNumber_value_exp(this);
		}
	}
}


export class String_value_expContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(dcmParser.TEXT, 0); }
	public string_exp(): String_expContext {
		return this.getRuleContext(0, String_expContext);
	}
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_string_value_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterString_value_exp) {
			listener.enterString_value_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitString_value_exp) {
			listener.exitString_value_exp(this);
		}
	}
}


export class Size_expContext extends ParserRuleContext {
	public INT(): TerminalNode { return this.getToken(dcmParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_size_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterSize_exp) {
			listener.enterSize_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitSize_exp) {
			listener.exitSize_exp(this);
		}
	}
}


export class Array_expContext extends ParserRuleContext {
	public _preComment!: Comment_expContext;
	public _name!: Parameter_name_expContext;
	public _sizeX!: Size_expContext;
	public _endComment!: Comment_expContext;
	public FESTWERTEBLOCK(): TerminalNode { return this.getToken(dcmParser.FESTWERTEBLOCK, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public array_sub_exp(): Array_sub_expContext {
		return this.getRuleContext(0, Array_sub_expContext);
	}
	public end_exp(): End_expContext {
		return this.getRuleContext(0, End_expContext);
	}
	public parameter_name_exp(): Parameter_name_expContext {
		return this.getRuleContext(0, Parameter_name_expContext);
	}
	public size_exp(): Size_expContext {
		return this.getRuleContext(0, Size_expContext);
	}
	public comment_exp(): Comment_expContext[];
	public comment_exp(i: number): Comment_expContext;
	public comment_exp(i?: number): Comment_expContext | Comment_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comment_expContext);
		} else {
			return this.getRuleContext(i, Comment_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_array_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterArray_exp) {
			listener.enterArray_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitArray_exp) {
			listener.exitArray_exp(this);
		}
	}
}


export class Array_sub_expContext extends ParserRuleContext {
	public longname_exp(): Longname_expContext[];
	public longname_exp(i: number): Longname_expContext;
	public longname_exp(i?: number): Longname_expContext | Longname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Longname_expContext);
		} else {
			return this.getRuleContext(i, Longname_expContext);
		}
	}
	public displayname_exp(): Displayname_expContext[];
	public displayname_exp(i: number): Displayname_expContext;
	public displayname_exp(i?: number): Displayname_expContext | Displayname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Displayname_expContext);
		} else {
			return this.getRuleContext(i, Displayname_expContext);
		}
	}
	public var_exp(): Var_expContext[];
	public var_exp(i: number): Var_expContext;
	public var_exp(i?: number): Var_expContext | Var_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Var_expContext);
		} else {
			return this.getRuleContext(i, Var_expContext);
		}
	}
	public function_exp(): Function_expContext[];
	public function_exp(i: number): Function_expContext;
	public function_exp(i?: number): Function_expContext | Function_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Function_expContext);
		} else {
			return this.getRuleContext(i, Function_expContext);
		}
	}
	public unit_w_exp(): Unit_w_expContext[];
	public unit_w_exp(i: number): Unit_w_expContext;
	public unit_w_exp(i?: number): Unit_w_expContext | Unit_w_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_w_expContext);
		} else {
			return this.getRuleContext(i, Unit_w_expContext);
		}
	}
	public value_list_exp(): Value_list_expContext[];
	public value_list_exp(i: number): Value_list_expContext;
	public value_list_exp(i?: number): Value_list_expContext | Value_list_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_list_expContext);
		} else {
			return this.getRuleContext(i, Value_list_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_array_sub_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterArray_sub_exp) {
			listener.enterArray_sub_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitArray_sub_exp) {
			listener.exitArray_sub_exp(this);
		}
	}
}


export class Value_list_expContext extends ParserRuleContext {
	public number_value_list_exp(): Number_value_list_expContext | undefined {
		return this.tryGetRuleContext(0, Number_value_list_expContext);
	}
	public string_value_list_exp(): String_value_list_expContext | undefined {
		return this.tryGetRuleContext(0, String_value_list_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_value_list_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterValue_list_exp) {
			listener.enterValue_list_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitValue_list_exp) {
			listener.exitValue_list_exp(this);
		}
	}
}


export class Number_value_list_expContext extends ParserRuleContext {
	public WERT(): TerminalNode { return this.getToken(dcmParser.WERT, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_number_value_list_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterNumber_value_list_exp) {
			listener.enterNumber_value_list_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitNumber_value_list_exp) {
			listener.exitNumber_value_list_exp(this);
		}
	}
}


export class String_value_list_expContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(dcmParser.TEXT, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	public string_exp(): String_expContext[];
	public string_exp(i: number): String_expContext;
	public string_exp(i?: number): String_expContext | String_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(String_expContext);
		} else {
			return this.getRuleContext(i, String_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_string_value_list_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterString_value_list_exp) {
			listener.enterString_value_list_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitString_value_list_exp) {
			listener.exitString_value_list_exp(this);
		}
	}
}


export class Matrix_expContext extends ParserRuleContext {
	public _preComment!: Comment_expContext;
	public _name!: Parameter_name_expContext;
	public _sizeX!: Size_expContext;
	public _sizeY!: Size_expContext;
	public _endComment!: Comment_expContext;
	public FESTWERTEBLOCK(): TerminalNode { return this.getToken(dcmParser.FESTWERTEBLOCK, 0); }
	public AT(): TerminalNode { return this.getToken(dcmParser.AT, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public matrix_sub_exp(): Matrix_sub_expContext {
		return this.getRuleContext(0, Matrix_sub_expContext);
	}
	public end_exp(): End_expContext {
		return this.getRuleContext(0, End_expContext);
	}
	public parameter_name_exp(): Parameter_name_expContext {
		return this.getRuleContext(0, Parameter_name_expContext);
	}
	public size_exp(): Size_expContext[];
	public size_exp(i: number): Size_expContext;
	public size_exp(i?: number): Size_expContext | Size_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Size_expContext);
		} else {
			return this.getRuleContext(i, Size_expContext);
		}
	}
	public comment_exp(): Comment_expContext[];
	public comment_exp(i: number): Comment_expContext;
	public comment_exp(i?: number): Comment_expContext | Comment_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comment_expContext);
		} else {
			return this.getRuleContext(i, Comment_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_matrix_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterMatrix_exp) {
			listener.enterMatrix_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitMatrix_exp) {
			listener.exitMatrix_exp(this);
		}
	}
}


export class Matrix_sub_expContext extends ParserRuleContext {
	public longname_exp(): Longname_expContext[];
	public longname_exp(i: number): Longname_expContext;
	public longname_exp(i?: number): Longname_expContext | Longname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Longname_expContext);
		} else {
			return this.getRuleContext(i, Longname_expContext);
		}
	}
	public displayname_exp(): Displayname_expContext[];
	public displayname_exp(i: number): Displayname_expContext;
	public displayname_exp(i?: number): Displayname_expContext | Displayname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Displayname_expContext);
		} else {
			return this.getRuleContext(i, Displayname_expContext);
		}
	}
	public var_exp(): Var_expContext[];
	public var_exp(i: number): Var_expContext;
	public var_exp(i?: number): Var_expContext | Var_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Var_expContext);
		} else {
			return this.getRuleContext(i, Var_expContext);
		}
	}
	public function_exp(): Function_expContext[];
	public function_exp(i: number): Function_expContext;
	public function_exp(i?: number): Function_expContext | Function_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Function_expContext);
		} else {
			return this.getRuleContext(i, Function_expContext);
		}
	}
	public unit_w_exp(): Unit_w_expContext[];
	public unit_w_exp(i: number): Unit_w_expContext;
	public unit_w_exp(i?: number): Unit_w_expContext | Unit_w_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_w_expContext);
		} else {
			return this.getRuleContext(i, Unit_w_expContext);
		}
	}
	public value_list_exp(): Value_list_expContext[];
	public value_list_exp(i: number): Value_list_expContext;
	public value_list_exp(i?: number): Value_list_expContext | Value_list_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_list_expContext);
		} else {
			return this.getRuleContext(i, Value_list_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_matrix_sub_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterMatrix_sub_exp) {
			listener.enterMatrix_sub_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitMatrix_sub_exp) {
			listener.exitMatrix_sub_exp(this);
		}
	}
}


export class Characteristic_line_expContext extends ParserRuleContext {
	public _preComment!: Comment_expContext;
	public _name!: Parameter_name_expContext;
	public _sizeX!: Size_expContext;
	public _endComment!: Comment_expContext;
	public KENNLINIE(): TerminalNode { return this.getToken(dcmParser.KENNLINIE, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public characteristic_line_sub_exp(): Characteristic_line_sub_expContext {
		return this.getRuleContext(0, Characteristic_line_sub_expContext);
	}
	public end_exp(): End_expContext {
		return this.getRuleContext(0, End_expContext);
	}
	public parameter_name_exp(): Parameter_name_expContext {
		return this.getRuleContext(0, Parameter_name_expContext);
	}
	public size_exp(): Size_expContext {
		return this.getRuleContext(0, Size_expContext);
	}
	public comment_exp(): Comment_expContext[];
	public comment_exp(i: number): Comment_expContext;
	public comment_exp(i?: number): Comment_expContext | Comment_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comment_expContext);
		} else {
			return this.getRuleContext(i, Comment_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_characteristic_line_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterCharacteristic_line_exp) {
			listener.enterCharacteristic_line_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitCharacteristic_line_exp) {
			listener.exitCharacteristic_line_exp(this);
		}
	}
}


export class Characteristic_line_sub_expContext extends ParserRuleContext {
	public longname_exp(): Longname_expContext[];
	public longname_exp(i: number): Longname_expContext;
	public longname_exp(i?: number): Longname_expContext | Longname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Longname_expContext);
		} else {
			return this.getRuleContext(i, Longname_expContext);
		}
	}
	public displayname_exp(): Displayname_expContext[];
	public displayname_exp(i: number): Displayname_expContext;
	public displayname_exp(i?: number): Displayname_expContext | Displayname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Displayname_expContext);
		} else {
			return this.getRuleContext(i, Displayname_expContext);
		}
	}
	public var_exp(): Var_expContext[];
	public var_exp(i: number): Var_expContext;
	public var_exp(i?: number): Var_expContext | Var_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Var_expContext);
		} else {
			return this.getRuleContext(i, Var_expContext);
		}
	}
	public function_exp(): Function_expContext[];
	public function_exp(i: number): Function_expContext;
	public function_exp(i?: number): Function_expContext | Function_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Function_expContext);
		} else {
			return this.getRuleContext(i, Function_expContext);
		}
	}
	public unit_x_exp(): Unit_x_expContext[];
	public unit_x_exp(i: number): Unit_x_expContext;
	public unit_x_exp(i?: number): Unit_x_expContext | Unit_x_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_x_expContext);
		} else {
			return this.getRuleContext(i, Unit_x_expContext);
		}
	}
	public unit_w_exp(): Unit_w_expContext[];
	public unit_w_exp(i: number): Unit_w_expContext;
	public unit_w_exp(i?: number): Unit_w_expContext | Unit_w_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_w_expContext);
		} else {
			return this.getRuleContext(i, Unit_w_expContext);
		}
	}
	public st_x_exp(): St_x_expContext[];
	public st_x_exp(i: number): St_x_expContext;
	public st_x_exp(i?: number): St_x_expContext | St_x_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(St_x_expContext);
		} else {
			return this.getRuleContext(i, St_x_expContext);
		}
	}
	public value_list_exp(): Value_list_expContext[];
	public value_list_exp(i: number): Value_list_expContext;
	public value_list_exp(i?: number): Value_list_expContext | Value_list_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_list_expContext);
		} else {
			return this.getRuleContext(i, Value_list_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_characteristic_line_sub_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterCharacteristic_line_sub_exp) {
			listener.enterCharacteristic_line_sub_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitCharacteristic_line_sub_exp) {
			listener.exitCharacteristic_line_sub_exp(this);
		}
	}
}


export class St_x_expContext extends ParserRuleContext {
	public ST_X(): TerminalNode { return this.getToken(dcmParser.ST_X, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_st_x_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterSt_x_exp) {
			listener.enterSt_x_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitSt_x_exp) {
			listener.exitSt_x_exp(this);
		}
	}
}


export class St_y_expContext extends ParserRuleContext {
	public ST_Y(): TerminalNode { return this.getToken(dcmParser.ST_Y, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_st_y_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterSt_y_exp) {
			listener.enterSt_y_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitSt_y_exp) {
			listener.exitSt_y_exp(this);
		}
	}
}


export class Characteristic_map_expContext extends ParserRuleContext {
	public _preComment!: Comment_expContext;
	public _name!: Parameter_name_expContext;
	public _sizeX!: Size_expContext;
	public _sizeY!: Size_expContext;
	public _endComment!: Comment_expContext;
	public KENNFELD(): TerminalNode { return this.getToken(dcmParser.KENNFELD, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public characteristic_map_sub_exp(): Characteristic_map_sub_expContext {
		return this.getRuleContext(0, Characteristic_map_sub_expContext);
	}
	public end_exp(): End_expContext {
		return this.getRuleContext(0, End_expContext);
	}
	public parameter_name_exp(): Parameter_name_expContext {
		return this.getRuleContext(0, Parameter_name_expContext);
	}
	public size_exp(): Size_expContext[];
	public size_exp(i: number): Size_expContext;
	public size_exp(i?: number): Size_expContext | Size_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Size_expContext);
		} else {
			return this.getRuleContext(i, Size_expContext);
		}
	}
	public comment_exp(): Comment_expContext[];
	public comment_exp(i: number): Comment_expContext;
	public comment_exp(i?: number): Comment_expContext | Comment_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comment_expContext);
		} else {
			return this.getRuleContext(i, Comment_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_characteristic_map_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterCharacteristic_map_exp) {
			listener.enterCharacteristic_map_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitCharacteristic_map_exp) {
			listener.exitCharacteristic_map_exp(this);
		}
	}
}


export class Characteristic_map_sub_expContext extends ParserRuleContext {
	public longname_exp(): Longname_expContext[];
	public longname_exp(i: number): Longname_expContext;
	public longname_exp(i?: number): Longname_expContext | Longname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Longname_expContext);
		} else {
			return this.getRuleContext(i, Longname_expContext);
		}
	}
	public displayname_exp(): Displayname_expContext[];
	public displayname_exp(i: number): Displayname_expContext;
	public displayname_exp(i?: number): Displayname_expContext | Displayname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Displayname_expContext);
		} else {
			return this.getRuleContext(i, Displayname_expContext);
		}
	}
	public var_exp(): Var_expContext[];
	public var_exp(i: number): Var_expContext;
	public var_exp(i?: number): Var_expContext | Var_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Var_expContext);
		} else {
			return this.getRuleContext(i, Var_expContext);
		}
	}
	public function_exp(): Function_expContext[];
	public function_exp(i: number): Function_expContext;
	public function_exp(i?: number): Function_expContext | Function_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Function_expContext);
		} else {
			return this.getRuleContext(i, Function_expContext);
		}
	}
	public unit_x_exp(): Unit_x_expContext[];
	public unit_x_exp(i: number): Unit_x_expContext;
	public unit_x_exp(i?: number): Unit_x_expContext | Unit_x_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_x_expContext);
		} else {
			return this.getRuleContext(i, Unit_x_expContext);
		}
	}
	public unit_y_exp(): Unit_y_expContext[];
	public unit_y_exp(i: number): Unit_y_expContext;
	public unit_y_exp(i?: number): Unit_y_expContext | Unit_y_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_y_expContext);
		} else {
			return this.getRuleContext(i, Unit_y_expContext);
		}
	}
	public unit_w_exp(): Unit_w_expContext[];
	public unit_w_exp(i: number): Unit_w_expContext;
	public unit_w_exp(i?: number): Unit_w_expContext | Unit_w_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_w_expContext);
		} else {
			return this.getRuleContext(i, Unit_w_expContext);
		}
	}
	public st_x_exp(): St_x_expContext[];
	public st_x_exp(i: number): St_x_expContext;
	public st_x_exp(i?: number): St_x_expContext | St_x_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(St_x_expContext);
		} else {
			return this.getRuleContext(i, St_x_expContext);
		}
	}
	public st_y_exp(): St_y_expContext[];
	public st_y_exp(i: number): St_y_expContext;
	public st_y_exp(i?: number): St_y_expContext | St_y_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(St_y_expContext);
		} else {
			return this.getRuleContext(i, St_y_expContext);
		}
	}
	public value_list_exp(): Value_list_expContext[];
	public value_list_exp(i: number): Value_list_expContext;
	public value_list_exp(i?: number): Value_list_expContext | Value_list_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_list_expContext);
		} else {
			return this.getRuleContext(i, Value_list_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_characteristic_map_sub_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterCharacteristic_map_sub_exp) {
			listener.enterCharacteristic_map_sub_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitCharacteristic_map_sub_exp) {
			listener.exitCharacteristic_map_sub_exp(this);
		}
	}
}


export class Fixed_characteristic_line_expContext extends ParserRuleContext {
	public _preComment!: Comment_expContext;
	public _name!: Parameter_name_expContext;
	public _sizeX!: Size_expContext;
	public _endComment!: Comment_expContext;
	public FESTKENNLINIE(): TerminalNode { return this.getToken(dcmParser.FESTKENNLINIE, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public fixed_characteristic_line_sub_exp(): Fixed_characteristic_line_sub_expContext {
		return this.getRuleContext(0, Fixed_characteristic_line_sub_expContext);
	}
	public end_exp(): End_expContext {
		return this.getRuleContext(0, End_expContext);
	}
	public parameter_name_exp(): Parameter_name_expContext {
		return this.getRuleContext(0, Parameter_name_expContext);
	}
	public size_exp(): Size_expContext {
		return this.getRuleContext(0, Size_expContext);
	}
	public comment_exp(): Comment_expContext[];
	public comment_exp(i: number): Comment_expContext;
	public comment_exp(i?: number): Comment_expContext | Comment_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comment_expContext);
		} else {
			return this.getRuleContext(i, Comment_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_fixed_characteristic_line_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterFixed_characteristic_line_exp) {
			listener.enterFixed_characteristic_line_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitFixed_characteristic_line_exp) {
			listener.exitFixed_characteristic_line_exp(this);
		}
	}
}


export class Fixed_characteristic_line_sub_expContext extends ParserRuleContext {
	public longname_exp(): Longname_expContext[];
	public longname_exp(i: number): Longname_expContext;
	public longname_exp(i?: number): Longname_expContext | Longname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Longname_expContext);
		} else {
			return this.getRuleContext(i, Longname_expContext);
		}
	}
	public displayname_exp(): Displayname_expContext[];
	public displayname_exp(i: number): Displayname_expContext;
	public displayname_exp(i?: number): Displayname_expContext | Displayname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Displayname_expContext);
		} else {
			return this.getRuleContext(i, Displayname_expContext);
		}
	}
	public var_exp(): Var_expContext[];
	public var_exp(i: number): Var_expContext;
	public var_exp(i?: number): Var_expContext | Var_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Var_expContext);
		} else {
			return this.getRuleContext(i, Var_expContext);
		}
	}
	public function_exp(): Function_expContext[];
	public function_exp(i: number): Function_expContext;
	public function_exp(i?: number): Function_expContext | Function_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Function_expContext);
		} else {
			return this.getRuleContext(i, Function_expContext);
		}
	}
	public unit_x_exp(): Unit_x_expContext[];
	public unit_x_exp(i: number): Unit_x_expContext;
	public unit_x_exp(i?: number): Unit_x_expContext | Unit_x_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_x_expContext);
		} else {
			return this.getRuleContext(i, Unit_x_expContext);
		}
	}
	public unit_w_exp(): Unit_w_expContext[];
	public unit_w_exp(i: number): Unit_w_expContext;
	public unit_w_exp(i?: number): Unit_w_expContext | Unit_w_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_w_expContext);
		} else {
			return this.getRuleContext(i, Unit_w_expContext);
		}
	}
	public st_x_exp(): St_x_expContext[];
	public st_x_exp(i: number): St_x_expContext;
	public st_x_exp(i?: number): St_x_expContext | St_x_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(St_x_expContext);
		} else {
			return this.getRuleContext(i, St_x_expContext);
		}
	}
	public value_list_exp(): Value_list_expContext[];
	public value_list_exp(i: number): Value_list_expContext;
	public value_list_exp(i?: number): Value_list_expContext | Value_list_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_list_expContext);
		} else {
			return this.getRuleContext(i, Value_list_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_fixed_characteristic_line_sub_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterFixed_characteristic_line_sub_exp) {
			listener.enterFixed_characteristic_line_sub_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitFixed_characteristic_line_sub_exp) {
			listener.exitFixed_characteristic_line_sub_exp(this);
		}
	}
}


export class Fixed_characteristic_map_expContext extends ParserRuleContext {
	public _preComment!: Comment_expContext;
	public _name!: Parameter_name_expContext;
	public _sizeX!: Size_expContext;
	public _sizeY!: Size_expContext;
	public _endComment!: Comment_expContext;
	public FESTKENNFELD(): TerminalNode { return this.getToken(dcmParser.FESTKENNFELD, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public fixed_characteristic_map_sub_exp(): Fixed_characteristic_map_sub_expContext {
		return this.getRuleContext(0, Fixed_characteristic_map_sub_expContext);
	}
	public end_exp(): End_expContext {
		return this.getRuleContext(0, End_expContext);
	}
	public parameter_name_exp(): Parameter_name_expContext {
		return this.getRuleContext(0, Parameter_name_expContext);
	}
	public size_exp(): Size_expContext[];
	public size_exp(i: number): Size_expContext;
	public size_exp(i?: number): Size_expContext | Size_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Size_expContext);
		} else {
			return this.getRuleContext(i, Size_expContext);
		}
	}
	public comment_exp(): Comment_expContext[];
	public comment_exp(i: number): Comment_expContext;
	public comment_exp(i?: number): Comment_expContext | Comment_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comment_expContext);
		} else {
			return this.getRuleContext(i, Comment_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_fixed_characteristic_map_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterFixed_characteristic_map_exp) {
			listener.enterFixed_characteristic_map_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitFixed_characteristic_map_exp) {
			listener.exitFixed_characteristic_map_exp(this);
		}
	}
}


export class Fixed_characteristic_map_sub_expContext extends ParserRuleContext {
	public longname_exp(): Longname_expContext[];
	public longname_exp(i: number): Longname_expContext;
	public longname_exp(i?: number): Longname_expContext | Longname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Longname_expContext);
		} else {
			return this.getRuleContext(i, Longname_expContext);
		}
	}
	public displayname_exp(): Displayname_expContext[];
	public displayname_exp(i: number): Displayname_expContext;
	public displayname_exp(i?: number): Displayname_expContext | Displayname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Displayname_expContext);
		} else {
			return this.getRuleContext(i, Displayname_expContext);
		}
	}
	public var_exp(): Var_expContext[];
	public var_exp(i: number): Var_expContext;
	public var_exp(i?: number): Var_expContext | Var_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Var_expContext);
		} else {
			return this.getRuleContext(i, Var_expContext);
		}
	}
	public function_exp(): Function_expContext[];
	public function_exp(i: number): Function_expContext;
	public function_exp(i?: number): Function_expContext | Function_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Function_expContext);
		} else {
			return this.getRuleContext(i, Function_expContext);
		}
	}
	public unit_x_exp(): Unit_x_expContext[];
	public unit_x_exp(i: number): Unit_x_expContext;
	public unit_x_exp(i?: number): Unit_x_expContext | Unit_x_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_x_expContext);
		} else {
			return this.getRuleContext(i, Unit_x_expContext);
		}
	}
	public unit_y_exp(): Unit_y_expContext[];
	public unit_y_exp(i: number): Unit_y_expContext;
	public unit_y_exp(i?: number): Unit_y_expContext | Unit_y_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_y_expContext);
		} else {
			return this.getRuleContext(i, Unit_y_expContext);
		}
	}
	public unit_w_exp(): Unit_w_expContext[];
	public unit_w_exp(i: number): Unit_w_expContext;
	public unit_w_exp(i?: number): Unit_w_expContext | Unit_w_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_w_expContext);
		} else {
			return this.getRuleContext(i, Unit_w_expContext);
		}
	}
	public st_x_exp(): St_x_expContext[];
	public st_x_exp(i: number): St_x_expContext;
	public st_x_exp(i?: number): St_x_expContext | St_x_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(St_x_expContext);
		} else {
			return this.getRuleContext(i, St_x_expContext);
		}
	}
	public st_y_exp(): St_y_expContext[];
	public st_y_exp(i: number): St_y_expContext;
	public st_y_exp(i?: number): St_y_expContext | St_y_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(St_y_expContext);
		} else {
			return this.getRuleContext(i, St_y_expContext);
		}
	}
	public value_list_exp(): Value_list_expContext[];
	public value_list_exp(i: number): Value_list_expContext;
	public value_list_exp(i?: number): Value_list_expContext | Value_list_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_list_expContext);
		} else {
			return this.getRuleContext(i, Value_list_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_fixed_characteristic_map_sub_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterFixed_characteristic_map_sub_exp) {
			listener.enterFixed_characteristic_map_sub_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitFixed_characteristic_map_sub_exp) {
			listener.exitFixed_characteristic_map_sub_exp(this);
		}
	}
}


export class Group_characteristic_line_expContext extends ParserRuleContext {
	public _preComment!: Comment_expContext;
	public _name!: Parameter_name_expContext;
	public _sizeX!: Size_expContext;
	public _endComment!: Comment_expContext;
	public GRUPPENKENNLINIE(): TerminalNode { return this.getToken(dcmParser.GRUPPENKENNLINIE, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public group_characteristic_line_sub_exp(): Group_characteristic_line_sub_expContext {
		return this.getRuleContext(0, Group_characteristic_line_sub_expContext);
	}
	public end_exp(): End_expContext {
		return this.getRuleContext(0, End_expContext);
	}
	public parameter_name_exp(): Parameter_name_expContext {
		return this.getRuleContext(0, Parameter_name_expContext);
	}
	public size_exp(): Size_expContext {
		return this.getRuleContext(0, Size_expContext);
	}
	public comment_exp(): Comment_expContext[];
	public comment_exp(i: number): Comment_expContext;
	public comment_exp(i?: number): Comment_expContext | Comment_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comment_expContext);
		} else {
			return this.getRuleContext(i, Comment_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_group_characteristic_line_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterGroup_characteristic_line_exp) {
			listener.enterGroup_characteristic_line_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitGroup_characteristic_line_exp) {
			listener.exitGroup_characteristic_line_exp(this);
		}
	}
}


export class Group_characteristic_line_sub_expContext extends ParserRuleContext {
	public longname_exp(): Longname_expContext[];
	public longname_exp(i: number): Longname_expContext;
	public longname_exp(i?: number): Longname_expContext | Longname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Longname_expContext);
		} else {
			return this.getRuleContext(i, Longname_expContext);
		}
	}
	public displayname_exp(): Displayname_expContext[];
	public displayname_exp(i: number): Displayname_expContext;
	public displayname_exp(i?: number): Displayname_expContext | Displayname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Displayname_expContext);
		} else {
			return this.getRuleContext(i, Displayname_expContext);
		}
	}
	public var_exp(): Var_expContext[];
	public var_exp(i: number): Var_expContext;
	public var_exp(i?: number): Var_expContext | Var_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Var_expContext);
		} else {
			return this.getRuleContext(i, Var_expContext);
		}
	}
	public function_exp(): Function_expContext[];
	public function_exp(i: number): Function_expContext;
	public function_exp(i?: number): Function_expContext | Function_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Function_expContext);
		} else {
			return this.getRuleContext(i, Function_expContext);
		}
	}
	public unit_x_exp(): Unit_x_expContext[];
	public unit_x_exp(i: number): Unit_x_expContext;
	public unit_x_exp(i?: number): Unit_x_expContext | Unit_x_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_x_expContext);
		} else {
			return this.getRuleContext(i, Unit_x_expContext);
		}
	}
	public unit_w_exp(): Unit_w_expContext[];
	public unit_w_exp(i: number): Unit_w_expContext;
	public unit_w_exp(i?: number): Unit_w_expContext | Unit_w_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_w_expContext);
		} else {
			return this.getRuleContext(i, Unit_w_expContext);
		}
	}
	public sstx_exp(): Sstx_expContext[];
	public sstx_exp(i: number): Sstx_expContext;
	public sstx_exp(i?: number): Sstx_expContext | Sstx_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sstx_expContext);
		} else {
			return this.getRuleContext(i, Sstx_expContext);
		}
	}
	public st_x_exp(): St_x_expContext[];
	public st_x_exp(i: number): St_x_expContext;
	public st_x_exp(i?: number): St_x_expContext | St_x_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(St_x_expContext);
		} else {
			return this.getRuleContext(i, St_x_expContext);
		}
	}
	public value_list_exp(): Value_list_expContext[];
	public value_list_exp(i: number): Value_list_expContext;
	public value_list_exp(i?: number): Value_list_expContext | Value_list_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_list_expContext);
		} else {
			return this.getRuleContext(i, Value_list_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_group_characteristic_line_sub_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterGroup_characteristic_line_sub_exp) {
			listener.enterGroup_characteristic_line_sub_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitGroup_characteristic_line_sub_exp) {
			listener.exitGroup_characteristic_line_sub_exp(this);
		}
	}
}


export class Sstx_expContext extends ParserRuleContext {
	public SSTX(): TerminalNode { return this.getToken(dcmParser.SSTX, 0); }
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_sstx_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterSstx_exp) {
			listener.enterSstx_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitSstx_exp) {
			listener.exitSstx_exp(this);
		}
	}
}


export class Group_characteristic_map_expContext extends ParserRuleContext {
	public _preComment!: Comment_expContext;
	public _name!: Parameter_name_expContext;
	public _sizeX!: Size_expContext;
	public _sizeY!: Size_expContext;
	public _endComment!: Comment_expContext;
	public GRUPPENKENNFELD(): TerminalNode { return this.getToken(dcmParser.GRUPPENKENNFELD, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public group_characteristic_map_sub_exp(): Group_characteristic_map_sub_expContext {
		return this.getRuleContext(0, Group_characteristic_map_sub_expContext);
	}
	public end_exp(): End_expContext {
		return this.getRuleContext(0, End_expContext);
	}
	public parameter_name_exp(): Parameter_name_expContext {
		return this.getRuleContext(0, Parameter_name_expContext);
	}
	public size_exp(): Size_expContext[];
	public size_exp(i: number): Size_expContext;
	public size_exp(i?: number): Size_expContext | Size_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Size_expContext);
		} else {
			return this.getRuleContext(i, Size_expContext);
		}
	}
	public comment_exp(): Comment_expContext[];
	public comment_exp(i: number): Comment_expContext;
	public comment_exp(i?: number): Comment_expContext | Comment_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comment_expContext);
		} else {
			return this.getRuleContext(i, Comment_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_group_characteristic_map_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterGroup_characteristic_map_exp) {
			listener.enterGroup_characteristic_map_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitGroup_characteristic_map_exp) {
			listener.exitGroup_characteristic_map_exp(this);
		}
	}
}


export class Group_characteristic_map_sub_expContext extends ParserRuleContext {
	public longname_exp(): Longname_expContext[];
	public longname_exp(i: number): Longname_expContext;
	public longname_exp(i?: number): Longname_expContext | Longname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Longname_expContext);
		} else {
			return this.getRuleContext(i, Longname_expContext);
		}
	}
	public displayname_exp(): Displayname_expContext[];
	public displayname_exp(i: number): Displayname_expContext;
	public displayname_exp(i?: number): Displayname_expContext | Displayname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Displayname_expContext);
		} else {
			return this.getRuleContext(i, Displayname_expContext);
		}
	}
	public var_exp(): Var_expContext[];
	public var_exp(i: number): Var_expContext;
	public var_exp(i?: number): Var_expContext | Var_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Var_expContext);
		} else {
			return this.getRuleContext(i, Var_expContext);
		}
	}
	public function_exp(): Function_expContext[];
	public function_exp(i: number): Function_expContext;
	public function_exp(i?: number): Function_expContext | Function_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Function_expContext);
		} else {
			return this.getRuleContext(i, Function_expContext);
		}
	}
	public unit_x_exp(): Unit_x_expContext[];
	public unit_x_exp(i: number): Unit_x_expContext;
	public unit_x_exp(i?: number): Unit_x_expContext | Unit_x_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_x_expContext);
		} else {
			return this.getRuleContext(i, Unit_x_expContext);
		}
	}
	public unit_y_exp(): Unit_y_expContext[];
	public unit_y_exp(i: number): Unit_y_expContext;
	public unit_y_exp(i?: number): Unit_y_expContext | Unit_y_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_y_expContext);
		} else {
			return this.getRuleContext(i, Unit_y_expContext);
		}
	}
	public unit_w_exp(): Unit_w_expContext[];
	public unit_w_exp(i: number): Unit_w_expContext;
	public unit_w_exp(i?: number): Unit_w_expContext | Unit_w_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_w_expContext);
		} else {
			return this.getRuleContext(i, Unit_w_expContext);
		}
	}
	public sstx_exp(): Sstx_expContext[];
	public sstx_exp(i: number): Sstx_expContext;
	public sstx_exp(i?: number): Sstx_expContext | Sstx_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sstx_expContext);
		} else {
			return this.getRuleContext(i, Sstx_expContext);
		}
	}
	public ssty_exp(): Ssty_expContext[];
	public ssty_exp(i: number): Ssty_expContext;
	public ssty_exp(i?: number): Ssty_expContext | Ssty_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Ssty_expContext);
		} else {
			return this.getRuleContext(i, Ssty_expContext);
		}
	}
	public st_x_exp(): St_x_expContext[];
	public st_x_exp(i: number): St_x_expContext;
	public st_x_exp(i?: number): St_x_expContext | St_x_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(St_x_expContext);
		} else {
			return this.getRuleContext(i, St_x_expContext);
		}
	}
	public st_y_exp(): St_y_expContext[];
	public st_y_exp(i: number): St_y_expContext;
	public st_y_exp(i?: number): St_y_expContext | St_y_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(St_y_expContext);
		} else {
			return this.getRuleContext(i, St_y_expContext);
		}
	}
	public value_list_exp(): Value_list_expContext[];
	public value_list_exp(i: number): Value_list_expContext;
	public value_list_exp(i?: number): Value_list_expContext | Value_list_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_list_expContext);
		} else {
			return this.getRuleContext(i, Value_list_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_group_characteristic_map_sub_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterGroup_characteristic_map_sub_exp) {
			listener.enterGroup_characteristic_map_sub_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitGroup_characteristic_map_sub_exp) {
			listener.exitGroup_characteristic_map_sub_exp(this);
		}
	}
}


export class Ssty_expContext extends ParserRuleContext {
	public SSTY(): TerminalNode { return this.getToken(dcmParser.SSTY, 0); }
	public comment_exp(): Comment_expContext | undefined {
		return this.tryGetRuleContext(0, Comment_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_ssty_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterSsty_exp) {
			listener.enterSsty_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitSsty_exp) {
			listener.exitSsty_exp(this);
		}
	}
}


export class Distribution_expContext extends ParserRuleContext {
	public _preComment!: Comment_expContext;
	public _name!: Parameter_name_expContext;
	public _sizeX!: Size_expContext;
	public _endComment!: Comment_expContext;
	public STUETZSTELLENVERTEILUNG(): TerminalNode { return this.getToken(dcmParser.STUETZSTELLENVERTEILUNG, 0); }
	public nl(): NlContext {
		return this.getRuleContext(0, NlContext);
	}
	public distribution_sub_exp(): Distribution_sub_expContext {
		return this.getRuleContext(0, Distribution_sub_expContext);
	}
	public end_exp(): End_expContext {
		return this.getRuleContext(0, End_expContext);
	}
	public parameter_name_exp(): Parameter_name_expContext {
		return this.getRuleContext(0, Parameter_name_expContext);
	}
	public size_exp(): Size_expContext {
		return this.getRuleContext(0, Size_expContext);
	}
	public comment_exp(): Comment_expContext[];
	public comment_exp(i: number): Comment_expContext;
	public comment_exp(i?: number): Comment_expContext | Comment_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comment_expContext);
		} else {
			return this.getRuleContext(i, Comment_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_distribution_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterDistribution_exp) {
			listener.enterDistribution_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitDistribution_exp) {
			listener.exitDistribution_exp(this);
		}
	}
}


export class Distribution_sub_expContext extends ParserRuleContext {
	public longname_exp(): Longname_expContext[];
	public longname_exp(i: number): Longname_expContext;
	public longname_exp(i?: number): Longname_expContext | Longname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Longname_expContext);
		} else {
			return this.getRuleContext(i, Longname_expContext);
		}
	}
	public displayname_exp(): Displayname_expContext[];
	public displayname_exp(i: number): Displayname_expContext;
	public displayname_exp(i?: number): Displayname_expContext | Displayname_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Displayname_expContext);
		} else {
			return this.getRuleContext(i, Displayname_expContext);
		}
	}
	public var_exp(): Var_expContext[];
	public var_exp(i: number): Var_expContext;
	public var_exp(i?: number): Var_expContext | Var_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Var_expContext);
		} else {
			return this.getRuleContext(i, Var_expContext);
		}
	}
	public function_exp(): Function_expContext[];
	public function_exp(i: number): Function_expContext;
	public function_exp(i?: number): Function_expContext | Function_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Function_expContext);
		} else {
			return this.getRuleContext(i, Function_expContext);
		}
	}
	public unit_x_exp(): Unit_x_expContext[];
	public unit_x_exp(i: number): Unit_x_expContext;
	public unit_x_exp(i?: number): Unit_x_expContext | Unit_x_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unit_x_expContext);
		} else {
			return this.getRuleContext(i, Unit_x_expContext);
		}
	}
	public st_x_exp(): St_x_expContext[];
	public st_x_exp(i: number): St_x_expContext;
	public st_x_exp(i?: number): St_x_expContext | St_x_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(St_x_expContext);
		} else {
			return this.getRuleContext(i, St_x_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dcmParser.RULE_distribution_sub_exp; }
	// @Override
	public enterRule(listener: dcmParserListener): void {
		if (listener.enterDistribution_sub_exp) {
			listener.enterDistribution_sub_exp(this);
		}
	}
	// @Override
	public exitRule(listener: dcmParserListener): void {
		if (listener.exitDistribution_sub_exp) {
			listener.exitDistribution_sub_exp(this);
		}
	}
}


