/**
 * Shared DCM Standard Vocabulary and Language Attributes
 */

export const blockStartKeywords = new Set([
    'FUNKTIONEN', 'VARIANTENKODIERUNG', 'MODULKOPF', 'FESTWERT',
    'FESTWERTEBLOCK', 'KENNLINIE', 'KENNFELD', 'FESTKENNLINIE',
    'FESTKENNFELD', 'GRUPPENKENNLINIE', 'GRUPPENKENNFELD', 'STUETZSTELLENVERTEILUNG'
]);

export const strictStringKeywords = new Set([
    'LANGNAME', 'EINHEIT_X', 'EINHEIT_Y', 'EINHEIT_W'
]);

export const validDcmKeywords = new Set([
    // Core Structural Blocks
    'FESTWERT', 'FESTWERTEBLOCK', 'KENNLINIE', 'KENNFELD',
    'FESTKENNLINIE', 'FESTKENNFELD', 'GRUPPENKENNLINIE', 'GRUPPENKENNFELD',
    'STUETZSTELLENVERTEILUNG', 'FUNKTIONEN', 'VARIANTENKODIERUNG', 'TEXTBLOCK', 'TEXTSTRUCT',

    // Structural Controls & Data
    'END', 'FKT', 'ST/X', 'ST/Y', 'ST/Z', 'WERT', 'TEXT', 'VAR', 'ST_TXT', 'ST_TXT/X', 'ST_TXT/Y',
    'KRITERIUM', 'MODULKOPF', 'KONSERVIERUNG_FORMAT', 'STUETZSTELLENANZAHL',

    // Attributes & Metadata
    'LANGNAME', 'FUNKTION', 'DISPLAYNAME', 'EINHEIT_X', 'EINHEIT_Y', 'EINHEIT_W',
    'ST_LANGNAME', 'ST_DISPLAYNAME', 'WERT_LANGNAME', 'BASIS_EINHEIT'
]);

export const complexMapKeywords = new Set([
    'KENNFELD', 'FESTKENNFELD', 'GRUPPENKENNFELD'
]);

export const characteristicCurveKeywords = new Set([
    'KENNLINIE', 'FESTKENNLINIE', 'GRUPPENKENNLINIE'
]);

