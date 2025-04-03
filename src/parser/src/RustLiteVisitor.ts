// Generated from src/RustLite.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgContext } from "./RustLiteParser.js";
import { ExprContext } from "./RustLiteParser.js";
import { ArithExprContext } from "./RustLiteParser.js";
import { TermContext } from "./RustLiteParser.js";
import { FactorContext } from "./RustLiteParser.js";
import { PrimaryContext } from "./RustLiteParser.js";
import { LogicExprContext } from "./RustLiteParser.js";
import { StructExprContext } from "./RustLiteParser.js";
import { StmtContext } from "./RustLiteParser.js";
import { SequenceContext } from "./RustLiteParser.js";
import { BlockContext } from "./RustLiteParser.js";
import { ExprStmtContext } from "./RustLiteParser.js";
import { DeclareStmtContext } from "./RustLiteParser.js";
import { CondStmtContext } from "./RustLiteParser.js";
import { LoopStmtContext } from "./RustLiteParser.js";
import { WhileStmtContext } from "./RustLiteParser.js";
import { IterableContext } from "./RustLiteParser.js";
import { ForStmtContext } from "./RustLiteParser.js";
import { ParamContext } from "./RustLiteParser.js";
import { ParamListContext } from "./RustLiteParser.js";
import { ReturnTypesContext } from "./RustLiteParser.js";
import { ReturnTypeContext } from "./RustLiteParser.js";
import { ReturnStmtContext } from "./RustLiteParser.js";
import { FnDeclareStmtContext } from "./RustLiteParser.js";
import { ArgListContext } from "./RustLiteParser.js";
import { FnCallContext } from "./RustLiteParser.js";
import { StructDeclareContext } from "./RustLiteParser.js";
import { StructDeclareFieldListContext } from "./RustLiteParser.js";
import { StructDeclareFieldContext } from "./RustLiteParser.js";
import { StructInitContext } from "./RustLiteParser.js";
import { StructInitFieldListContext } from "./RustLiteParser.js";
import { StructInitFieldContext } from "./RustLiteParser.js";
import { StructFieldAccessContext } from "./RustLiteParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RustLiteParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class RustLiteVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `RustLiteParser.prog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProg?: (ctx: ProgContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr?: (ctx: ExprContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.arithExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithExpr?: (ctx: ArithExprContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.term`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTerm?: (ctx: TermContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.factor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFactor?: (ctx: FactorContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.primary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimary?: (ctx: PrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.logicExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicExpr?: (ctx: LogicExprContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.structExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructExpr?: (ctx: StructExprContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt?: (ctx: StmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.sequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSequence?: (ctx: SequenceContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.exprStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprStmt?: (ctx: ExprStmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.declareStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclareStmt?: (ctx: DeclareStmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.condStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCondStmt?: (ctx: CondStmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.loopStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoopStmt?: (ctx: LoopStmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.whileStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileStmt?: (ctx: WhileStmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.iterable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIterable?: (ctx: IterableContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.forStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForStmt?: (ctx: ForStmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.param`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParam?: (ctx: ParamContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.paramList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParamList?: (ctx: ParamListContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.returnTypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnTypes?: (ctx: ReturnTypesContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.returnType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnType?: (ctx: ReturnTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.returnStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStmt?: (ctx: ReturnStmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.fnDeclareStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFnDeclareStmt?: (ctx: FnDeclareStmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.argList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgList?: (ctx: ArgListContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.fnCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFnCall?: (ctx: FnCallContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.structDeclare`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructDeclare?: (ctx: StructDeclareContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.structDeclareFieldList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructDeclareFieldList?: (ctx: StructDeclareFieldListContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.structDeclareField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructDeclareField?: (ctx: StructDeclareFieldContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.structInit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructInit?: (ctx: StructInitContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.structInitFieldList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructInitFieldList?: (ctx: StructInitFieldListContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.structInitField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructInitField?: (ctx: StructInitFieldContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.structFieldAccess`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructFieldAccess?: (ctx: StructFieldAccessContext) => Result;
}

