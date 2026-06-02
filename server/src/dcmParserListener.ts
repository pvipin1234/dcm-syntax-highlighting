// Generated from src/dcmParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { String_expContext } from "./dcmParser";
import { Dcm_fileContext } from "./dcmParser";
import { NlContext } from "./dcmParser";
import { ValueContext } from "./dcmParser";
import { Comment_expContext } from "./dcmParser";
import { Konservierung_format_expContext } from "./dcmParser";
import { Dcm_file_sub_expContext } from "./dcmParser";
import { End_expContext } from "./dcmParser";
import { Functions_expContext } from "./dcmParser";
import { Functions_sub_expContext } from "./dcmParser";
import { Variant_coding_expContext } from "./dcmParser";
import { Variant_coding_sub_expContext } from "./dcmParser";
import { Module_header_expContext } from "./dcmParser";
import { Module_header_short_expContext } from "./dcmParser";
import { Parameter_name_expContext } from "./dcmParser";
import { Parameter_expContext } from "./dcmParser";
import { Parameter_sub_expContext } from "./dcmParser";
import { Longname_expContext } from "./dcmParser";
import { Displayname_expContext } from "./dcmParser";
import { Var_expContext } from "./dcmParser";
import { Name_value_pairContext } from "./dcmParser";
import { Function_expContext } from "./dcmParser";
import { Unit_w_expContext } from "./dcmParser";
import { Unit_x_expContext } from "./dcmParser";
import { Unit_y_expContext } from "./dcmParser";
import { Value_expContext } from "./dcmParser";
import { Number_value_expContext } from "./dcmParser";
import { String_value_expContext } from "./dcmParser";
import { Size_expContext } from "./dcmParser";
import { Array_expContext } from "./dcmParser";
import { Array_sub_expContext } from "./dcmParser";
import { Value_list_expContext } from "./dcmParser";
import { Number_value_list_expContext } from "./dcmParser";
import { String_value_list_expContext } from "./dcmParser";
import { Matrix_expContext } from "./dcmParser";
import { Matrix_sub_expContext } from "./dcmParser";
import { Characteristic_line_expContext } from "./dcmParser";
import { Characteristic_line_sub_expContext } from "./dcmParser";
import { St_x_expContext } from "./dcmParser";
import { St_y_expContext } from "./dcmParser";
import { Characteristic_map_expContext } from "./dcmParser";
import { Characteristic_map_sub_expContext } from "./dcmParser";
import { Fixed_characteristic_line_expContext } from "./dcmParser";
import { Fixed_characteristic_line_sub_expContext } from "./dcmParser";
import { Fixed_characteristic_map_expContext } from "./dcmParser";
import { Fixed_characteristic_map_sub_expContext } from "./dcmParser";
import { Group_characteristic_line_expContext } from "./dcmParser";
import { Group_characteristic_line_sub_expContext } from "./dcmParser";
import { Sstx_expContext } from "./dcmParser";
import { Group_characteristic_map_expContext } from "./dcmParser";
import { Group_characteristic_map_sub_expContext } from "./dcmParser";
import { Ssty_expContext } from "./dcmParser";
import { Distribution_expContext } from "./dcmParser";
import { Distribution_sub_expContext } from "./dcmParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `dcmParser`.
 */