export const hoverDocumentation: { [key: string]: string } = {
    // =========================================================================
    // PRIMARY DATA TYPE BLOCKS (PARAMETER DEFINITIONS)
    // =========================================================================
    'FESTWERT': `**FESTWERT** (Scalar Constant)
---
Defines a single, standalone scalar parameter constant value (e.g., threshold limits, calibration offsets, or configuration flags). 

**Structural Requirements:**
* Requires exactly one \`WERT\` assignment line (numerical/boolean) OR one \`TEXT\` assignment line.
* Must be closed with an \`END\` statement.

**Example:**
\`\`\`text
FESTWERT AIR_MASS_THR_C
    LANGNAME "Air mass threshold constant"
    EINHEIT_W "kg/h"
    WERT 450.0
END
\`\`\``,

    'FESTWERTEBLOCK': `**FESTWERTEBLOCK** (Value Block / Matrix)
---
Defines a multi-dimensional matrix or array of values without explicit physical axes assigned within the block structure. Typically used for raw value arrays, lookup tables with implicit indexing, or multi-dimensional parameter groups.

**Structural Requirements:**
* Requires an array layout definition identifier (e.g., \`array\`, \`matrix\`) followed by the size.
* Expects matching value counts on the \`WERT\` line.
* Must be closed with an \`END\` statement.

**Example:**
\`\`\`text
FESTWERTEBLOCK TEMP_GRADIENTS_M
    LANGNAME "Temperature gradient block"
    EINHEIT_W "° C"
    WERT 0.75 -0.25 0.5 1.5
END
\`\`\``,

    'KENNLINIE': `**KENNLINIE** (Characteristic Curve)
---
Defines a 1D calibration lookup curve. It pairs exactly one input reference axis with a corresponding vector of output values.

**Structural Requirements:**
* Requires an input axis declaration via \`ST/X\` containing individual breakpoints.
* Requires a matching output value assignment line via \`WERT\`.
* The number of elements in \`ST/X\` must strictly equal the number of elements in \`WERT\`.
* Must be closed with an \`END\` statement.

**Example:**
\`\`\`text
KENNLINIE ENG_FRIC_CURVE
    LANGNAME "Engine friction losses over speed"
    EINHEIT_X "rpm"
    EINHEIT_W "Nm"
    ST/X 800 1200 2000 3000
    WERT 12.5 14.2 18.1 22.4
END
\`\`\``,

    'KENNFELD': `**KENNFELD** (Characteristic Map)
---
Defines a standard 2D calibration lookup matrix grid mapped across an X-axis and a Y-axis. Used for bivariate data surfaces (e.g., ignition timing maps or volumetric efficiency grids).

**Structural Requirements:**
* Requires horizontal input breakpoints via \`ST/X\`.
* Requires vertical input breakpoints via \`ST/Y\`.
* Requires an output matrix payload distributed on sequential \`WERT\` lines matching the matrix product size: $\\text{columns} \\times \\text{rows}$.
* Must be closed with an \`END\` statement.`,

    'FESTKENNLINIE': `**FESTKENNLINIE** (Fixed Curve)
---
Defines a 1D characteristic curve where the lookup values and axis points are completely static or fixed within the control module calibration software. They are read-only and cannot be altered by calibration engineers during post-processing phases.

**Structural Requirements:**
* Structurally identical to \`KENNLINIE\`, utilizing an embedded \`ST/X\` breakpoint line and \`WERT\` line.`,

    'FESTKENNFELD': `**FESTKENNFELD** (Fixed Map)
---
Defines a 2D calibration surface map containing fixed, unalterable data structures and breakpoint arrays across X and Y values. Used for baseline engine protection safety maps or physical constants surfaces.

**Structural Requirements:**
* Structurally identical to \`KENNFELD\`, using embedded \`ST/X\`, \`ST/Y\`, and matching \`WERT\` matrix payloads.`,

    'GRUPPENKENNLINIE': `**GRUPPENKENNLINIE** (Group Curve)
---
Defines a shared group characteristic curve. Unlike a standard \`KENNLINIE\`, a group curve does *not* contain an embedded \`ST/X\` breakpoint array. Instead, it references an external, reusable axis definition block (\`STUETZSTELLENVERTEILUNG\`).

**Key Benefits:**
* Saves ECU memory by allowing multiple curves to share a single reference axis profile.
* If the shared axis changes, all dependent \`GRUPPENKENNLINIE\` lookups dynamically follow.`,

    'GRUPPENKENNFELD': `**GRUPPENKENNFELD** (Group Map)
---
Defines a shared group 2D calibration lookup map designed to leverage shared system axes. It omits internal \`ST/X\` and \`ST/Y\` entries, referencing external \`STUETZSTELLENVERTEILUNG\` axis profiles instead.

**Structural Requirements:**
* Requires an external axis association configuration mapping.
* Payload is populated via \`WERT\` matrices matching the external dimensions.`,

    'STUETZSTELLENVERTEILUNG': `**STUETZSTELLENVERTEILUNG** (Independent Axis Profile)
---
Defines a standalone, reusable reference axis distribution containing the specific breakpoint values utilized by group curves (\`GRUPPENKENNLINIE\`) or group maps (\`GRUPPENKENNFELD\`).

**Structural Requirements:**
* Requires an explicit point validation statement using \`STUETZSTELLENANZAHL\`.
* Contains the absolute scale breakpoints inside an \`ST/X\` array.
* Must be explicitly referenced by name in corresponding Group structures.`,

    // =========================================================================
    // METADATA, RECOGNITION, AND MANAGEMENT BLOCKS
    // =========================================================================
    'FUNKTIONEN': `**FUNKTIONEN** (Functions Block)
---
Initializes a global registry tracking function module mappings, software component names, or engineering group ownership hierarchies inside the calibration matrix file.`,

    'VARIANTENKODIERUNG': `**VARIANTENKODIERUNG** (Variant Coding)
---
Defines conditional compilation scopes, optional diagnostic parameters, or branching control structures for multi-configuration application software packages.`,

    'TEXTBLOCK': `**TEXTBLOCK** (String Block)
---
Defines an array allocation block storing textual ASCII string metadata, part numbers, compilation hashes, or non-numerical label logs. Payload is encapsulated via \`TEXT\` assignments.`,

    'TEXTSTRUCT': `**TEXTSTRUCT** (Structured Text Property)
---
Defines complex structured, multi-line string characteristics or diagnostic system messaging layouts. Used for tracking structured notes or diagnostic text mappings.`,

    'MODULKOPF': `**MODULKOPF** (Module Header File Metadata)
---
Defines global tracking infrastructure data, version metadata, code origins, or calibration generation comments positioned at the absolute top of the calibration document file.`,

    // =========================================================================
    // SYNTAX TERMINATORS AND SCOPE IDENTIFIERS
    // =========================================================================
    'END': `**END** (Scope Terminator)
---
Closes the structural configuration scope opened by a parameter definition block header.

**Behavior:**
* Resets the active indentation workspace track back down one level.
* Validated by the parsing grammar to ensure it correctly complements its opening keyword (e.g., closing a \`FESTWERTEBLOCK\` cluster).`,

    'FKT': `**FKT** (Function Mapping Identifier)
---
Maps a specific parameter block to its corresponding engineering functional owner module or subsystem block inside the engine control unit software architecture.

**Syntax:**
\`FKT [Function_Identifier] "[Subsystem_Version]" "[Optional_Description]"\`

**Example:**
\`\`\`text
FKT BOOST_PRESSURE_CONTROL "v2.1.0" "Turbocharger actuation loop"
\`\`\``,

    // =========================================================================
    // AXIS VECTOR TARGETS & BREAKPOINTS
    // =========================================================================
    'ST/X': `**ST/X** (X-Axis Breakpoints)
---
Declares the numerical calibration input breakpoint values across the horizontal X-axis vector array line.

**Context:**
* Must contain monotonically increasing values for deterministic lookup results.
* The element count must correspond to the sizes declared in \`STUETZSTELLENANZAHL\` or block structural dimensions.`,

    'ST/Y': `**ST/Y** (Y-Axis Breakpoints)
---
Declares the vertical input coordinate breakpoints or scalar coordinate rows along the vertical Y-axis profile grid layout (used in 2D maps).`,

    'ST/Z': `**ST/Z** (Z-Axis Breakpoints)
---
Declares breakpoint properties, dimensional splits, or coordinate layers matching a complex multi-layered 3D calibration matrix mapping sequence.`,

    'ST_TXT': `**ST_TXT** (Text Axis Breakpoint)
---
Declares alphanumeric, quote-enclosed text label descriptors or state identifiers assigned onto a single-dimension calibration axis index (e.g., enumerations like \`"OFF"\`, \`"STAGE_1"\`, \`"STAGE_2"\`).`,

    'ST_TXT/X': `**ST_TXT/X** (Text Breakpoints X)
---
Declares alphanumeric text literal label descriptors assigned as coordinates along the horizontal X-axis profile grid line.`,

    'ST_TXT/Y': `**ST_TXT/Y** (Text Breakpoints Y)
---
Declares alphanumeric text literal label descriptors assigned as coordinates along the vertical Y-axis profile grid line.`,

    // =========================================================================
    // DATA ASSIGNMENTS & DATA VALUES
    // =========================================================================
    'WERT': `**WERT** (Numerical Value Assignment)
---
Assigns unquoted raw numerical integers, floating-point literals, or boolean state flags directly into an active curve, map, block, or scalar constant framework.

**Formatting Config Dependency:**
* Tokens on this line are standard-spaced based on user preferences (\`dcm.formatter.inlineSpaceCount\`).`,

    'TEXT': `**TEXT** (String Value Assignment)
---
Assigns a quote-enclosed string literal text sequence into parameter data structures (common inside \`TEXTBLOCK\`, \`TEXTSTRUCT\`, or textual \`FESTWERT\` configurations).`,

    'VAR': `**VAR** (Variant Entry)
---
Specifies active sub-variant target entries, evaluation branches, or state assignments within a complex variant control architecture block.`,

    'KRITERIUM': `**KRITERIUM** (Variant Selector Criterion)
---
Defines a specific condition, assessment attribute rule, or evaluation hardware flag utilized by post-processors when resolving multi-variant runtime configuration execution layers.`,

    // =========================================================================
    // PROPERTY ATTRIBUTES & CONFIGURATION STRINGS
    // =========================================================================
    'KONSERVIERUNG_FORMAT': `**KONSERVIERUNG_FORMAT** (Preservation Format)
---
Specifies the data syntax standard version compliance tag. Used by ASAM automation post-processors and parser tools to determine interpretation profiles (e.g., version \`2.0\`).`,

    'STUETZSTELLENANZAHL': `**STUETZSTELLENANZAHL** (Axis Point Quantities)
---
Explicitly declares the total count of discrete coordinate nodes or input breakpoint values expected across an active breakpoint vector profile line (\`ST/X\` or \`ST/Y\`). Used for pre-allocation arrays and bounds checking.`,

    'LANGNAME': `**LANGNAME** (Long Name/Description)
---
Provides an descriptive long text explanation enclosed in quotation marks detailing the engineering scope, design intent, or physical behavior of the active parameter parameter block.`,

    'FUNKTION': `**FUNKTION** (Functional Area Class)
---
Tags a structural entry to a high-level vehicle software system functional grouping designation (e.g., \`"EXHAUST_EMISSIONS"\`).`,

    'DISPLAYNAME': `**DISPLAYNAME** (HMI Screen Label)
---
Provides an optimized short string literal utilized when rendering the active parameter inside engineering calibration tuning tools, GUI grids, or instrumentation dashboards.`,

    // =========================================================================
    // ENGINEERING UNITS & METRIC SCALES
    // =========================================================================
    'EINHEIT_X': `**EINHEIT_X** (X-Axis Unit)
---
Defines the physical engineering unit assigned onto X-Axis coordinates.

**Common Values:**
* \`"rpm"\` (Engine Speed)
* \`"degC"\` / \`"° C"\` (Temperature)
* \`"Hz"\` (Frequency)`,

    'EINHEIT_Y': `**EINHEIT_Y** (Y-Axis Unit)
---
Defines the physical engineering unit assigned onto Y-Axis coordinates.

**Common Values:**
* \`"mg/st"\` (Mass injection per stroke)
* \`"bar"\` (Pressure)
* \`"mm"\` (Displacement)`,

    'EINHEIT_W': `**EINHEIT_W** (Value Output Unit)
---
Defines the physical engineering unit assigned onto output values, curve results, map matrix points, or scalar totals.

**Common Values:**
* \`"Nm"\` (Torque)
* \`"%"\` (Duty cycle Ratio)
* \`"lambda"\` (Air-fuel ratio)`,

    'ST_LANGNAME': `**ST_LANGNAME** (Axis Long Description)
---
Provides an extended descriptive engineering explanation text specifically detailing an axis breakpoint element structure outline directly.`,

    'ST_DISPLAYNAME': `**ST_DISPLAYNAME** (Axis HMI Short Label)
---
Provides a compact layout system visualization label associated with shared axis profiles inside graphical calibration visualization utilities.`,

    'WERT_LANGNAME': `**WERT_LANGNAME** (Value Long Description)
---
Provides targeted description comments or specific flag definitions for individual data entries inside multi-level structured metadata parameter matrices.`,

    'BASIS_EINHEIT': `**BASIS_EINHEIT** (Base Fundamental Unit)
---
Declares the baseline fundamental physical unit representation sequence utilized before scaling calculations, normalization conversion formulas, or quantization scaling translation properties are executed.`

};