export interface dcmParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `dcmParser.string_exp`.
	 * @param ctx the parse tree
	 */
	enterString_exp?: (ctx: String_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.string_exp`.
	 * @param ctx the parse tree
	 */
	exitString_exp?: (ctx: String_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.dcm_file`.
	 * @param ctx the parse tree
	 */
	enterDcm_file?: (ctx: Dcm_fileContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.dcm_file`.
	 * @param ctx the parse tree
	 */
	exitDcm_file?: (ctx: Dcm_fileContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.nl`.
	 * @param ctx the parse tree
	 */
	enterNl?: (ctx: NlContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.nl`.
	 * @param ctx the parse tree
	 */
	exitNl?: (ctx: NlContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.comment_exp`.
	 * @param ctx the parse tree
	 */
	enterComment_exp?: (ctx: Comment_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.comment_exp`.
	 * @param ctx the parse tree
	 */
	exitComment_exp?: (ctx: Comment_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.konservierung_format_exp`.
	 * @param ctx the parse tree
	 */
	enterKonservierung_format_exp?: (ctx: Konservierung_format_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.konservierung_format_exp`.
	 * @param ctx the parse tree
	 */
	exitKonservierung_format_exp?: (ctx: Konservierung_format_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.dcm_file_sub_exp`.
	 * @param ctx the parse tree
	 */
	enterDcm_file_sub_exp?: (ctx: Dcm_file_sub_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.dcm_file_sub_exp`.
	 * @param ctx the parse tree
	 */
	exitDcm_file_sub_exp?: (ctx: Dcm_file_sub_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.end_exp`.
	 * @param ctx the parse tree
	 */
	enterEnd_exp?: (ctx: End_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.end_exp`.
	 * @param ctx the parse tree
	 */
	exitEnd_exp?: (ctx: End_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.functions_exp`.
	 * @param ctx the parse tree
	 */
	enterFunctions_exp?: (ctx: Functions_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.functions_exp`.
	 * @param ctx the parse tree
	 */
	exitFunctions_exp?: (ctx: Functions_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.functions_sub_exp`.
	 * @param ctx the parse tree
	 */
	enterFunctions_sub_exp?: (ctx: Functions_sub_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.functions_sub_exp`.
	 * @param ctx the parse tree
	 */
	exitFunctions_sub_exp?: (ctx: Functions_sub_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.variant_coding_exp`.
	 * @param ctx the parse tree
	 */
	enterVariant_coding_exp?: (ctx: Variant_coding_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.variant_coding_exp`.
	 * @param ctx the parse tree
	 */
	exitVariant_coding_exp?: (ctx: Variant_coding_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.variant_coding_sub_exp`.
	 * @param ctx the parse tree
	 */
	enterVariant_coding_sub_exp?: (ctx: Variant_coding_sub_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.variant_coding_sub_exp`.
	 * @param ctx the parse tree
	 */
	exitVariant_coding_sub_exp?: (ctx: Variant_coding_sub_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.module_header_exp`.
	 * @param ctx the parse tree
	 */
	enterModule_header_exp?: (ctx: Module_header_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.module_header_exp`.
	 * @param ctx the parse tree
	 */
	exitModule_header_exp?: (ctx: Module_header_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.module_header_short_exp`.
	 * @param ctx the parse tree
	 */
	enterModule_header_short_exp?: (ctx: Module_header_short_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.module_header_short_exp`.
	 * @param ctx the parse tree
	 */
	exitModule_header_short_exp?: (ctx: Module_header_short_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.parameter_name_exp`.
	 * @param ctx the parse tree
	 */
	enterParameter_name_exp?: (ctx: Parameter_name_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.parameter_name_exp`.
	 * @param ctx the parse tree
	 */
	exitParameter_name_exp?: (ctx: Parameter_name_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.parameter_exp`.
	 * @param ctx the parse tree
	 */
	enterParameter_exp?: (ctx: Parameter_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.parameter_exp`.
	 * @param ctx the parse tree
	 */
	exitParameter_exp?: (ctx: Parameter_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.parameter_sub_exp`.
	 * @param ctx the parse tree
	 */
	enterParameter_sub_exp?: (ctx: Parameter_sub_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.parameter_sub_exp`.
	 * @param ctx the parse tree
	 */
	exitParameter_sub_exp?: (ctx: Parameter_sub_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.longname_exp`.
	 * @param ctx the parse tree
	 */
	enterLongname_exp?: (ctx: Longname_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.longname_exp`.
	 * @param ctx the parse tree
	 */
	exitLongname_exp?: (ctx: Longname_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.displayname_exp`.
	 * @param ctx the parse tree
	 */
	enterDisplayname_exp?: (ctx: Displayname_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.displayname_exp`.
	 * @param ctx the parse tree
	 */
	exitDisplayname_exp?: (ctx: Displayname_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.var_exp`.
	 * @param ctx the parse tree
	 */
	enterVar_exp?: (ctx: Var_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.var_exp`.
	 * @param ctx the parse tree
	 */
	exitVar_exp?: (ctx: Var_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.name_value_pair`.
	 * @param ctx the parse tree
	 */
	enterName_value_pair?: (ctx: Name_value_pairContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.name_value_pair`.
	 * @param ctx the parse tree
	 */
	exitName_value_pair?: (ctx: Name_value_pairContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.function_exp`.
	 * @param ctx the parse tree
	 */
	enterFunction_exp?: (ctx: Function_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.function_exp`.
	 * @param ctx the parse tree
	 */
	exitFunction_exp?: (ctx: Function_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.unit_w_exp`.
	 * @param ctx the parse tree
	 */
	enterUnit_w_exp?: (ctx: Unit_w_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.unit_w_exp`.
	 * @param ctx the parse tree
	 */
	exitUnit_w_exp?: (ctx: Unit_w_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.unit_x_exp`.
	 * @param ctx the parse tree
	 */
	enterUnit_x_exp?: (ctx: Unit_x_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.unit_x_exp`.
	 * @param ctx the parse tree
	 */
	exitUnit_x_exp?: (ctx: Unit_x_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.unit_y_exp`.
	 * @param ctx the parse tree
	 */
	enterUnit_y_exp?: (ctx: Unit_y_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.unit_y_exp`.
	 * @param ctx the parse tree
	 */
	exitUnit_y_exp?: (ctx: Unit_y_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.value_exp`.
	 * @param ctx the parse tree
	 */
	enterValue_exp?: (ctx: Value_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.value_exp`.
	 * @param ctx the parse tree
	 */
	exitValue_exp?: (ctx: Value_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.number_value_exp`.
	 * @param ctx the parse tree
	 */
	enterNumber_value_exp?: (ctx: Number_value_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.number_value_exp`.
	 * @param ctx the parse tree
	 */
	exitNumber_value_exp?: (ctx: Number_value_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.string_value_exp`.
	 * @param ctx the parse tree
	 */
	enterString_value_exp?: (ctx: String_value_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.string_value_exp`.
	 * @param ctx the parse tree
	 */
	exitString_value_exp?: (ctx: String_value_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.size_exp`.
	 * @param ctx the parse tree
	 */
	enterSize_exp?: (ctx: Size_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.size_exp`.
	 * @param ctx the parse tree
	 */
	exitSize_exp?: (ctx: Size_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.array_exp`.
	 * @param ctx the parse tree
	 */
	enterArray_exp?: (ctx: Array_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.array_exp`.
	 * @param ctx the parse tree
	 */
	exitArray_exp?: (ctx: Array_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.array_sub_exp`.
	 * @param ctx the parse tree
	 */
	enterArray_sub_exp?: (ctx: Array_sub_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.array_sub_exp`.
	 * @param ctx the parse tree
	 */
	exitArray_sub_exp?: (ctx: Array_sub_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.value_list_exp`.
	 * @param ctx the parse tree
	 */
	enterValue_list_exp?: (ctx: Value_list_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.value_list_exp`.
	 * @param ctx the parse tree
	 */
	exitValue_list_exp?: (ctx: Value_list_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.number_value_list_exp`.
	 * @param ctx the parse tree
	 */
	enterNumber_value_list_exp?: (ctx: Number_value_list_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.number_value_list_exp`.
	 * @param ctx the parse tree
	 */
	exitNumber_value_list_exp?: (ctx: Number_value_list_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.string_value_list_exp`.
	 * @param ctx the parse tree
	 */
	enterString_value_list_exp?: (ctx: String_value_list_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.string_value_list_exp`.
	 * @param ctx the parse tree
	 */
	exitString_value_list_exp?: (ctx: String_value_list_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.matrix_exp`.
	 * @param ctx the parse tree
	 */
	enterMatrix_exp?: (ctx: Matrix_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.matrix_exp`.
	 * @param ctx the parse tree
	 */
	exitMatrix_exp?: (ctx: Matrix_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.matrix_sub_exp`.
	 * @param ctx the parse tree
	 */
	enterMatrix_sub_exp?: (ctx: Matrix_sub_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.matrix_sub_exp`.
	 * @param ctx the parse tree
	 */
	exitMatrix_sub_exp?: (ctx: Matrix_sub_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.characteristic_line_exp`.
	 * @param ctx the parse tree
	 */
	enterCharacteristic_line_exp?: (ctx: Characteristic_line_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.characteristic_line_exp`.
	 * @param ctx the parse tree
	 */
	exitCharacteristic_line_exp?: (ctx: Characteristic_line_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.characteristic_line_sub_exp`.
	 * @param ctx the parse tree
	 */
	enterCharacteristic_line_sub_exp?: (ctx: Characteristic_line_sub_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.characteristic_line_sub_exp`.
	 * @param ctx the parse tree
	 */
	exitCharacteristic_line_sub_exp?: (ctx: Characteristic_line_sub_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.st_x_exp`.
	 * @param ctx the parse tree
	 */
	enterSt_x_exp?: (ctx: St_x_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.st_x_exp`.
	 * @param ctx the parse tree
	 */
	exitSt_x_exp?: (ctx: St_x_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.st_y_exp`.
	 * @param ctx the parse tree
	 */
	enterSt_y_exp?: (ctx: St_y_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.st_y_exp`.
	 * @param ctx the parse tree
	 */
	exitSt_y_exp?: (ctx: St_y_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.characteristic_map_exp`.
	 * @param ctx the parse tree
	 */
	enterCharacteristic_map_exp?: (ctx: Characteristic_map_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.characteristic_map_exp`.
	 * @param ctx the parse tree
	 */
	exitCharacteristic_map_exp?: (ctx: Characteristic_map_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.characteristic_map_sub_exp`.
	 * @param ctx the parse tree
	 */
	enterCharacteristic_map_sub_exp?: (ctx: Characteristic_map_sub_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.characteristic_map_sub_exp`.
	 * @param ctx the parse tree
	 */
	exitCharacteristic_map_sub_exp?: (ctx: Characteristic_map_sub_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.fixed_characteristic_line_exp`.
	 * @param ctx the parse tree
	 */
	enterFixed_characteristic_line_exp?: (ctx: Fixed_characteristic_line_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.fixed_characteristic_line_exp`.
	 * @param ctx the parse tree
	 */
	exitFixed_characteristic_line_exp?: (ctx: Fixed_characteristic_line_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.fixed_characteristic_line_sub_exp`.
	 * @param ctx the parse tree
	 */
	enterFixed_characteristic_line_sub_exp?: (ctx: Fixed_characteristic_line_sub_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.fixed_characteristic_line_sub_exp`.
	 * @param ctx the parse tree
	 */
	exitFixed_characteristic_line_sub_exp?: (ctx: Fixed_characteristic_line_sub_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.fixed_characteristic_map_exp`.
	 * @param ctx the parse tree
	 */
	enterFixed_characteristic_map_exp?: (ctx: Fixed_characteristic_map_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.fixed_characteristic_map_exp`.
	 * @param ctx the parse tree
	 */
	exitFixed_characteristic_map_exp?: (ctx: Fixed_characteristic_map_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.fixed_characteristic_map_sub_exp`.
	 * @param ctx the parse tree
	 */
	enterFixed_characteristic_map_sub_exp?: (ctx: Fixed_characteristic_map_sub_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.fixed_characteristic_map_sub_exp`.
	 * @param ctx the parse tree
	 */
	exitFixed_characteristic_map_sub_exp?: (ctx: Fixed_characteristic_map_sub_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.group_characteristic_line_exp`.
	 * @param ctx the parse tree
	 */
	enterGroup_characteristic_line_exp?: (ctx: Group_characteristic_line_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.group_characteristic_line_exp`.
	 * @param ctx the parse tree
	 */
	exitGroup_characteristic_line_exp?: (ctx: Group_characteristic_line_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.group_characteristic_line_sub_exp`.
	 * @param ctx the parse tree
	 */
	enterGroup_characteristic_line_sub_exp?: (ctx: Group_characteristic_line_sub_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.group_characteristic_line_sub_exp`.
	 * @param ctx the parse tree
	 */
	exitGroup_characteristic_line_sub_exp?: (ctx: Group_characteristic_line_sub_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.sstx_exp`.
	 * @param ctx the parse tree
	 */
	enterSstx_exp?: (ctx: Sstx_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.sstx_exp`.
	 * @param ctx the parse tree
	 */
	exitSstx_exp?: (ctx: Sstx_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.group_characteristic_map_exp`.
	 * @param ctx the parse tree
	 */
	enterGroup_characteristic_map_exp?: (ctx: Group_characteristic_map_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.group_characteristic_map_exp`.
	 * @param ctx the parse tree
	 */
	exitGroup_characteristic_map_exp?: (ctx: Group_characteristic_map_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.group_characteristic_map_sub_exp`.
	 * @param ctx the parse tree
	 */
	enterGroup_characteristic_map_sub_exp?: (ctx: Group_characteristic_map_sub_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.group_characteristic_map_sub_exp`.
	 * @param ctx the parse tree
	 */
	exitGroup_characteristic_map_sub_exp?: (ctx: Group_characteristic_map_sub_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.ssty_exp`.
	 * @param ctx the parse tree
	 */
	enterSsty_exp?: (ctx: Ssty_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.ssty_exp`.
	 * @param ctx the parse tree
	 */
	exitSsty_exp?: (ctx: Ssty_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.distribution_exp`.
	 * @param ctx the parse tree
	 */
	enterDistribution_exp?: (ctx: Distribution_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.distribution_exp`.
	 * @param ctx the parse tree
	 */
	exitDistribution_exp?: (ctx: Distribution_expContext) => void;

	/**
	 * Enter a parse tree produced by `dcmParser.distribution_sub_exp`.
	 * @param ctx the parse tree
	 */
	enterDistribution_sub_exp?: (ctx: Distribution_sub_expContext) => void;
	/**
	 * Exit a parse tree produced by `dcmParser.distribution_sub_exp`.
	 * @param ctx the parse tree
	 */
	exitDistribution_sub_exp?: (ctx: Distribution_sub_expContext) => void;
}

