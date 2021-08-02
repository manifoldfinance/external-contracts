# `uniswapV2 module`



SourceUnit #2038 -> /contracts/UniswapV2Router02.sol
|   PragmaDirective #1
|   ImportDirective #2
|   ImportDirective #3
|   ImportDirective #4
|   ImportDirective #5
|   ImportDirective #6
|   ImportDirective #7
|   ImportDirective #8
|   ContractDefinition #2037 -> contract UniswapV2Router02
|   |   InheritanceSpecifier #10
|   |   |   UserDefinedTypeName #9
|   |   UsingForDirective #13
|   |   |   UserDefinedTypeName #11
|   |   |   ElementaryTypeName #12
|   |   VariableDeclaration #16 -> address public factory [getter: factory(), selector: c45a0155]
|   |   |   ElementaryTypeName #14
|   |   |   OverrideSpecifier #15
|   |   VariableDeclaration #19 -> address public WETH [getter: WETH(), selector: ad5c4648]
|   |   |   ElementaryTypeName #17
|   |   |   OverrideSpecifier #18
|   |   ModifierDefinition #33
|   |   |   ParameterList #22
|   |   |   |   VariableDeclaration #21 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #20
|   |   |   Block #32
|   |   |   |   ExpressionStatement #30
|   |   |   |   |   FunctionCall #29
|   |   |   |   |   |   Identifier #23
|   |   |   |   |   |   BinaryOperation #27
|   |   |   |   |   |   |   Identifier #24
|   |   |   |   |   |   |   MemberAccess #26
|   |   |   |   |   |   |   |   Identifier #25
|   |   |   |   |   |   Literal #28
|   |   |   |   PlaceholderStatement #31
|   |   FunctionDefinition #49 -> constructor
|   |   |   ParameterList #38
|   |   |   |   VariableDeclaration #35 -> address _factory
|   |   |   |   |   ElementaryTypeName #34
|   |   |   |   VariableDeclaration #37 -> address _WETH
|   |   |   |   |   ElementaryTypeName #36
|   |   |   ParameterList #39
|   |   |   Block #48
|   |   |   |   ExpressionStatement #43
|   |   |   |   |   Assignment #42
|   |   |   |   |   |   Identifier #40
|   |   |   |   |   |   Identifier #41
|   |   |   |   ExpressionStatement #47
|   |   |   |   |   Assignment #46
|   |   |   |   |   |   Identifier #44
|   |   |   |   |   |   Identifier #45
|   |   FunctionDefinition #60 -> receive
|   |   |   ParameterList #50
|   |   |   ParameterList #51
|   |   |   Block #59
|   |   |   |   ExpressionStatement #58
|   |   |   |   |   FunctionCall #57
|   |   |   |   |   |   Identifier #52
|   |   |   |   |   |   BinaryOperation #56
|   |   |   |   |   |   |   MemberAccess #54
|   |   |   |   |   |   |   |   Identifier #53
|   |   |   |   |   |   |   Identifier #55
|   |   FunctionDefinition #191 -> _addLiquidity(address,address,uint256,uint256,uint256,uint256) [selector: 6d7746bc]
|   |   |   ParameterList #73
|   |   |   |   VariableDeclaration #62 -> address tokenA
|   |   |   |   |   ElementaryTypeName #61
|   |   |   |   VariableDeclaration #64 -> address tokenB
|   |   |   |   |   ElementaryTypeName #63
|   |   |   |   VariableDeclaration #66 -> uint256 amountADesired
|   |   |   |   |   ElementaryTypeName #65
|   |   |   |   VariableDeclaration #68 -> uint256 amountBDesired
|   |   |   |   |   ElementaryTypeName #67
|   |   |   |   VariableDeclaration #70 -> uint256 amountAMin
|   |   |   |   |   ElementaryTypeName #69
|   |   |   |   VariableDeclaration #72 -> uint256 amountBMin
|   |   |   |   |   ElementaryTypeName #71
|   |   |   ParameterList #78
|   |   |   |   VariableDeclaration #75 -> uint256 amountA
|   |   |   |   |   ElementaryTypeName #74
|   |   |   |   VariableDeclaration #77 -> uint256 amountB
|   |   |   |   |   ElementaryTypeName #76
|   |   |   Block #190
|   |   |   |   IfStatement #100
|   |   |   |   |   BinaryOperation #90
|   |   |   |   |   |   FunctionCall #85
|   |   |   |   |   |   |   MemberAccess #82
|   |   |   |   |   |   |   |   FunctionCall #81
|   |   |   |   |   |   |   |   |   Identifier #79
|   |   |   |   |   |   |   |   |   Identifier #80
|   |   |   |   |   |   |   Identifier #83
|   |   |   |   |   |   |   Identifier #84
|   |   |   |   |   |   FunctionCall #89
|   |   |   |   |   |   |   ElementaryTypeNameExpression #87
|   |   |   |   |   |   |   |   ElementaryTypeName #86
|   |   |   |   |   |   |   Literal #88
|   |   |   |   |   Block #99
|   |   |   |   |   |   ExpressionStatement #98
|   |   |   |   |   |   |   FunctionCall #97
|   |   |   |   |   |   |   |   MemberAccess #94
|   |   |   |   |   |   |   |   |   FunctionCall #93
|   |   |   |   |   |   |   |   |   |   Identifier #91
|   |   |   |   |   |   |   |   |   |   Identifier #92
|   |   |   |   |   |   |   |   Identifier #95
|   |   |   |   |   |   |   |   Identifier #96
|   |   |   |   VariableDeclarationStatement #111
|   |   |   |   |   VariableDeclaration #102 -> uint256 reserveA
|   |   |   |   |   |   ElementaryTypeName #101
|   |   |   |   |   VariableDeclaration #104 -> uint256 reserveB
|   |   |   |   |   |   ElementaryTypeName #103
|   |   |   |   |   FunctionCall #110
|   |   |   |   |   |   MemberAccess #106
|   |   |   |   |   |   |   Identifier #105
|   |   |   |   |   |   Identifier #107
|   |   |   |   |   |   Identifier #108
|   |   |   |   |   |   Identifier #109
|   |   |   |   IfStatement #189
|   |   |   |   |   BinaryOperation #118
|   |   |   |   |   |   BinaryOperation #114
|   |   |   |   |   |   |   Identifier #112
|   |   |   |   |   |   |   Literal #113
|   |   |   |   |   |   BinaryOperation #117
|   |   |   |   |   |   |   Identifier #115
|   |   |   |   |   |   |   Literal #116
|   |   |   |   |   Block #127
|   |   |   |   |   |   ExpressionStatement #126
|   |   |   |   |   |   |   Assignment #125
|   |   |   |   |   |   |   |   TupleExpression #121
|   |   |   |   |   |   |   |   |   Identifier #119
|   |   |   |   |   |   |   |   |   Identifier #120
|   |   |   |   |   |   |   |   TupleExpression #124
|   |   |   |   |   |   |   |   |   Identifier #122
|   |   |   |   |   |   |   |   |   Identifier #123
|   |   |   |   |   Block #188
|   |   |   |   |   |   VariableDeclarationStatement #136
|   |   |   |   |   |   |   VariableDeclaration #129 -> uint256 amountBOptimal
|   |   |   |   |   |   |   |   ElementaryTypeName #128
|   |   |   |   |   |   |   FunctionCall #135
|   |   |   |   |   |   |   |   MemberAccess #131
|   |   |   |   |   |   |   |   |   Identifier #130
|   |   |   |   |   |   |   |   Identifier #132
|   |   |   |   |   |   |   |   Identifier #133
|   |   |   |   |   |   |   |   Identifier #134
|   |   |   |   |   |   IfStatement #187
|   |   |   |   |   |   |   BinaryOperation #139
|   |   |   |   |   |   |   |   Identifier #137
|   |   |   |   |   |   |   |   Identifier #138
|   |   |   |   |   |   |   Block #155
|   |   |   |   |   |   |   |   ExpressionStatement #146
|   |   |   |   |   |   |   |   |   FunctionCall #145
|   |   |   |   |   |   |   |   |   |   Identifier #140
|   |   |   |   |   |   |   |   |   |   BinaryOperation #143
|   |   |   |   |   |   |   |   |   |   |   Identifier #141
|   |   |   |   |   |   |   |   |   |   |   Identifier #142
|   |   |   |   |   |   |   |   |   |   Literal #144
|   |   |   |   |   |   |   |   ExpressionStatement #154
|   |   |   |   |   |   |   |   |   Assignment #153
|   |   |   |   |   |   |   |   |   |   TupleExpression #149
|   |   |   |   |   |   |   |   |   |   |   Identifier #147
|   |   |   |   |   |   |   |   |   |   |   Identifier #148
|   |   |   |   |   |   |   |   |   |   TupleExpression #152
|   |   |   |   |   |   |   |   |   |   |   Identifier #150
|   |   |   |   |   |   |   |   |   |   |   Identifier #151
|   |   |   |   |   |   |   Block #186
|   |   |   |   |   |   |   |   VariableDeclarationStatement #164
|   |   |   |   |   |   |   |   |   VariableDeclaration #157 -> uint256 amountAOptimal
|   |   |   |   |   |   |   |   |   |   ElementaryTypeName #156
|   |   |   |   |   |   |   |   |   FunctionCall #163
|   |   |   |   |   |   |   |   |   |   MemberAccess #159
|   |   |   |   |   |   |   |   |   |   |   Identifier #158
|   |   |   |   |   |   |   |   |   |   Identifier #160
|   |   |   |   |   |   |   |   |   |   Identifier #161
|   |   |   |   |   |   |   |   |   |   Identifier #162
|   |   |   |   |   |   |   |   ExpressionStatement #170
|   |   |   |   |   |   |   |   |   FunctionCall #169
|   |   |   |   |   |   |   |   |   |   Identifier #165
|   |   |   |   |   |   |   |   |   |   BinaryOperation #168
|   |   |   |   |   |   |   |   |   |   |   Identifier #166
|   |   |   |   |   |   |   |   |   |   |   Identifier #167
|   |   |   |   |   |   |   |   ExpressionStatement #177
|   |   |   |   |   |   |   |   |   FunctionCall #176
|   |   |   |   |   |   |   |   |   |   Identifier #171
|   |   |   |   |   |   |   |   |   |   BinaryOperation #174
|   |   |   |   |   |   |   |   |   |   |   Identifier #172
|   |   |   |   |   |   |   |   |   |   |   Identifier #173
|   |   |   |   |   |   |   |   |   |   Literal #175
|   |   |   |   |   |   |   |   ExpressionStatement #185
|   |   |   |   |   |   |   |   |   Assignment #184
|   |   |   |   |   |   |   |   |   |   TupleExpression #180
|   |   |   |   |   |   |   |   |   |   |   Identifier #178
|   |   |   |   |   |   |   |   |   |   |   Identifier #179
|   |   |   |   |   |   |   |   |   |   TupleExpression #183
|   |   |   |   |   |   |   |   |   |   |   Identifier #181
|   |   |   |   |   |   |   |   |   |   |   Identifier #182
|   |   FunctionDefinition #272 -> addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256) [selector: e8e33700]
|   |   |   ParameterList #208
|   |   |   |   VariableDeclaration #193 -> address tokenA
|   |   |   |   |   ElementaryTypeName #192
|   |   |   |   VariableDeclaration #195 -> address tokenB
|   |   |   |   |   ElementaryTypeName #194
|   |   |   |   VariableDeclaration #197 -> uint256 amountADesired
|   |   |   |   |   ElementaryTypeName #196
|   |   |   |   VariableDeclaration #199 -> uint256 amountBDesired
|   |   |   |   |   ElementaryTypeName #198
|   |   |   |   VariableDeclaration #201 -> uint256 amountAMin
|   |   |   |   |   ElementaryTypeName #200
|   |   |   |   VariableDeclaration #203 -> uint256 amountBMin
|   |   |   |   |   ElementaryTypeName #202
|   |   |   |   VariableDeclaration #205 -> address to
|   |   |   |   |   ElementaryTypeName #204
|   |   |   |   VariableDeclaration #207 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #206
|   |   |   OverrideSpecifier #209
|   |   |   ModifierInvocation #212
|   |   |   |   Identifier #210
|   |   |   |   Identifier #211
|   |   |   ParameterList #219
|   |   |   |   VariableDeclaration #214 -> uint256 amountA
|   |   |   |   |   ElementaryTypeName #213
|   |   |   |   VariableDeclaration #216 -> uint256 amountB
|   |   |   |   |   ElementaryTypeName #215
|   |   |   |   VariableDeclaration #218 -> uint256 liquidity
|   |   |   |   |   ElementaryTypeName #217
|   |   |   Block #271
|   |   |   |   ExpressionStatement #232
|   |   |   |   |   Assignment #231
|   |   |   |   |   |   TupleExpression #222
|   |   |   |   |   |   |   Identifier #220
|   |   |   |   |   |   |   Identifier #221
|   |   |   |   |   |   FunctionCall #230
|   |   |   |   |   |   |   Identifier #223
|   |   |   |   |   |   |   Identifier #224
|   |   |   |   |   |   |   Identifier #225
|   |   |   |   |   |   |   Identifier #226
|   |   |   |   |   |   |   Identifier #227
|   |   |   |   |   |   |   Identifier #228
|   |   |   |   |   |   |   Identifier #229
|   |   |   |   VariableDeclarationStatement #241
|   |   |   |   |   VariableDeclaration #234 -> address pair
|   |   |   |   |   |   ElementaryTypeName #233
|   |   |   |   |   FunctionCall #240
|   |   |   |   |   |   MemberAccess #236
|   |   |   |   |   |   |   Identifier #235
|   |   |   |   |   |   Identifier #237
|   |   |   |   |   |   Identifier #238
|   |   |   |   |   |   Identifier #239
|   |   |   |   ExpressionStatement #251
|   |   |   |   |   FunctionCall #250
|   |   |   |   |   |   MemberAccess #244
|   |   |   |   |   |   |   Identifier #242
|   |   |   |   |   |   Identifier #245
|   |   |   |   |   |   MemberAccess #247
|   |   |   |   |   |   |   Identifier #246
|   |   |   |   |   |   Identifier #248
|   |   |   |   |   |   Identifier #249
|   |   |   |   ExpressionStatement #261
|   |   |   |   |   FunctionCall #260
|   |   |   |   |   |   MemberAccess #254
|   |   |   |   |   |   |   Identifier #252
|   |   |   |   |   |   Identifier #255
|   |   |   |   |   |   MemberAccess #257
|   |   |   |   |   |   |   Identifier #256
|   |   |   |   |   |   Identifier #258
|   |   |   |   |   |   Identifier #259
|   |   |   |   ExpressionStatement #270
|   |   |   |   |   Assignment #269
|   |   |   |   |   |   Identifier #262
|   |   |   |   |   |   FunctionCall #268
|   |   |   |   |   |   |   MemberAccess #266
|   |   |   |   |   |   |   |   FunctionCall #265
|   |   |   |   |   |   |   |   |   Identifier #263
|   |   |   |   |   |   |   |   |   Identifier #264
|   |   |   |   |   |   |   Identifier #267
|   |   FunctionDefinition #374 -> addLiquidityETH(address,uint256,uint256,uint256,address,uint256) [selector: f305d719]
|   |   |   ParameterList #285
|   |   |   |   VariableDeclaration #274 -> address token
|   |   |   |   |   ElementaryTypeName #273
|   |   |   |   VariableDeclaration #276 -> uint256 amountTokenDesired
|   |   |   |   |   ElementaryTypeName #275
|   |   |   |   VariableDeclaration #278 -> uint256 amountTokenMin
|   |   |   |   |   ElementaryTypeName #277
|   |   |   |   VariableDeclaration #280 -> uint256 amountETHMin
|   |   |   |   |   ElementaryTypeName #279
|   |   |   |   VariableDeclaration #282 -> address to
|   |   |   |   |   ElementaryTypeName #281
|   |   |   |   VariableDeclaration #284 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #283
|   |   |   OverrideSpecifier #286
|   |   |   ModifierInvocation #289
|   |   |   |   Identifier #287
|   |   |   |   Identifier #288
|   |   |   ParameterList #296
|   |   |   |   VariableDeclaration #291 -> uint256 amountToken
|   |   |   |   |   ElementaryTypeName #290
|   |   |   |   VariableDeclaration #293 -> uint256 amountETH
|   |   |   |   |   ElementaryTypeName #292
|   |   |   |   VariableDeclaration #295 -> uint256 liquidity
|   |   |   |   |   ElementaryTypeName #294
|   |   |   Block #373
|   |   |   |   ExpressionStatement #310
|   |   |   |   |   Assignment #309
|   |   |   |   |   |   TupleExpression #299
|   |   |   |   |   |   |   Identifier #297
|   |   |   |   |   |   |   Identifier #298
|   |   |   |   |   |   FunctionCall #308
|   |   |   |   |   |   |   Identifier #300
|   |   |   |   |   |   |   Identifier #301
|   |   |   |   |   |   |   Identifier #302
|   |   |   |   |   |   |   Identifier #303
|   |   |   |   |   |   |   MemberAccess #305
|   |   |   |   |   |   |   |   Identifier #304
|   |   |   |   |   |   |   Identifier #306
|   |   |   |   |   |   |   Identifier #307
|   |   |   |   VariableDeclarationStatement #319
|   |   |   |   |   VariableDeclaration #312 -> address pair
|   |   |   |   |   |   ElementaryTypeName #311
|   |   |   |   |   FunctionCall #318
|   |   |   |   |   |   MemberAccess #314
|   |   |   |   |   |   |   Identifier #313
|   |   |   |   |   |   Identifier #315
|   |   |   |   |   |   Identifier #316
|   |   |   |   |   |   Identifier #317
|   |   |   |   ExpressionStatement #329
|   |   |   |   |   FunctionCall #328
|   |   |   |   |   |   MemberAccess #322
|   |   |   |   |   |   |   Identifier #320
|   |   |   |   |   |   Identifier #323
|   |   |   |   |   |   MemberAccess #325
|   |   |   |   |   |   |   Identifier #324
|   |   |   |   |   |   Identifier #326
|   |   |   |   |   |   Identifier #327
|   |   |   |   ExpressionStatement #337
|   |   |   |   |   FunctionCall #336
|   |   |   |   |   |   FunctionCallOptions #335
|   |   |   |   |   |   |   MemberAccess #333
|   |   |   |   |   |   |   |   FunctionCall #332
|   |   |   |   |   |   |   |   |   Identifier #330
|   |   |   |   |   |   |   |   |   Identifier #331
|   |   |   |   |   |   |   Identifier #334
|   |   |   |   ExpressionStatement #347
|   |   |   |   |   FunctionCall #346
|   |   |   |   |   |   Identifier #338
|   |   |   |   |   |   FunctionCall #345
|   |   |   |   |   |   |   MemberAccess #342
|   |   |   |   |   |   |   |   FunctionCall #341
|   |   |   |   |   |   |   |   |   Identifier #339
|   |   |   |   |   |   |   |   |   Identifier #340
|   |   |   |   |   |   |   Identifier #343
|   |   |   |   |   |   |   Identifier #344
|   |   |   |   ExpressionStatement #356
|   |   |   |   |   Assignment #355
|   |   |   |   |   |   Identifier #348
|   |   |   |   |   |   FunctionCall #354
|   |   |   |   |   |   |   MemberAccess #352
|   |   |   |   |   |   |   |   FunctionCall #351
|   |   |   |   |   |   |   |   |   Identifier #349
|   |   |   |   |   |   |   |   |   Identifier #350
|   |   |   |   |   |   |   Identifier #353
|   |   |   |   IfStatement #372
|   |   |   |   |   BinaryOperation #360
|   |   |   |   |   |   MemberAccess #358
|   |   |   |   |   |   |   Identifier #357
|   |   |   |   |   |   Identifier #359
|   |   |   |   |   ExpressionStatement #371
|   |   |   |   |   |   FunctionCall #370
|   |   |   |   |   |   |   MemberAccess #363
|   |   |   |   |   |   |   |   Identifier #361
|   |   |   |   |   |   |   MemberAccess #365
|   |   |   |   |   |   |   |   Identifier #364
|   |   |   |   |   |   |   BinaryOperation #369
|   |   |   |   |   |   |   |   MemberAccess #367
|   |   |   |   |   |   |   |   |   Identifier #366
|   |   |   |   |   |   |   |   Identifier #368
|   |   FunctionDefinition #467 -> removeLiquidity(address,address,uint256,uint256,uint256,address,uint256) [selector: baa2abde]
|   |   |   ParameterList #389
|   |   |   |   VariableDeclaration #376 -> address tokenA
|   |   |   |   |   ElementaryTypeName #375
|   |   |   |   VariableDeclaration #378 -> address tokenB
|   |   |   |   |   ElementaryTypeName #377
|   |   |   |   VariableDeclaration #380 -> uint256 liquidity
|   |   |   |   |   ElementaryTypeName #379
|   |   |   |   VariableDeclaration #382 -> uint256 amountAMin
|   |   |   |   |   ElementaryTypeName #381
|   |   |   |   VariableDeclaration #384 -> uint256 amountBMin
|   |   |   |   |   ElementaryTypeName #383
|   |   |   |   VariableDeclaration #386 -> address to
|   |   |   |   |   ElementaryTypeName #385
|   |   |   |   VariableDeclaration #388 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #387
|   |   |   OverrideSpecifier #390
|   |   |   ModifierInvocation #393
|   |   |   |   Identifier #391
|   |   |   |   Identifier #392
|   |   |   ParameterList #398
|   |   |   |   VariableDeclaration #395 -> uint256 amountA
|   |   |   |   |   ElementaryTypeName #394
|   |   |   |   VariableDeclaration #397 -> uint256 amountB
|   |   |   |   |   ElementaryTypeName #396
|   |   |   Block #466
|   |   |   |   VariableDeclarationStatement #407
|   |   |   |   |   VariableDeclaration #400 -> address pair
|   |   |   |   |   |   ElementaryTypeName #399
|   |   |   |   |   FunctionCall #406
|   |   |   |   |   |   MemberAccess #402
|   |   |   |   |   |   |   Identifier #401
|   |   |   |   |   |   Identifier #403
|   |   |   |   |   |   Identifier #404
|   |   |   |   |   |   Identifier #405
|   |   |   |   ExpressionStatement #417
|   |   |   |   |   FunctionCall #416
|   |   |   |   |   |   MemberAccess #411
|   |   |   |   |   |   |   FunctionCall #410
|   |   |   |   |   |   |   |   Identifier #408
|   |   |   |   |   |   |   |   Identifier #409
|   |   |   |   |   |   MemberAccess #413
|   |   |   |   |   |   |   Identifier #412
|   |   |   |   |   |   Identifier #414
|   |   |   |   |   |   Identifier #415
|   |   |   |   VariableDeclarationStatement #428
|   |   |   |   |   VariableDeclaration #419 -> uint256 amount0
|   |   |   |   |   |   ElementaryTypeName #418
|   |   |   |   |   VariableDeclaration #421 -> uint256 amount1
|   |   |   |   |   |   ElementaryTypeName #420
|   |   |   |   |   FunctionCall #427
|   |   |   |   |   |   MemberAccess #425
|   |   |   |   |   |   |   FunctionCall #424
|   |   |   |   |   |   |   |   Identifier #422
|   |   |   |   |   |   |   |   Identifier #423
|   |   |   |   |   |   Identifier #426
|   |   |   |   VariableDeclarationStatement #436
|   |   |   |   |   VariableDeclaration #430 -> address token0
|   |   |   |   |   |   ElementaryTypeName #429
|   |   |   |   |   FunctionCall #435
|   |   |   |   |   |   MemberAccess #432
|   |   |   |   |   |   |   Identifier #431
|   |   |   |   |   |   Identifier #433
|   |   |   |   |   |   Identifier #434
|   |   |   |   ExpressionStatement #451
|   |   |   |   |   Assignment #450
|   |   |   |   |   |   TupleExpression #439
|   |   |   |   |   |   |   Identifier #437
|   |   |   |   |   |   |   Identifier #438
|   |   |   |   |   |   Conditional #449
|   |   |   |   |   |   |   BinaryOperation #442
|   |   |   |   |   |   |   |   Identifier #440
|   |   |   |   |   |   |   |   Identifier #441
|   |   |   |   |   |   |   TupleExpression #445
|   |   |   |   |   |   |   |   Identifier #443
|   |   |   |   |   |   |   |   Identifier #444
|   |   |   |   |   |   |   TupleExpression #448
|   |   |   |   |   |   |   |   Identifier #446
|   |   |   |   |   |   |   |   Identifier #447
|   |   |   |   ExpressionStatement #458
|   |   |   |   |   FunctionCall #457
|   |   |   |   |   |   Identifier #452
|   |   |   |   |   |   BinaryOperation #455
|   |   |   |   |   |   |   Identifier #453
|   |   |   |   |   |   |   Identifier #454
|   |   |   |   |   |   Literal #456
|   |   |   |   ExpressionStatement #465
|   |   |   |   |   FunctionCall #464
|   |   |   |   |   |   Identifier #459
|   |   |   |   |   |   BinaryOperation #462
|   |   |   |   |   |   |   Identifier #460
|   |   |   |   |   |   |   Identifier #461
|   |   |   |   |   |   Literal #463
|   |   FunctionDefinition #530 -> removeLiquidityETH(address,uint256,uint256,uint256,address,uint256) [selector: 02751cec]
|   |   |   ParameterList #480
|   |   |   |   VariableDeclaration #469 -> address token
|   |   |   |   |   ElementaryTypeName #468
|   |   |   |   VariableDeclaration #471 -> uint256 liquidity
|   |   |   |   |   ElementaryTypeName #470
|   |   |   |   VariableDeclaration #473 -> uint256 amountTokenMin
|   |   |   |   |   ElementaryTypeName #472
|   |   |   |   VariableDeclaration #475 -> uint256 amountETHMin
|   |   |   |   |   ElementaryTypeName #474
|   |   |   |   VariableDeclaration #477 -> address to
|   |   |   |   |   ElementaryTypeName #476
|   |   |   |   VariableDeclaration #479 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #478
|   |   |   OverrideSpecifier #481
|   |   |   ModifierInvocation #484
|   |   |   |   Identifier #482
|   |   |   |   Identifier #483
|   |   |   ParameterList #489
|   |   |   |   VariableDeclaration #486 -> uint256 amountToken
|   |   |   |   |   ElementaryTypeName #485
|   |   |   |   VariableDeclaration #488 -> uint256 amountETH
|   |   |   |   |   ElementaryTypeName #487
|   |   |   Block #529
|   |   |   |   ExpressionStatement #506
|   |   |   |   |   Assignment #505
|   |   |   |   |   |   TupleExpression #492
|   |   |   |   |   |   |   Identifier #490
|   |   |   |   |   |   |   Identifier #491
|   |   |   |   |   |   FunctionCall #504
|   |   |   |   |   |   |   Identifier #493
|   |   |   |   |   |   |   Identifier #494
|   |   |   |   |   |   |   Identifier #495
|   |   |   |   |   |   |   Identifier #496
|   |   |   |   |   |   |   Identifier #497
|   |   |   |   |   |   |   Identifier #498
|   |   |   |   |   |   |   FunctionCall #502
|   |   |   |   |   |   |   |   ElementaryTypeNameExpression #500
|   |   |   |   |   |   |   |   |   ElementaryTypeName #499
|   |   |   |   |   |   |   |   Identifier #501
|   |   |   |   |   |   |   Identifier #503
|   |   |   |   ExpressionStatement #514
|   |   |   |   |   FunctionCall #513
|   |   |   |   |   |   MemberAccess #509
|   |   |   |   |   |   |   Identifier #507
|   |   |   |   |   |   Identifier #510
|   |   |   |   |   |   Identifier #511
|   |   |   |   |   |   Identifier #512
|   |   |   |   ExpressionStatement #521
|   |   |   |   |   FunctionCall #520
|   |   |   |   |   |   MemberAccess #518
|   |   |   |   |   |   |   FunctionCall #517
|   |   |   |   |   |   |   |   Identifier #515
|   |   |   |   |   |   |   |   Identifier #516
|   |   |   |   |   |   Identifier #519
|   |   |   |   ExpressionStatement #528
|   |   |   |   |   FunctionCall #527
|   |   |   |   |   |   MemberAccess #524
|   |   |   |   |   |   |   Identifier #522
|   |   |   |   |   |   Identifier #525
|   |   |   |   |   |   Identifier #526
|   |   FunctionDefinition #612 -> removeLiquidityWithPermit(address,address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32) [selector: 2195995c]
|   |   |   ParameterList #553
|   |   |   |   VariableDeclaration #532 -> address tokenA
|   |   |   |   |   ElementaryTypeName #531
|   |   |   |   VariableDeclaration #534 -> address tokenB
|   |   |   |   |   ElementaryTypeName #533
|   |   |   |   VariableDeclaration #536 -> uint256 liquidity
|   |   |   |   |   ElementaryTypeName #535
|   |   |   |   VariableDeclaration #538 -> uint256 amountAMin
|   |   |   |   |   ElementaryTypeName #537
|   |   |   |   VariableDeclaration #540 -> uint256 amountBMin
|   |   |   |   |   ElementaryTypeName #539
|   |   |   |   VariableDeclaration #542 -> address to
|   |   |   |   |   ElementaryTypeName #541
|   |   |   |   VariableDeclaration #544 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #543
|   |   |   |   VariableDeclaration #546 -> bool approveMax
|   |   |   |   |   ElementaryTypeName #545
|   |   |   |   VariableDeclaration #548 -> uint8 v
|   |   |   |   |   ElementaryTypeName #547
|   |   |   |   VariableDeclaration #550 -> bytes32 r
|   |   |   |   |   ElementaryTypeName #549
|   |   |   |   VariableDeclaration #552 -> bytes32 s
|   |   |   |   |   ElementaryTypeName #551
|   |   |   OverrideSpecifier #554
|   |   |   ParameterList #559
|   |   |   |   VariableDeclaration #556 -> uint256 amountA
|   |   |   |   |   ElementaryTypeName #555
|   |   |   |   VariableDeclaration #558 -> uint256 amountB
|   |   |   |   |   ElementaryTypeName #557
|   |   |   Block #611
|   |   |   |   VariableDeclarationStatement #568
|   |   |   |   |   VariableDeclaration #561 -> address pair
|   |   |   |   |   |   ElementaryTypeName #560
|   |   |   |   |   FunctionCall #567
|   |   |   |   |   |   MemberAccess #563
|   |   |   |   |   |   |   Identifier #562
|   |   |   |   |   |   Identifier #564
|   |   |   |   |   |   Identifier #565
|   |   |   |   |   |   Identifier #566
|   |   |   |   VariableDeclarationStatement #579
|   |   |   |   |   VariableDeclaration #570 -> uint256 value
|   |   |   |   |   |   ElementaryTypeName #569
|   |   |   |   |   Conditional #578
|   |   |   |   |   |   Identifier #571
|   |   |   |   |   |   FunctionCall #576
|   |   |   |   |   |   |   ElementaryTypeNameExpression #573
|   |   |   |   |   |   |   |   ElementaryTypeName #572
|   |   |   |   |   |   |   UnaryOperation #575
|   |   |   |   |   |   |   |   Literal #574
|   |   |   |   |   |   Identifier #577
|   |   |   |   ExpressionStatement #596
|   |   |   |   |   FunctionCall #595
|   |   |   |   |   |   MemberAccess #583
|   |   |   |   |   |   |   FunctionCall #582
|   |   |   |   |   |   |   |   Identifier #580
|   |   |   |   |   |   |   |   Identifier #581
|   |   |   |   |   |   MemberAccess #585
|   |   |   |   |   |   |   Identifier #584
|   |   |   |   |   |   FunctionCall #589
|   |   |   |   |   |   |   ElementaryTypeNameExpression #587
|   |   |   |   |   |   |   |   ElementaryTypeName #586
|   |   |   |   |   |   |   Identifier #588
|   |   |   |   |   |   Identifier #590
|   |   |   |   |   |   Identifier #591
|   |   |   |   |   |   Identifier #592
|   |   |   |   |   |   Identifier #593
|   |   |   |   |   |   Identifier #594
|   |   |   |   ExpressionStatement #610
|   |   |   |   |   Assignment #609
|   |   |   |   |   |   TupleExpression #599
|   |   |   |   |   |   |   Identifier #597
|   |   |   |   |   |   |   Identifier #598
|   |   |   |   |   |   FunctionCall #608
|   |   |   |   |   |   |   Identifier #600
|   |   |   |   |   |   |   Identifier #601
|   |   |   |   |   |   |   Identifier #602
|   |   |   |   |   |   |   Identifier #603
|   |   |   |   |   |   |   Identifier #604
|   |   |   |   |   |   |   Identifier #605
|   |   |   |   |   |   |   Identifier #606
|   |   |   |   |   |   |   Identifier #607
|   |   FunctionDefinition #691 -> removeLiquidityETHWithPermit(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32) [selector: ded9382a]
|   |   |   ParameterList #633
|   |   |   |   VariableDeclaration #614 -> address token
|   |   |   |   |   ElementaryTypeName #613
|   |   |   |   VariableDeclaration #616 -> uint256 liquidity
|   |   |   |   |   ElementaryTypeName #615
|   |   |   |   VariableDeclaration #618 -> uint256 amountTokenMin
|   |   |   |   |   ElementaryTypeName #617
|   |   |   |   VariableDeclaration #620 -> uint256 amountETHMin
|   |   |   |   |   ElementaryTypeName #619
|   |   |   |   VariableDeclaration #622 -> address to
|   |   |   |   |   ElementaryTypeName #621
|   |   |   |   VariableDeclaration #624 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #623
|   |   |   |   VariableDeclaration #626 -> bool approveMax
|   |   |   |   |   ElementaryTypeName #625
|   |   |   |   VariableDeclaration #628 -> uint8 v
|   |   |   |   |   ElementaryTypeName #627
|   |   |   |   VariableDeclaration #630 -> bytes32 r
|   |   |   |   |   ElementaryTypeName #629
|   |   |   |   VariableDeclaration #632 -> bytes32 s
|   |   |   |   |   ElementaryTypeName #631
|   |   |   OverrideSpecifier #634
|   |   |   ParameterList #639
|   |   |   |   VariableDeclaration #636 -> uint256 amountToken
|   |   |   |   |   ElementaryTypeName #635
|   |   |   |   VariableDeclaration #638 -> uint256 amountETH
|   |   |   |   |   ElementaryTypeName #637
|   |   |   Block #690
|   |   |   |   VariableDeclarationStatement #648
|   |   |   |   |   VariableDeclaration #641 -> address pair
|   |   |   |   |   |   ElementaryTypeName #640
|   |   |   |   |   FunctionCall #647
|   |   |   |   |   |   MemberAccess #643
|   |   |   |   |   |   |   Identifier #642
|   |   |   |   |   |   Identifier #644
|   |   |   |   |   |   Identifier #645
|   |   |   |   |   |   Identifier #646
|   |   |   |   VariableDeclarationStatement #659
|   |   |   |   |   VariableDeclaration #650 -> uint256 value
|   |   |   |   |   |   ElementaryTypeName #649
|   |   |   |   |   Conditional #658
|   |   |   |   |   |   Identifier #651
|   |   |   |   |   |   FunctionCall #656
|   |   |   |   |   |   |   ElementaryTypeNameExpression #653
|   |   |   |   |   |   |   |   ElementaryTypeName #652
|   |   |   |   |   |   |   UnaryOperation #655
|   |   |   |   |   |   |   |   Literal #654
|   |   |   |   |   |   Identifier #657
|   |   |   |   ExpressionStatement #676
|   |   |   |   |   FunctionCall #675
|   |   |   |   |   |   MemberAccess #663
|   |   |   |   |   |   |   FunctionCall #662
|   |   |   |   |   |   |   |   Identifier #660
|   |   |   |   |   |   |   |   Identifier #661
|   |   |   |   |   |   MemberAccess #665
|   |   |   |   |   |   |   Identifier #664
|   |   |   |   |   |   FunctionCall #669
|   |   |   |   |   |   |   ElementaryTypeNameExpression #667
|   |   |   |   |   |   |   |   ElementaryTypeName #666
|   |   |   |   |   |   |   Identifier #668
|   |   |   |   |   |   Identifier #670
|   |   |   |   |   |   Identifier #671
|   |   |   |   |   |   Identifier #672
|   |   |   |   |   |   Identifier #673
|   |   |   |   |   |   Identifier #674
|   |   |   |   ExpressionStatement #689
|   |   |   |   |   Assignment #688
|   |   |   |   |   |   TupleExpression #679
|   |   |   |   |   |   |   Identifier #677
|   |   |   |   |   |   |   Identifier #678
|   |   |   |   |   |   FunctionCall #687
|   |   |   |   |   |   |   Identifier #680
|   |   |   |   |   |   |   Identifier #681
|   |   |   |   |   |   |   Identifier #682
|   |   |   |   |   |   |   Identifier #683
|   |   |   |   |   |   |   Identifier #684
|   |   |   |   |   |   |   Identifier #685
|   |   |   |   |   |   |   Identifier #686
|   |   FunctionDefinition #759 -> removeLiquidityETHSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256) [selector: af2979eb]
|   |   |   ParameterList #704
|   |   |   |   VariableDeclaration #693 -> address token
|   |   |   |   |   ElementaryTypeName #692
|   |   |   |   VariableDeclaration #695 -> uint256 liquidity
|   |   |   |   |   ElementaryTypeName #694
|   |   |   |   VariableDeclaration #697 -> uint256 amountTokenMin
|   |   |   |   |   ElementaryTypeName #696
|   |   |   |   VariableDeclaration #699 -> uint256 amountETHMin
|   |   |   |   |   ElementaryTypeName #698
|   |   |   |   VariableDeclaration #701 -> address to
|   |   |   |   |   ElementaryTypeName #700
|   |   |   |   VariableDeclaration #703 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #702
|   |   |   OverrideSpecifier #705
|   |   |   ModifierInvocation #708
|   |   |   |   Identifier #706
|   |   |   |   Identifier #707
|   |   |   ParameterList #711
|   |   |   |   VariableDeclaration #710 -> uint256 amountETH
|   |   |   |   |   ElementaryTypeName #709
|   |   |   Block #758
|   |   |   |   ExpressionStatement #727
|   |   |   |   |   Assignment #726
|   |   |   |   |   |   TupleExpression #713
|   |   |   |   |   |   |   Identifier #712
|   |   |   |   |   |   FunctionCall #725
|   |   |   |   |   |   |   Identifier #714
|   |   |   |   |   |   |   Identifier #715
|   |   |   |   |   |   |   Identifier #716
|   |   |   |   |   |   |   Identifier #717
|   |   |   |   |   |   |   Identifier #718
|   |   |   |   |   |   |   Identifier #719
|   |   |   |   |   |   |   FunctionCall #723
|   |   |   |   |   |   |   |   ElementaryTypeNameExpression #721
|   |   |   |   |   |   |   |   |   ElementaryTypeName #720
|   |   |   |   |   |   |   |   Identifier #722
|   |   |   |   |   |   |   Identifier #724
|   |   |   |   ExpressionStatement #743
|   |   |   |   |   FunctionCall #742
|   |   |   |   |   |   MemberAccess #730
|   |   |   |   |   |   |   Identifier #728
|   |   |   |   |   |   Identifier #731
|   |   |   |   |   |   Identifier #732
|   |   |   |   |   |   FunctionCall #741
|   |   |   |   |   |   |   MemberAccess #736
|   |   |   |   |   |   |   |   FunctionCall #735
|   |   |   |   |   |   |   |   |   Identifier #733
|   |   |   |   |   |   |   |   |   Identifier #734
|   |   |   |   |   |   |   FunctionCall #740
|   |   |   |   |   |   |   |   ElementaryTypeNameExpression #738
|   |   |   |   |   |   |   |   |   ElementaryTypeName #737
|   |   |   |   |   |   |   |   Identifier #739
|   |   |   |   ExpressionStatement #750
|   |   |   |   |   FunctionCall #749
|   |   |   |   |   |   MemberAccess #747
|   |   |   |   |   |   |   FunctionCall #746
|   |   |   |   |   |   |   |   Identifier #744
|   |   |   |   |   |   |   |   Identifier #745
|   |   |   |   |   |   Identifier #748
|   |   |   |   ExpressionStatement #757
|   |   |   |   |   FunctionCall #756
|   |   |   |   |   |   MemberAccess #753
|   |   |   |   |   |   |   Identifier #751
|   |   |   |   |   |   Identifier #754
|   |   |   |   |   |   Identifier #755
|   |   FunctionDefinition #834 -> removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32) [selector: 5b0d5984]
|   |   |   ParameterList #780
|   |   |   |   VariableDeclaration #761 -> address token
|   |   |   |   |   ElementaryTypeName #760
|   |   |   |   VariableDeclaration #763 -> uint256 liquidity
|   |   |   |   |   ElementaryTypeName #762
|   |   |   |   VariableDeclaration #765 -> uint256 amountTokenMin
|   |   |   |   |   ElementaryTypeName #764
|   |   |   |   VariableDeclaration #767 -> uint256 amountETHMin
|   |   |   |   |   ElementaryTypeName #766
|   |   |   |   VariableDeclaration #769 -> address to
|   |   |   |   |   ElementaryTypeName #768
|   |   |   |   VariableDeclaration #771 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #770
|   |   |   |   VariableDeclaration #773 -> bool approveMax
|   |   |   |   |   ElementaryTypeName #772
|   |   |   |   VariableDeclaration #775 -> uint8 v
|   |   |   |   |   ElementaryTypeName #774
|   |   |   |   VariableDeclaration #777 -> bytes32 r
|   |   |   |   |   ElementaryTypeName #776
|   |   |   |   VariableDeclaration #779 -> bytes32 s
|   |   |   |   |   ElementaryTypeName #778
|   |   |   OverrideSpecifier #781
|   |   |   ParameterList #784
|   |   |   |   VariableDeclaration #783 -> uint256 amountETH
|   |   |   |   |   ElementaryTypeName #782
|   |   |   Block #833
|   |   |   |   VariableDeclarationStatement #793
|   |   |   |   |   VariableDeclaration #786 -> address pair
|   |   |   |   |   |   ElementaryTypeName #785
|   |   |   |   |   FunctionCall #792
|   |   |   |   |   |   MemberAccess #788
|   |   |   |   |   |   |   Identifier #787
|   |   |   |   |   |   Identifier #789
|   |   |   |   |   |   Identifier #790
|   |   |   |   |   |   Identifier #791
|   |   |   |   VariableDeclarationStatement #804
|   |   |   |   |   VariableDeclaration #795 -> uint256 value
|   |   |   |   |   |   ElementaryTypeName #794
|   |   |   |   |   Conditional #803
|   |   |   |   |   |   Identifier #796
|   |   |   |   |   |   FunctionCall #801
|   |   |   |   |   |   |   ElementaryTypeNameExpression #798
|   |   |   |   |   |   |   |   ElementaryTypeName #797
|   |   |   |   |   |   |   UnaryOperation #800
|   |   |   |   |   |   |   |   Literal #799
|   |   |   |   |   |   Identifier #802
|   |   |   |   ExpressionStatement #821
|   |   |   |   |   FunctionCall #820
|   |   |   |   |   |   MemberAccess #808
|   |   |   |   |   |   |   FunctionCall #807
|   |   |   |   |   |   |   |   Identifier #805
|   |   |   |   |   |   |   |   Identifier #806
|   |   |   |   |   |   MemberAccess #810
|   |   |   |   |   |   |   Identifier #809
|   |   |   |   |   |   FunctionCall #814
|   |   |   |   |   |   |   ElementaryTypeNameExpression #812
|   |   |   |   |   |   |   |   ElementaryTypeName #811
|   |   |   |   |   |   |   Identifier #813
|   |   |   |   |   |   Identifier #815
|   |   |   |   |   |   Identifier #816
|   |   |   |   |   |   Identifier #817
|   |   |   |   |   |   Identifier #818
|   |   |   |   |   |   Identifier #819
|   |   |   |   ExpressionStatement #832
|   |   |   |   |   Assignment #831
|   |   |   |   |   |   Identifier #822
|   |   |   |   |   |   FunctionCall #830
|   |   |   |   |   |   |   Identifier #823
|   |   |   |   |   |   |   Identifier #824
|   |   |   |   |   |   |   Identifier #825
|   |   |   |   |   |   |   Identifier #826
|   |   |   |   |   |   |   Identifier #827
|   |   |   |   |   |   |   Identifier #828
|   |   |   |   |   |   |   Identifier #829
|   |   FunctionDefinition #950 -> _swap(uint256[],address[],address) [selector: f5901d4d]
|   |   |   ParameterList #843
|   |   |   |   VariableDeclaration #837 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #836
|   |   |   |   |   |   ElementaryTypeName #835
|   |   |   |   VariableDeclaration #840 -> address[] path
|   |   |   |   |   ArrayTypeName #839
|   |   |   |   |   |   ElementaryTypeName #838
|   |   |   |   VariableDeclaration #842 -> address _to
|   |   |   |   |   ElementaryTypeName #841
|   |   |   ParameterList #844
|   |   |   Block #949
|   |   |   |   ForStatement #948
|   |   |   |   |   VariableDeclarationStatement #847
|   |   |   |   |   |   VariableDeclaration #846 -> uint256 i
|   |   |   |   |   |   |   ElementaryTypeName #845
|   |   |   |   |   BinaryOperation #853
|   |   |   |   |   |   Identifier #848
|   |   |   |   |   |   BinaryOperation #852
|   |   |   |   |   |   |   MemberAccess #850
|   |   |   |   |   |   |   |   Identifier #849
|   |   |   |   |   |   |   Literal #851
|   |   |   |   |   ExpressionStatement #856
|   |   |   |   |   |   UnaryOperation #855
|   |   |   |   |   |   |   Identifier #854
|   |   |   |   |   Block #947
|   |   |   |   |   |   VariableDeclarationStatement #870
|   |   |   |   |   |   |   VariableDeclaration #858 -> address input
|   |   |   |   |   |   |   |   ElementaryTypeName #857
|   |   |   |   |   |   |   VariableDeclaration #860 -> address output
|   |   |   |   |   |   |   |   ElementaryTypeName #859
|   |   |   |   |   |   |   TupleExpression #869
|   |   |   |   |   |   |   |   IndexAccess #863
|   |   |   |   |   |   |   |   |   Identifier #861
|   |   |   |   |   |   |   |   |   Identifier #862
|   |   |   |   |   |   |   |   IndexAccess #868
|   |   |   |   |   |   |   |   |   Identifier #864
|   |   |   |   |   |   |   |   |   BinaryOperation #867
|   |   |   |   |   |   |   |   |   |   Identifier #865
|   |   |   |   |   |   |   |   |   |   Literal #866
|   |   |   |   |   |   VariableDeclarationStatement #878
|   |   |   |   |   |   |   VariableDeclaration #872 -> address token0
|   |   |   |   |   |   |   |   ElementaryTypeName #871
|   |   |   |   |   |   |   FunctionCall #877
|   |   |   |   |   |   |   |   MemberAccess #874
|   |   |   |   |   |   |   |   |   Identifier #873
|   |   |   |   |   |   |   |   Identifier #875
|   |   |   |   |   |   |   |   Identifier #876
|   |   |   |   |   |   VariableDeclarationStatement #886
|   |   |   |   |   |   |   VariableDeclaration #880 -> uint256 amountOut
|   |   |   |   |   |   |   |   ElementaryTypeName #879
|   |   |   |   |   |   |   IndexAccess #885
|   |   |   |   |   |   |   |   Identifier #881
|   |   |   |   |   |   |   |   BinaryOperation #884
|   |   |   |   |   |   |   |   |   Identifier #882
|   |   |   |   |   |   |   |   |   Literal #883
|   |   |   |   |   |   VariableDeclarationStatement #907
|   |   |   |   |   |   |   VariableDeclaration #888 -> uint256 amount0Out
|   |   |   |   |   |   |   |   ElementaryTypeName #887
|   |   |   |   |   |   |   VariableDeclaration #890 -> uint256 amount1Out
|   |   |   |   |   |   |   |   ElementaryTypeName #889
|   |   |   |   |   |   |   Conditional #906
|   |   |   |   |   |   |   |   BinaryOperation #893
|   |   |   |   |   |   |   |   |   Identifier #891
|   |   |   |   |   |   |   |   |   Identifier #892
|   |   |   |   |   |   |   |   TupleExpression #899
|   |   |   |   |   |   |   |   |   FunctionCall #897
|   |   |   |   |   |   |   |   |   |   ElementaryTypeNameExpression #895
|   |   |   |   |   |   |   |   |   |   |   ElementaryTypeName #894
|   |   |   |   |   |   |   |   |   |   Literal #896
|   |   |   |   |   |   |   |   |   Identifier #898
|   |   |   |   |   |   |   |   TupleExpression #905
|   |   |   |   |   |   |   |   |   Identifier #900
|   |   |   |   |   |   |   |   |   FunctionCall #904
|   |   |   |   |   |   |   |   |   |   ElementaryTypeNameExpression #902
|   |   |   |   |   |   |   |   |   |   |   ElementaryTypeName #901
|   |   |   |   |   |   |   |   |   |   Literal #903
|   |   |   |   |   |   VariableDeclarationStatement #928
|   |   |   |   |   |   |   VariableDeclaration #909 -> address to
|   |   |   |   |   |   |   |   ElementaryTypeName #908
|   |   |   |   |   |   |   Conditional #927
|   |   |   |   |   |   |   |   BinaryOperation #915
|   |   |   |   |   |   |   |   |   Identifier #910
|   |   |   |   |   |   |   |   |   BinaryOperation #914
|   |   |   |   |   |   |   |   |   |   MemberAccess #912
|   |   |   |   |   |   |   |   |   |   |   Identifier #911
|   |   |   |   |   |   |   |   |   |   Literal #913
|   |   |   |   |   |   |   |   FunctionCall #925
|   |   |   |   |   |   |   |   |   MemberAccess #917
|   |   |   |   |   |   |   |   |   |   Identifier #916
|   |   |   |   |   |   |   |   |   Identifier #918
|   |   |   |   |   |   |   |   |   Identifier #919
|   |   |   |   |   |   |   |   |   IndexAccess #924
|   |   |   |   |   |   |   |   |   |   Identifier #920
|   |   |   |   |   |   |   |   |   |   BinaryOperation #923
|   |   |   |   |   |   |   |   |   |   |   Identifier #921
|   |   |   |   |   |   |   |   |   |   |   Literal #922
|   |   |   |   |   |   |   |   Identifier #926
|   |   |   |   |   |   ExpressionStatement #946
|   |   |   |   |   |   |   FunctionCall #945
|   |   |   |   |   |   |   |   MemberAccess #937
|   |   |   |   |   |   |   |   |   FunctionCall #936
|   |   |   |   |   |   |   |   |   |   Identifier #929
|   |   |   |   |   |   |   |   |   |   FunctionCall #935
|   |   |   |   |   |   |   |   |   |   |   MemberAccess #931
|   |   |   |   |   |   |   |   |   |   |   |   Identifier #930
|   |   |   |   |   |   |   |   |   |   |   Identifier #932
|   |   |   |   |   |   |   |   |   |   |   Identifier #933
|   |   |   |   |   |   |   |   |   |   |   Identifier #934
|   |   |   |   |   |   |   |   Identifier #938
|   |   |   |   |   |   |   |   Identifier #939
|   |   |   |   |   |   |   |   Identifier #940
|   |   |   |   |   |   |   |   FunctionCall #944
|   |   |   |   |   |   |   |   |   NewExpression #942
|   |   |   |   |   |   |   |   |   |   ElementaryTypeName #941
|   |   |   |   |   |   |   |   |   Literal #943
|   |   FunctionDefinition #1022 -> swapExactTokensForTokens(uint256,uint256,address[],address,uint256) [selector: 38ed1739]
|   |   |   ParameterList #962
|   |   |   |   VariableDeclaration #952 -> uint256 amountIn
|   |   |   |   |   ElementaryTypeName #951
|   |   |   |   VariableDeclaration #954 -> uint256 amountOutMin
|   |   |   |   |   ElementaryTypeName #953
|   |   |   |   VariableDeclaration #957 -> address[] path
|   |   |   |   |   ArrayTypeName #956
|   |   |   |   |   |   ElementaryTypeName #955
|   |   |   |   VariableDeclaration #959 -> address to
|   |   |   |   |   ElementaryTypeName #958
|   |   |   |   VariableDeclaration #961 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #960
|   |   |   OverrideSpecifier #963
|   |   |   ModifierInvocation #966
|   |   |   |   Identifier #964
|   |   |   |   Identifier #965
|   |   |   ParameterList #970
|   |   |   |   VariableDeclaration #969 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #968
|   |   |   |   |   |   ElementaryTypeName #967
|   |   |   Block #1021
|   |   |   |   ExpressionStatement #979
|   |   |   |   |   Assignment #978
|   |   |   |   |   |   Identifier #971
|   |   |   |   |   |   FunctionCall #977
|   |   |   |   |   |   |   MemberAccess #973
|   |   |   |   |   |   |   |   Identifier #972
|   |   |   |   |   |   |   Identifier #974
|   |   |   |   |   |   |   Identifier #975
|   |   |   |   |   |   |   Identifier #976
|   |   |   |   ExpressionStatement #991
|   |   |   |   |   FunctionCall #990
|   |   |   |   |   |   Identifier #980
|   |   |   |   |   |   BinaryOperation #988
|   |   |   |   |   |   |   IndexAccess #986
|   |   |   |   |   |   |   |   Identifier #981
|   |   |   |   |   |   |   |   BinaryOperation #985
|   |   |   |   |   |   |   |   |   MemberAccess #983
|   |   |   |   |   |   |   |   |   |   Identifier #982
|   |   |   |   |   |   |   |   |   Literal #984
|   |   |   |   |   |   |   Identifier #987
|   |   |   |   |   |   Literal #989
|   |   |   |   ExpressionStatement #1014
|   |   |   |   |   FunctionCall #1013
|   |   |   |   |   |   MemberAccess #994
|   |   |   |   |   |   |   Identifier #992
|   |   |   |   |   |   IndexAccess #997
|   |   |   |   |   |   |   Identifier #995
|   |   |   |   |   |   |   Literal #996
|   |   |   |   |   |   MemberAccess #999
|   |   |   |   |   |   |   Identifier #998
|   |   |   |   |   |   FunctionCall #1009
|   |   |   |   |   |   |   MemberAccess #1001
|   |   |   |   |   |   |   |   Identifier #1000
|   |   |   |   |   |   |   Identifier #1002
|   |   |   |   |   |   |   IndexAccess #1005
|   |   |   |   |   |   |   |   Identifier #1003
|   |   |   |   |   |   |   |   Literal #1004
|   |   |   |   |   |   |   IndexAccess #1008
|   |   |   |   |   |   |   |   Identifier #1006
|   |   |   |   |   |   |   |   Literal #1007
|   |   |   |   |   |   IndexAccess #1012
|   |   |   |   |   |   |   Identifier #1010
|   |   |   |   |   |   |   Literal #1011
|   |   |   |   ExpressionStatement #1020
|   |   |   |   |   FunctionCall #1019
|   |   |   |   |   |   Identifier #1015
|   |   |   |   |   |   Identifier #1016
|   |   |   |   |   |   Identifier #1017
|   |   |   |   |   |   Identifier #1018
|   |   FunctionDefinition #1091 -> swapTokensForExactTokens(uint256,uint256,address[],address,uint256) [selector: 8803dbee]
|   |   |   ParameterList #1034
|   |   |   |   VariableDeclaration #1024 -> uint256 amountOut
|   |   |   |   |   ElementaryTypeName #1023
|   |   |   |   VariableDeclaration #1026 -> uint256 amountInMax
|   |   |   |   |   ElementaryTypeName #1025
|   |   |   |   VariableDeclaration #1029 -> address[] path
|   |   |   |   |   ArrayTypeName #1028
|   |   |   |   |   |   ElementaryTypeName #1027
|   |   |   |   VariableDeclaration #1031 -> address to
|   |   |   |   |   ElementaryTypeName #1030
|   |   |   |   VariableDeclaration #1033 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #1032
|   |   |   OverrideSpecifier #1035
|   |   |   ModifierInvocation #1038
|   |   |   |   Identifier #1036
|   |   |   |   Identifier #1037
|   |   |   ParameterList #1042
|   |   |   |   VariableDeclaration #1041 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #1040
|   |   |   |   |   |   ElementaryTypeName #1039
|   |   |   Block #1090
|   |   |   |   ExpressionStatement #1051
|   |   |   |   |   Assignment #1050
|   |   |   |   |   |   Identifier #1043
|   |   |   |   |   |   FunctionCall #1049
|   |   |   |   |   |   |   MemberAccess #1045
|   |   |   |   |   |   |   |   Identifier #1044
|   |   |   |   |   |   |   Identifier #1046
|   |   |   |   |   |   |   Identifier #1047
|   |   |   |   |   |   |   Identifier #1048
|   |   |   |   ExpressionStatement #1060
|   |   |   |   |   FunctionCall #1059
|   |   |   |   |   |   Identifier #1052
|   |   |   |   |   |   BinaryOperation #1057
|   |   |   |   |   |   |   IndexAccess #1055
|   |   |   |   |   |   |   |   Identifier #1053
|   |   |   |   |   |   |   |   Literal #1054
|   |   |   |   |   |   |   Identifier #1056
|   |   |   |   |   |   Literal #1058
|   |   |   |   ExpressionStatement #1083
|   |   |   |   |   FunctionCall #1082
|   |   |   |   |   |   MemberAccess #1063
|   |   |   |   |   |   |   Identifier #1061
|   |   |   |   |   |   IndexAccess #1066
|   |   |   |   |   |   |   Identifier #1064
|   |   |   |   |   |   |   Literal #1065
|   |   |   |   |   |   MemberAccess #1068
|   |   |   |   |   |   |   Identifier #1067
|   |   |   |   |   |   FunctionCall #1078
|   |   |   |   |   |   |   MemberAccess #1070
|   |   |   |   |   |   |   |   Identifier #1069
|   |   |   |   |   |   |   Identifier #1071
|   |   |   |   |   |   |   IndexAccess #1074
|   |   |   |   |   |   |   |   Identifier #1072
|   |   |   |   |   |   |   |   Literal #1073
|   |   |   |   |   |   |   IndexAccess #1077
|   |   |   |   |   |   |   |   Identifier #1075
|   |   |   |   |   |   |   |   Literal #1076
|   |   |   |   |   |   IndexAccess #1081
|   |   |   |   |   |   |   Identifier #1079
|   |   |   |   |   |   |   Literal #1080
|   |   |   |   ExpressionStatement #1089
|   |   |   |   |   FunctionCall #1088
|   |   |   |   |   |   Identifier #1084
|   |   |   |   |   |   Identifier #1085
|   |   |   |   |   |   Identifier #1086
|   |   |   |   |   |   Identifier #1087
|   |   FunctionDefinition #1179 -> swapExactETHForTokens(uint256,address[],address,uint256) [selector: 7ff36ab5]
|   |   |   ParameterList #1101
|   |   |   |   VariableDeclaration #1093 -> uint256 amountOutMin
|   |   |   |   |   ElementaryTypeName #1092
|   |   |   |   VariableDeclaration #1096 -> address[] path
|   |   |   |   |   ArrayTypeName #1095
|   |   |   |   |   |   ElementaryTypeName #1094
|   |   |   |   VariableDeclaration #1098 -> address to
|   |   |   |   |   ElementaryTypeName #1097
|   |   |   |   VariableDeclaration #1100 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #1099
|   |   |   OverrideSpecifier #1102
|   |   |   ModifierInvocation #1105
|   |   |   |   Identifier #1103
|   |   |   |   Identifier #1104
|   |   |   ParameterList #1109
|   |   |   |   VariableDeclaration #1108 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #1107
|   |   |   |   |   |   ElementaryTypeName #1106
|   |   |   Block #1178
|   |   |   |   ExpressionStatement #1118
|   |   |   |   |   FunctionCall #1117
|   |   |   |   |   |   Identifier #1110
|   |   |   |   |   |   BinaryOperation #1115
|   |   |   |   |   |   |   IndexAccess #1113
|   |   |   |   |   |   |   |   Identifier #1111
|   |   |   |   |   |   |   |   Literal #1112
|   |   |   |   |   |   |   Identifier #1114
|   |   |   |   |   |   Literal #1116
|   |   |   |   ExpressionStatement #1128
|   |   |   |   |   Assignment #1127
|   |   |   |   |   |   Identifier #1119
|   |   |   |   |   |   FunctionCall #1126
|   |   |   |   |   |   |   MemberAccess #1121
|   |   |   |   |   |   |   |   Identifier #1120
|   |   |   |   |   |   |   Identifier #1122
|   |   |   |   |   |   |   MemberAccess #1124
|   |   |   |   |   |   |   |   Identifier #1123
|   |   |   |   |   |   |   Identifier #1125
|   |   |   |   ExpressionStatement #1140
|   |   |   |   |   FunctionCall #1139
|   |   |   |   |   |   Identifier #1129
|   |   |   |   |   |   BinaryOperation #1137
|   |   |   |   |   |   |   IndexAccess #1135
|   |   |   |   |   |   |   |   Identifier #1130
|   |   |   |   |   |   |   |   BinaryOperation #1134
|   |   |   |   |   |   |   |   |   MemberAccess #1132
|   |   |   |   |   |   |   |   |   |   Identifier #1131
|   |   |   |   |   |   |   |   |   Literal #1133
|   |   |   |   |   |   |   Identifier #1136
|   |   |   |   |   |   Literal #1138
|   |   |   |   ExpressionStatement #1150
|   |   |   |   |   FunctionCall #1149
|   |   |   |   |   |   FunctionCallOptions #1148
|   |   |   |   |   |   |   MemberAccess #1144
|   |   |   |   |   |   |   |   FunctionCall #1143
|   |   |   |   |   |   |   |   |   Identifier #1141
|   |   |   |   |   |   |   |   |   Identifier #1142
|   |   |   |   |   |   |   IndexAccess #1147
|   |   |   |   |   |   |   |   Identifier #1145
|   |   |   |   |   |   |   |   Literal #1146
|   |   |   |   ExpressionStatement #1171
|   |   |   |   |   FunctionCall #1170
|   |   |   |   |   |   Identifier #1151
|   |   |   |   |   |   FunctionCall #1169
|   |   |   |   |   |   |   MemberAccess #1155
|   |   |   |   |   |   |   |   FunctionCall #1154
|   |   |   |   |   |   |   |   |   Identifier #1152
|   |   |   |   |   |   |   |   |   Identifier #1153
|   |   |   |   |   |   |   FunctionCall #1165
|   |   |   |   |   |   |   |   MemberAccess #1157
|   |   |   |   |   |   |   |   |   Identifier #1156
|   |   |   |   |   |   |   |   Identifier #1158
|   |   |   |   |   |   |   |   IndexAccess #1161
|   |   |   |   |   |   |   |   |   Identifier #1159
|   |   |   |   |   |   |   |   |   Literal #1160
|   |   |   |   |   |   |   |   IndexAccess #1164
|   |   |   |   |   |   |   |   |   Identifier #1162
|   |   |   |   |   |   |   |   |   Literal #1163
|   |   |   |   |   |   |   IndexAccess #1168
|   |   |   |   |   |   |   |   Identifier #1166
|   |   |   |   |   |   |   |   Literal #1167
|   |   |   |   ExpressionStatement #1177
|   |   |   |   |   FunctionCall #1176
|   |   |   |   |   |   Identifier #1172
|   |   |   |   |   |   Identifier #1173
|   |   |   |   |   |   Identifier #1174
|   |   |   |   |   |   Identifier #1175
|   |   FunctionDefinition #1287 -> swapTokensForExactETH(uint256,uint256,address[],address,uint256) [selector: 4a25d94a]
|   |   |   ParameterList #1191
|   |   |   |   VariableDeclaration #1181 -> uint256 amountOut
|   |   |   |   |   ElementaryTypeName #1180
|   |   |   |   VariableDeclaration #1183 -> uint256 amountInMax
|   |   |   |   |   ElementaryTypeName #1182
|   |   |   |   VariableDeclaration #1186 -> address[] path
|   |   |   |   |   ArrayTypeName #1185
|   |   |   |   |   |   ElementaryTypeName #1184
|   |   |   |   VariableDeclaration #1188 -> address to
|   |   |   |   |   ElementaryTypeName #1187
|   |   |   |   VariableDeclaration #1190 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #1189
|   |   |   OverrideSpecifier #1192
|   |   |   ModifierInvocation #1195
|   |   |   |   Identifier #1193
|   |   |   |   Identifier #1194
|   |   |   ParameterList #1199
|   |   |   |   VariableDeclaration #1198 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #1197
|   |   |   |   |   |   ElementaryTypeName #1196
|   |   |   Block #1286
|   |   |   |   ExpressionStatement #1211
|   |   |   |   |   FunctionCall #1210
|   |   |   |   |   |   Identifier #1200
|   |   |   |   |   |   BinaryOperation #1208
|   |   |   |   |   |   |   IndexAccess #1206
|   |   |   |   |   |   |   |   Identifier #1201
|   |   |   |   |   |   |   |   BinaryOperation #1205
|   |   |   |   |   |   |   |   |   MemberAccess #1203
|   |   |   |   |   |   |   |   |   |   Identifier #1202
|   |   |   |   |   |   |   |   |   Literal #1204
|   |   |   |   |   |   |   Identifier #1207
|   |   |   |   |   |   Literal #1209
|   |   |   |   ExpressionStatement #1220
|   |   |   |   |   Assignment #1219
|   |   |   |   |   |   Identifier #1212
|   |   |   |   |   |   FunctionCall #1218
|   |   |   |   |   |   |   MemberAccess #1214
|   |   |   |   |   |   |   |   Identifier #1213
|   |   |   |   |   |   |   Identifier #1215
|   |   |   |   |   |   |   Identifier #1216
|   |   |   |   |   |   |   Identifier #1217
|   |   |   |   ExpressionStatement #1229
|   |   |   |   |   FunctionCall #1228
|   |   |   |   |   |   Identifier #1221
|   |   |   |   |   |   BinaryOperation #1226
|   |   |   |   |   |   |   IndexAccess #1224
|   |   |   |   |   |   |   |   Identifier #1222
|   |   |   |   |   |   |   |   Literal #1223
|   |   |   |   |   |   |   Identifier #1225
|   |   |   |   |   |   Literal #1227
|   |   |   |   ExpressionStatement #1252
|   |   |   |   |   FunctionCall #1251
|   |   |   |   |   |   MemberAccess #1232
|   |   |   |   |   |   |   Identifier #1230
|   |   |   |   |   |   IndexAccess #1235
|   |   |   |   |   |   |   Identifier #1233
|   |   |   |   |   |   |   Literal #1234
|   |   |   |   |   |   MemberAccess #1237
|   |   |   |   |   |   |   Identifier #1236
|   |   |   |   |   |   FunctionCall #1247
|   |   |   |   |   |   |   MemberAccess #1239
|   |   |   |   |   |   |   |   Identifier #1238
|   |   |   |   |   |   |   Identifier #1240
|   |   |   |   |   |   |   IndexAccess #1243
|   |   |   |   |   |   |   |   Identifier #1241
|   |   |   |   |   |   |   |   Literal #1242
|   |   |   |   |   |   |   IndexAccess #1246
|   |   |   |   |   |   |   |   Identifier #1244
|   |   |   |   |   |   |   |   Literal #1245
|   |   |   |   |   |   IndexAccess #1250
|   |   |   |   |   |   |   Identifier #1248
|   |   |   |   |   |   |   Literal #1249
|   |   |   |   ExpressionStatement #1261
|   |   |   |   |   FunctionCall #1260
|   |   |   |   |   |   Identifier #1253
|   |   |   |   |   |   Identifier #1254
|   |   |   |   |   |   Identifier #1255
|   |   |   |   |   |   FunctionCall #1259
|   |   |   |   |   |   |   ElementaryTypeNameExpression #1257
|   |   |   |   |   |   |   |   ElementaryTypeName #1256
|   |   |   |   |   |   |   Identifier #1258
|   |   |   |   ExpressionStatement #1273
|   |   |   |   |   FunctionCall #1272
|   |   |   |   |   |   MemberAccess #1265
|   |   |   |   |   |   |   FunctionCall #1264
|   |   |   |   |   |   |   |   Identifier #1262
|   |   |   |   |   |   |   |   Identifier #1263
|   |   |   |   |   |   IndexAccess #1271
|   |   |   |   |   |   |   Identifier #1266
|   |   |   |   |   |   |   BinaryOperation #1270
|   |   |   |   |   |   |   |   MemberAccess #1268
|   |   |   |   |   |   |   |   |   Identifier #1267
|   |   |   |   |   |   |   |   Literal #1269
|   |   |   |   ExpressionStatement #1285
|   |   |   |   |   FunctionCall #1284
|   |   |   |   |   |   MemberAccess #1276
|   |   |   |   |   |   |   Identifier #1274
|   |   |   |   |   |   Identifier #1277
|   |   |   |   |   |   IndexAccess #1283
|   |   |   |   |   |   |   Identifier #1278
|   |   |   |   |   |   |   BinaryOperation #1282
|   |   |   |   |   |   |   |   MemberAccess #1280
|   |   |   |   |   |   |   |   |   Identifier #1279
|   |   |   |   |   |   |   |   Literal #1281
|   |   FunctionDefinition #1398 -> swapExactTokensForETH(uint256,uint256,address[],address,uint256) [selector: 18cbafe5]
|   |   |   ParameterList #1299
|   |   |   |   VariableDeclaration #1289 -> uint256 amountIn
|   |   |   |   |   ElementaryTypeName #1288
|   |   |   |   VariableDeclaration #1291 -> uint256 amountOutMin
|   |   |   |   |   ElementaryTypeName #1290
|   |   |   |   VariableDeclaration #1294 -> address[] path
|   |   |   |   |   ArrayTypeName #1293
|   |   |   |   |   |   ElementaryTypeName #1292
|   |   |   |   VariableDeclaration #1296 -> address to
|   |   |   |   |   ElementaryTypeName #1295
|   |   |   |   VariableDeclaration #1298 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #1297
|   |   |   OverrideSpecifier #1300
|   |   |   ModifierInvocation #1303
|   |   |   |   Identifier #1301
|   |   |   |   Identifier #1302
|   |   |   ParameterList #1307
|   |   |   |   VariableDeclaration #1306 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #1305
|   |   |   |   |   |   ElementaryTypeName #1304
|   |   |   Block #1397
|   |   |   |   ExpressionStatement #1319
|   |   |   |   |   FunctionCall #1318
|   |   |   |   |   |   Identifier #1308
|   |   |   |   |   |   BinaryOperation #1316
|   |   |   |   |   |   |   IndexAccess #1314
|   |   |   |   |   |   |   |   Identifier #1309
|   |   |   |   |   |   |   |   BinaryOperation #1313
|   |   |   |   |   |   |   |   |   MemberAccess #1311
|   |   |   |   |   |   |   |   |   |   Identifier #1310
|   |   |   |   |   |   |   |   |   Literal #1312
|   |   |   |   |   |   |   Identifier #1315
|   |   |   |   |   |   Literal #1317
|   |   |   |   ExpressionStatement #1328
|   |   |   |   |   Assignment #1327
|   |   |   |   |   |   Identifier #1320
|   |   |   |   |   |   FunctionCall #1326
|   |   |   |   |   |   |   MemberAccess #1322
|   |   |   |   |   |   |   |   Identifier #1321
|   |   |   |   |   |   |   Identifier #1323
|   |   |   |   |   |   |   Identifier #1324
|   |   |   |   |   |   |   Identifier #1325
|   |   |   |   ExpressionStatement #1340
|   |   |   |   |   FunctionCall #1339
|   |   |   |   |   |   Identifier #1329
|   |   |   |   |   |   BinaryOperation #1337
|   |   |   |   |   |   |   IndexAccess #1335
|   |   |   |   |   |   |   |   Identifier #1330
|   |   |   |   |   |   |   |   BinaryOperation #1334
|   |   |   |   |   |   |   |   |   MemberAccess #1332
|   |   |   |   |   |   |   |   |   |   Identifier #1331
|   |   |   |   |   |   |   |   |   Literal #1333
|   |   |   |   |   |   |   Identifier #1336
|   |   |   |   |   |   Literal #1338
|   |   |   |   ExpressionStatement #1363
|   |   |   |   |   FunctionCall #1362
|   |   |   |   |   |   MemberAccess #1343
|   |   |   |   |   |   |   Identifier #1341
|   |   |   |   |   |   IndexAccess #1346
|   |   |   |   |   |   |   Identifier #1344
|   |   |   |   |   |   |   Literal #1345
|   |   |   |   |   |   MemberAccess #1348
|   |   |   |   |   |   |   Identifier #1347
|   |   |   |   |   |   FunctionCall #1358
|   |   |   |   |   |   |   MemberAccess #1350
|   |   |   |   |   |   |   |   Identifier #1349
|   |   |   |   |   |   |   Identifier #1351
|   |   |   |   |   |   |   IndexAccess #1354
|   |   |   |   |   |   |   |   Identifier #1352
|   |   |   |   |   |   |   |   Literal #1353
|   |   |   |   |   |   |   IndexAccess #1357
|   |   |   |   |   |   |   |   Identifier #1355
|   |   |   |   |   |   |   |   Literal #1356
|   |   |   |   |   |   IndexAccess #1361
|   |   |   |   |   |   |   Identifier #1359
|   |   |   |   |   |   |   Literal #1360
|   |   |   |   ExpressionStatement #1372
|   |   |   |   |   FunctionCall #1371
|   |   |   |   |   |   Identifier #1364
|   |   |   |   |   |   Identifier #1365
|   |   |   |   |   |   Identifier #1366
|   |   |   |   |   |   FunctionCall #1370
|   |   |   |   |   |   |   ElementaryTypeNameExpression #1368
|   |   |   |   |   |   |   |   ElementaryTypeName #1367
|   |   |   |   |   |   |   Identifier #1369
|   |   |   |   ExpressionStatement #1384
|   |   |   |   |   FunctionCall #1383
|   |   |   |   |   |   MemberAccess #1376
|   |   |   |   |   |   |   FunctionCall #1375
|   |   |   |   |   |   |   |   Identifier #1373
|   |   |   |   |   |   |   |   Identifier #1374
|   |   |   |   |   |   IndexAccess #1382
|   |   |   |   |   |   |   Identifier #1377
|   |   |   |   |   |   |   BinaryOperation #1381
|   |   |   |   |   |   |   |   MemberAccess #1379
|   |   |   |   |   |   |   |   |   Identifier #1378
|   |   |   |   |   |   |   |   Literal #1380
|   |   |   |   ExpressionStatement #1396
|   |   |   |   |   FunctionCall #1395
|   |   |   |   |   |   MemberAccess #1387
|   |   |   |   |   |   |   Identifier #1385
|   |   |   |   |   |   Identifier #1388
|   |   |   |   |   |   IndexAccess #1394
|   |   |   |   |   |   |   Identifier #1389
|   |   |   |   |   |   |   BinaryOperation #1393
|   |   |   |   |   |   |   |   MemberAccess #1391
|   |   |   |   |   |   |   |   |   Identifier #1390
|   |   |   |   |   |   |   |   Literal #1392
|   |   FunctionDefinition #1503 -> swapETHForExactTokens(uint256,address[],address,uint256) [selector: fb3bdb41]
|   |   |   ParameterList #1408
|   |   |   |   VariableDeclaration #1400 -> uint256 amountOut
|   |   |   |   |   ElementaryTypeName #1399
|   |   |   |   VariableDeclaration #1403 -> address[] path
|   |   |   |   |   ArrayTypeName #1402
|   |   |   |   |   |   ElementaryTypeName #1401
|   |   |   |   VariableDeclaration #1405 -> address to
|   |   |   |   |   ElementaryTypeName #1404
|   |   |   |   VariableDeclaration #1407 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #1406
|   |   |   OverrideSpecifier #1409
|   |   |   ModifierInvocation #1412
|   |   |   |   Identifier #1410
|   |   |   |   Identifier #1411
|   |   |   ParameterList #1416
|   |   |   |   VariableDeclaration #1415 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #1414
|   |   |   |   |   |   ElementaryTypeName #1413
|   |   |   Block #1502
|   |   |   |   ExpressionStatement #1425
|   |   |   |   |   FunctionCall #1424
|   |   |   |   |   |   Identifier #1417
|   |   |   |   |   |   BinaryOperation #1422
|   |   |   |   |   |   |   IndexAccess #1420
|   |   |   |   |   |   |   |   Identifier #1418
|   |   |   |   |   |   |   |   Literal #1419
|   |   |   |   |   |   |   Identifier #1421
|   |   |   |   |   |   Literal #1423
|   |   |   |   ExpressionStatement #1434
|   |   |   |   |   Assignment #1433
|   |   |   |   |   |   Identifier #1426
|   |   |   |   |   |   FunctionCall #1432
|   |   |   |   |   |   |   MemberAccess #1428
|   |   |   |   |   |   |   |   Identifier #1427
|   |   |   |   |   |   |   Identifier #1429
|   |   |   |   |   |   |   Identifier #1430
|   |   |   |   |   |   |   Identifier #1431
|   |   |   |   ExpressionStatement #1444
|   |   |   |   |   FunctionCall #1443
|   |   |   |   |   |   Identifier #1435
|   |   |   |   |   |   BinaryOperation #1441
|   |   |   |   |   |   |   IndexAccess #1438
|   |   |   |   |   |   |   |   Identifier #1436
|   |   |   |   |   |   |   |   Literal #1437
|   |   |   |   |   |   |   MemberAccess #1440
|   |   |   |   |   |   |   |   Identifier #1439
|   |   |   |   |   |   Literal #1442
|   |   |   |   ExpressionStatement #1454
|   |   |   |   |   FunctionCall #1453
|   |   |   |   |   |   FunctionCallOptions #1452
|   |   |   |   |   |   |   MemberAccess #1448
|   |   |   |   |   |   |   |   FunctionCall #1447
|   |   |   |   |   |   |   |   |   Identifier #1445
|   |   |   |   |   |   |   |   |   Identifier #1446
|   |   |   |   |   |   |   IndexAccess #1451
|   |   |   |   |   |   |   |   Identifier #1449
|   |   |   |   |   |   |   |   Literal #1450
|   |   |   |   ExpressionStatement #1475
|   |   |   |   |   FunctionCall #1474
|   |   |   |   |   |   Identifier #1455
|   |   |   |   |   |   FunctionCall #1473
|   |   |   |   |   |   |   MemberAccess #1459
|   |   |   |   |   |   |   |   FunctionCall #1458
|   |   |   |   |   |   |   |   |   Identifier #1456
|   |   |   |   |   |   |   |   |   Identifier #1457
|   |   |   |   |   |   |   FunctionCall #1469
|   |   |   |   |   |   |   |   MemberAccess #1461
|   |   |   |   |   |   |   |   |   Identifier #1460
|   |   |   |   |   |   |   |   Identifier #1462
|   |   |   |   |   |   |   |   IndexAccess #1465
|   |   |   |   |   |   |   |   |   Identifier #1463
|   |   |   |   |   |   |   |   |   Literal #1464
|   |   |   |   |   |   |   |   IndexAccess #1468
|   |   |   |   |   |   |   |   |   Identifier #1466
|   |   |   |   |   |   |   |   |   Literal #1467
|   |   |   |   |   |   |   IndexAccess #1472
|   |   |   |   |   |   |   |   Identifier #1470
|   |   |   |   |   |   |   |   Literal #1471
|   |   |   |   ExpressionStatement #1481
|   |   |   |   |   FunctionCall #1480
|   |   |   |   |   |   Identifier #1476
|   |   |   |   |   |   Identifier #1477
|   |   |   |   |   |   Identifier #1478
|   |   |   |   |   |   Identifier #1479
|   |   |   |   IfStatement #1501
|   |   |   |   |   BinaryOperation #1487
|   |   |   |   |   |   MemberAccess #1483
|   |   |   |   |   |   |   Identifier #1482
|   |   |   |   |   |   IndexAccess #1486
|   |   |   |   |   |   |   Identifier #1484
|   |   |   |   |   |   |   Literal #1485
|   |   |   |   |   ExpressionStatement #1500
|   |   |   |   |   |   FunctionCall #1499
|   |   |   |   |   |   |   MemberAccess #1490
|   |   |   |   |   |   |   |   Identifier #1488
|   |   |   |   |   |   |   MemberAccess #1492
|   |   |   |   |   |   |   |   Identifier #1491
|   |   |   |   |   |   |   BinaryOperation #1498
|   |   |   |   |   |   |   |   MemberAccess #1494
|   |   |   |   |   |   |   |   |   Identifier #1493
|   |   |   |   |   |   |   |   IndexAccess #1497
|   |   |   |   |   |   |   |   |   Identifier #1495
|   |   |   |   |   |   |   |   |   Literal #1496
|   |   FunctionDefinition #1667 -> _swapSupportingFeeOnTransferTokens(address[],address) [selector: d1c474e3]
|   |   |   ParameterList #1509
|   |   |   |   VariableDeclaration #1506 -> address[] path
|   |   |   |   |   ArrayTypeName #1505
|   |   |   |   |   |   ElementaryTypeName #1504
|   |   |   |   VariableDeclaration #1508 -> address _to
|   |   |   |   |   ElementaryTypeName #1507
|   |   |   ParameterList #1510
|   |   |   Block #1666
|   |   |   |   ForStatement #1665
|   |   |   |   |   VariableDeclarationStatement #1513
|   |   |   |   |   |   VariableDeclaration #1512 -> uint256 i
|   |   |   |   |   |   |   ElementaryTypeName #1511
|   |   |   |   |   BinaryOperation #1519
|   |   |   |   |   |   Identifier #1514
|   |   |   |   |   |   BinaryOperation #1518
|   |   |   |   |   |   |   MemberAccess #1516
|   |   |   |   |   |   |   |   Identifier #1515
|   |   |   |   |   |   |   Literal #1517
|   |   |   |   |   ExpressionStatement #1522
|   |   |   |   |   |   UnaryOperation #1521
|   |   |   |   |   |   |   Identifier #1520
|   |   |   |   |   Block #1664
|   |   |   |   |   |   VariableDeclarationStatement #1536
|   |   |   |   |   |   |   VariableDeclaration #1524 -> address input
|   |   |   |   |   |   |   |   ElementaryTypeName #1523
|   |   |   |   |   |   |   VariableDeclaration #1526 -> address output
|   |   |   |   |   |   |   |   ElementaryTypeName #1525
|   |   |   |   |   |   |   TupleExpression #1535
|   |   |   |   |   |   |   |   IndexAccess #1529
|   |   |   |   |   |   |   |   |   Identifier #1527
|   |   |   |   |   |   |   |   |   Identifier #1528
|   |   |   |   |   |   |   |   IndexAccess #1534
|   |   |   |   |   |   |   |   |   Identifier #1530
|   |   |   |   |   |   |   |   |   BinaryOperation #1533
|   |   |   |   |   |   |   |   |   |   Identifier #1531
|   |   |   |   |   |   |   |   |   |   Literal #1532
|   |   |   |   |   |   VariableDeclarationStatement #1544
|   |   |   |   |   |   |   VariableDeclaration #1538 -> address token0
|   |   |   |   |   |   |   |   ElementaryTypeName #1537
|   |   |   |   |   |   |   FunctionCall #1543
|   |   |   |   |   |   |   |   MemberAccess #1540
|   |   |   |   |   |   |   |   |   Identifier #1539
|   |   |   |   |   |   |   |   Identifier #1541
|   |   |   |   |   |   |   |   Identifier #1542
|   |   |   |   |   |   VariableDeclarationStatement #1555
|   |   |   |   |   |   |   VariableDeclaration #1546 -> contract IUniswapV2Pair pair
|   |   |   |   |   |   |   |   UserDefinedTypeName #1545
|   |   |   |   |   |   |   FunctionCall #1554
|   |   |   |   |   |   |   |   Identifier #1547
|   |   |   |   |   |   |   |   FunctionCall #1553
|   |   |   |   |   |   |   |   |   MemberAccess #1549
|   |   |   |   |   |   |   |   |   |   Identifier #1548
|   |   |   |   |   |   |   |   |   Identifier #1550
|   |   |   |   |   |   |   |   |   Identifier #1551
|   |   |   |   |   |   |   |   |   Identifier #1552
|   |   |   |   |   |   VariableDeclarationStatement #1558
|   |   |   |   |   |   |   VariableDeclaration #1557 -> uint256 amountInput
|   |   |   |   |   |   |   |   ElementaryTypeName #1556
|   |   |   |   |   |   VariableDeclarationStatement #1561
|   |   |   |   |   |   |   VariableDeclaration #1560 -> uint256 amountOutput
|   |   |   |   |   |   |   |   ElementaryTypeName #1559
|   |   |   |   |   |   Block #1609
|   |   |   |   |   |   |   VariableDeclarationStatement #1569
|   |   |   |   |   |   |   |   VariableDeclaration #1563 -> uint256 reserve0
|   |   |   |   |   |   |   |   |   ElementaryTypeName #1562
|   |   |   |   |   |   |   |   VariableDeclaration #1565 -> uint256 reserve1
|   |   |   |   |   |   |   |   |   ElementaryTypeName #1564
|   |   |   |   |   |   |   |   FunctionCall #1568
|   |   |   |   |   |   |   |   |   MemberAccess #1567
|   |   |   |   |   |   |   |   |   |   Identifier #1566
|   |   |   |   |   |   |   VariableDeclarationStatement #1584
|   |   |   |   |   |   |   |   VariableDeclaration #1571 -> uint256 reserveInput
|   |   |   |   |   |   |   |   |   ElementaryTypeName #1570
|   |   |   |   |   |   |   |   VariableDeclaration #1573 -> uint256 reserveOutput
|   |   |   |   |   |   |   |   |   ElementaryTypeName #1572
|   |   |   |   |   |   |   |   Conditional #1583
|   |   |   |   |   |   |   |   |   BinaryOperation #1576
|   |   |   |   |   |   |   |   |   |   Identifier #1574
|   |   |   |   |   |   |   |   |   |   Identifier #1575
|   |   |   |   |   |   |   |   |   TupleExpression #1579
|   |   |   |   |   |   |   |   |   |   Identifier #1577
|   |   |   |   |   |   |   |   |   |   Identifier #1578
|   |   |   |   |   |   |   |   |   TupleExpression #1582
|   |   |   |   |   |   |   |   |   |   Identifier #1580
|   |   |   |   |   |   |   |   |   |   Identifier #1581
|   |   |   |   |   |   |   ExpressionStatement #1599
|   |   |   |   |   |   |   |   Assignment #1598
|   |   |   |   |   |   |   |   |   Identifier #1585
|   |   |   |   |   |   |   |   |   FunctionCall #1597
|   |   |   |   |   |   |   |   |   |   MemberAccess #1595
|   |   |   |   |   |   |   |   |   |   |   FunctionCall #1594
|   |   |   |   |   |   |   |   |   |   |   |   MemberAccess #1589
|   |   |   |   |   |   |   |   |   |   |   |   |   FunctionCall #1588
|   |   |   |   |   |   |   |   |   |   |   |   |   |   Identifier #1586
|   |   |   |   |   |   |   |   |   |   |   |   |   |   Identifier #1587
|   |   |   |   |   |   |   |   |   |   |   |   FunctionCall #1593
|   |   |   |   |   |   |   |   |   |   |   |   |   ElementaryTypeNameExpression #1591
|   |   |   |   |   |   |   |   |   |   |   |   |   |   ElementaryTypeName #1590
|   |   |   |   |   |   |   |   |   |   |   |   |   Identifier #1592
|   |   |   |   |   |   |   |   |   |   Identifier #1596
|   |   |   |   |   |   |   ExpressionStatement #1608
|   |   |   |   |   |   |   |   Assignment #1607
|   |   |   |   |   |   |   |   |   Identifier #1600
|   |   |   |   |   |   |   |   |   FunctionCall #1606
|   |   |   |   |   |   |   |   |   |   MemberAccess #1602
|   |   |   |   |   |   |   |   |   |   |   Identifier #1601
|   |   |   |   |   |   |   |   |   |   Identifier #1603
|   |   |   |   |   |   |   |   |   |   Identifier #1604
|   |   |   |   |   |   |   |   |   |   Identifier #1605
|   |   |   |   |   |   VariableDeclarationStatement #1630
|   |   |   |   |   |   |   VariableDeclaration #1611 -> uint256 amount0Out
|   |   |   |   |   |   |   |   ElementaryTypeName #1610
|   |   |   |   |   |   |   VariableDeclaration #1613 -> uint256 amount1Out
|   |   |   |   |   |   |   |   ElementaryTypeName #1612
|   |   |   |   |   |   |   Conditional #1629
|   |   |   |   |   |   |   |   BinaryOperation #1616
|   |   |   |   |   |   |   |   |   Identifier #1614
|   |   |   |   |   |   |   |   |   Identifier #1615
|   |   |   |   |   |   |   |   TupleExpression #1622
|   |   |   |   |   |   |   |   |   FunctionCall #1620
|   |   |   |   |   |   |   |   |   |   ElementaryTypeNameExpression #1618
|   |   |   |   |   |   |   |   |   |   |   ElementaryTypeName #1617
|   |   |   |   |   |   |   |   |   |   Literal #1619
|   |   |   |   |   |   |   |   |   Identifier #1621
|   |   |   |   |   |   |   |   TupleExpression #1628
|   |   |   |   |   |   |   |   |   Identifier #1623
|   |   |   |   |   |   |   |   |   FunctionCall #1627
|   |   |   |   |   |   |   |   |   |   ElementaryTypeNameExpression #1625
|   |   |   |   |   |   |   |   |   |   |   ElementaryTypeName #1624
|   |   |   |   |   |   |   |   |   |   Literal #1626
|   |   |   |   |   |   VariableDeclarationStatement #1651
|   |   |   |   |   |   |   VariableDeclaration #1632 -> address to
|   |   |   |   |   |   |   |   ElementaryTypeName #1631
|   |   |   |   |   |   |   Conditional #1650
|   |   |   |   |   |   |   |   BinaryOperation #1638
|   |   |   |   |   |   |   |   |   Identifier #1633
|   |   |   |   |   |   |   |   |   BinaryOperation #1637
|   |   |   |   |   |   |   |   |   |   MemberAccess #1635
|   |   |   |   |   |   |   |   |   |   |   Identifier #1634
|   |   |   |   |   |   |   |   |   |   Literal #1636
|   |   |   |   |   |   |   |   FunctionCall #1648
|   |   |   |   |   |   |   |   |   MemberAccess #1640
|   |   |   |   |   |   |   |   |   |   Identifier #1639
|   |   |   |   |   |   |   |   |   Identifier #1641
|   |   |   |   |   |   |   |   |   Identifier #1642
|   |   |   |   |   |   |   |   |   IndexAccess #1647
|   |   |   |   |   |   |   |   |   |   Identifier #1643
|   |   |   |   |   |   |   |   |   |   BinaryOperation #1646
|   |   |   |   |   |   |   |   |   |   |   Identifier #1644
|   |   |   |   |   |   |   |   |   |   |   Literal #1645
|   |   |   |   |   |   |   |   Identifier #1649
|   |   |   |   |   |   ExpressionStatement #1663
|   |   |   |   |   |   |   FunctionCall #1662
|   |   |   |   |   |   |   |   MemberAccess #1654
|   |   |   |   |   |   |   |   |   Identifier #1652
|   |   |   |   |   |   |   |   Identifier #1655
|   |   |   |   |   |   |   |   Identifier #1656
|   |   |   |   |   |   |   |   Identifier #1657
|   |   |   |   |   |   |   |   FunctionCall #1661
|   |   |   |   |   |   |   |   |   NewExpression #1659
|   |   |   |   |   |   |   |   |   |   ElementaryTypeName #1658
|   |   |   |   |   |   |   |   |   Literal #1660
|   |   FunctionDefinition #1746 -> swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256) [selector: 5c11d795]
|   |   |   ParameterList #1679
|   |   |   |   VariableDeclaration #1669 -> uint256 amountIn
|   |   |   |   |   ElementaryTypeName #1668
|   |   |   |   VariableDeclaration #1671 -> uint256 amountOutMin
|   |   |   |   |   ElementaryTypeName #1670
|   |   |   |   VariableDeclaration #1674 -> address[] path
|   |   |   |   |   ArrayTypeName #1673
|   |   |   |   |   |   ElementaryTypeName #1672
|   |   |   |   VariableDeclaration #1676 -> address to
|   |   |   |   |   ElementaryTypeName #1675
|   |   |   |   VariableDeclaration #1678 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #1677
|   |   |   OverrideSpecifier #1680
|   |   |   ModifierInvocation #1683
|   |   |   |   Identifier #1681
|   |   |   |   Identifier #1682
|   |   |   ParameterList #1684
|   |   |   Block #1745
|   |   |   |   ExpressionStatement #1705
|   |   |   |   |   FunctionCall #1704
|   |   |   |   |   |   MemberAccess #1687
|   |   |   |   |   |   |   Identifier #1685
|   |   |   |   |   |   IndexAccess #1690
|   |   |   |   |   |   |   Identifier #1688
|   |   |   |   |   |   |   Literal #1689
|   |   |   |   |   |   MemberAccess #1692
|   |   |   |   |   |   |   Identifier #1691
|   |   |   |   |   |   FunctionCall #1702
|   |   |   |   |   |   |   MemberAccess #1694
|   |   |   |   |   |   |   |   Identifier #1693
|   |   |   |   |   |   |   Identifier #1695
|   |   |   |   |   |   |   IndexAccess #1698
|   |   |   |   |   |   |   |   Identifier #1696
|   |   |   |   |   |   |   |   Literal #1697
|   |   |   |   |   |   |   IndexAccess #1701
|   |   |   |   |   |   |   |   Identifier #1699
|   |   |   |   |   |   |   |   Literal #1700
|   |   |   |   |   |   Identifier #1703
|   |   |   |   VariableDeclarationStatement #1719
|   |   |   |   |   VariableDeclaration #1707 -> uint256 balanceBefore
|   |   |   |   |   |   ElementaryTypeName #1706
|   |   |   |   |   FunctionCall #1718
|   |   |   |   |   |   MemberAccess #1716
|   |   |   |   |   |   |   FunctionCall #1715
|   |   |   |   |   |   |   |   Identifier #1708
|   |   |   |   |   |   |   |   IndexAccess #1714
|   |   |   |   |   |   |   |   |   Identifier #1709
|   |   |   |   |   |   |   |   |   BinaryOperation #1713
|   |   |   |   |   |   |   |   |   |   MemberAccess #1711
|   |   |   |   |   |   |   |   |   |   |   Identifier #1710
|   |   |   |   |   |   |   |   |   |   Literal #1712
|   |   |   |   |   |   Identifier #1717
|   |   |   |   ExpressionStatement #1724
|   |   |   |   |   FunctionCall #1723
|   |   |   |   |   |   Identifier #1720
|   |   |   |   |   |   Identifier #1721
|   |   |   |   |   |   Identifier #1722
|   |   |   |   ExpressionStatement #1744
|   |   |   |   |   FunctionCall #1743
|   |   |   |   |   |   Identifier #1725
|   |   |   |   |   |   BinaryOperation #1741
|   |   |   |   |   |   |   FunctionCall #1739
|   |   |   |   |   |   |   |   MemberAccess #1737
|   |   |   |   |   |   |   |   |   FunctionCall #1736
|   |   |   |   |   |   |   |   |   |   MemberAccess #1734
|   |   |   |   |   |   |   |   |   |   |   FunctionCall #1733
|   |   |   |   |   |   |   |   |   |   |   |   Identifier #1726
|   |   |   |   |   |   |   |   |   |   |   |   IndexAccess #1732
|   |   |   |   |   |   |   |   |   |   |   |   |   Identifier #1727
|   |   |   |   |   |   |   |   |   |   |   |   |   BinaryOperation #1731
|   |   |   |   |   |   |   |   |   |   |   |   |   |   MemberAccess #1729
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   Identifier #1728
|   |   |   |   |   |   |   |   |   |   |   |   |   |   Literal #1730
|   |   |   |   |   |   |   |   |   |   Identifier #1735
|   |   |   |   |   |   |   |   Identifier #1738
|   |   |   |   |   |   |   Identifier #1740
|   |   |   |   |   |   Literal #1742
|   |   FunctionDefinition #1843 -> swapExactETHForTokensSupportingFeeOnTransferTokens(uint256,address[],address,uint256) [selector: b6f9de95]
|   |   |   ParameterList #1756
|   |   |   |   VariableDeclaration #1748 -> uint256 amountOutMin
|   |   |   |   |   ElementaryTypeName #1747
|   |   |   |   VariableDeclaration #1751 -> address[] path
|   |   |   |   |   ArrayTypeName #1750
|   |   |   |   |   |   ElementaryTypeName #1749
|   |   |   |   VariableDeclaration #1753 -> address to
|   |   |   |   |   ElementaryTypeName #1752
|   |   |   |   VariableDeclaration #1755 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #1754
|   |   |   OverrideSpecifier #1757
|   |   |   ModifierInvocation #1760
|   |   |   |   Identifier #1758
|   |   |   |   Identifier #1759
|   |   |   ParameterList #1761
|   |   |   Block #1842
|   |   |   |   ExpressionStatement #1770
|   |   |   |   |   FunctionCall #1769
|   |   |   |   |   |   Identifier #1762
|   |   |   |   |   |   BinaryOperation #1767
|   |   |   |   |   |   |   IndexAccess #1765
|   |   |   |   |   |   |   |   Identifier #1763
|   |   |   |   |   |   |   |   Literal #1764
|   |   |   |   |   |   |   Identifier #1766
|   |   |   |   |   |   Literal #1768
|   |   |   |   VariableDeclarationStatement #1775
|   |   |   |   |   VariableDeclaration #1772 -> uint256 amountIn
|   |   |   |   |   |   ElementaryTypeName #1771
|   |   |   |   |   MemberAccess #1774
|   |   |   |   |   |   Identifier #1773
|   |   |   |   ExpressionStatement #1783
|   |   |   |   |   FunctionCall #1782
|   |   |   |   |   |   FunctionCallOptions #1781
|   |   |   |   |   |   |   MemberAccess #1779
|   |   |   |   |   |   |   |   FunctionCall #1778
|   |   |   |   |   |   |   |   |   Identifier #1776
|   |   |   |   |   |   |   |   |   Identifier #1777
|   |   |   |   |   |   |   Identifier #1780
|   |   |   |   ExpressionStatement #1802
|   |   |   |   |   FunctionCall #1801
|   |   |   |   |   |   Identifier #1784
|   |   |   |   |   |   FunctionCall #1800
|   |   |   |   |   |   |   MemberAccess #1788
|   |   |   |   |   |   |   |   FunctionCall #1787
|   |   |   |   |   |   |   |   |   Identifier #1785
|   |   |   |   |   |   |   |   |   Identifier #1786
|   |   |   |   |   |   |   FunctionCall #1798
|   |   |   |   |   |   |   |   MemberAccess #1790
|   |   |   |   |   |   |   |   |   Identifier #1789
|   |   |   |   |   |   |   |   Identifier #1791
|   |   |   |   |   |   |   |   IndexAccess #1794
|   |   |   |   |   |   |   |   |   Identifier #1792
|   |   |   |   |   |   |   |   |   Literal #1793
|   |   |   |   |   |   |   |   IndexAccess #1797
|   |   |   |   |   |   |   |   |   Identifier #1795
|   |   |   |   |   |   |   |   |   Literal #1796
|   |   |   |   |   |   |   Identifier #1799
|   |   |   |   VariableDeclarationStatement #1816
|   |   |   |   |   VariableDeclaration #1804 -> uint256 balanceBefore
|   |   |   |   |   |   ElementaryTypeName #1803
|   |   |   |   |   FunctionCall #1815
|   |   |   |   |   |   MemberAccess #1813
|   |   |   |   |   |   |   FunctionCall #1812
|   |   |   |   |   |   |   |   Identifier #1805
|   |   |   |   |   |   |   |   IndexAccess #1811
|   |   |   |   |   |   |   |   |   Identifier #1806
|   |   |   |   |   |   |   |   |   BinaryOperation #1810
|   |   |   |   |   |   |   |   |   |   MemberAccess #1808
|   |   |   |   |   |   |   |   |   |   |   Identifier #1807
|   |   |   |   |   |   |   |   |   |   Literal #1809
|   |   |   |   |   |   Identifier #1814
|   |   |   |   ExpressionStatement #1821
|   |   |   |   |   FunctionCall #1820
|   |   |   |   |   |   Identifier #1817
|   |   |   |   |   |   Identifier #1818
|   |   |   |   |   |   Identifier #1819
|   |   |   |   ExpressionStatement #1841
|   |   |   |   |   FunctionCall #1840
|   |   |   |   |   |   Identifier #1822
|   |   |   |   |   |   BinaryOperation #1838
|   |   |   |   |   |   |   FunctionCall #1836
|   |   |   |   |   |   |   |   MemberAccess #1834
|   |   |   |   |   |   |   |   |   FunctionCall #1833
|   |   |   |   |   |   |   |   |   |   MemberAccess #1831
|   |   |   |   |   |   |   |   |   |   |   FunctionCall #1830
|   |   |   |   |   |   |   |   |   |   |   |   Identifier #1823
|   |   |   |   |   |   |   |   |   |   |   |   IndexAccess #1829
|   |   |   |   |   |   |   |   |   |   |   |   |   Identifier #1824
|   |   |   |   |   |   |   |   |   |   |   |   |   BinaryOperation #1828
|   |   |   |   |   |   |   |   |   |   |   |   |   |   MemberAccess #1826
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   Identifier #1825
|   |   |   |   |   |   |   |   |   |   |   |   |   |   Literal #1827
|   |   |   |   |   |   |   |   |   |   Identifier #1832
|   |   |   |   |   |   |   |   Identifier #1835
|   |   |   |   |   |   |   Identifier #1837
|   |   |   |   |   |   Literal #1839
|   |   FunctionDefinition #1936 -> swapExactTokensForETHSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256) [selector: 791ac947]
|   |   |   ParameterList #1855
|   |   |   |   VariableDeclaration #1845 -> uint256 amountIn
|   |   |   |   |   ElementaryTypeName #1844
|   |   |   |   VariableDeclaration #1847 -> uint256 amountOutMin
|   |   |   |   |   ElementaryTypeName #1846
|   |   |   |   VariableDeclaration #1850 -> address[] path
|   |   |   |   |   ArrayTypeName #1849
|   |   |   |   |   |   ElementaryTypeName #1848
|   |   |   |   VariableDeclaration #1852 -> address to
|   |   |   |   |   ElementaryTypeName #1851
|   |   |   |   VariableDeclaration #1854 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #1853
|   |   |   OverrideSpecifier #1856
|   |   |   ModifierInvocation #1859
|   |   |   |   Identifier #1857
|   |   |   |   Identifier #1858
|   |   |   ParameterList #1860
|   |   |   Block #1935
|   |   |   |   ExpressionStatement #1872
|   |   |   |   |   FunctionCall #1871
|   |   |   |   |   |   Identifier #1861
|   |   |   |   |   |   BinaryOperation #1869
|   |   |   |   |   |   |   IndexAccess #1867
|   |   |   |   |   |   |   |   Identifier #1862
|   |   |   |   |   |   |   |   BinaryOperation #1866
|   |   |   |   |   |   |   |   |   MemberAccess #1864
|   |   |   |   |   |   |   |   |   |   Identifier #1863
|   |   |   |   |   |   |   |   |   Literal #1865
|   |   |   |   |   |   |   Identifier #1868
|   |   |   |   |   |   Literal #1870
|   |   |   |   ExpressionStatement #1893
|   |   |   |   |   FunctionCall #1892
|   |   |   |   |   |   MemberAccess #1875
|   |   |   |   |   |   |   Identifier #1873
|   |   |   |   |   |   IndexAccess #1878
|   |   |   |   |   |   |   Identifier #1876
|   |   |   |   |   |   |   Literal #1877
|   |   |   |   |   |   MemberAccess #1880
|   |   |   |   |   |   |   Identifier #1879
|   |   |   |   |   |   FunctionCall #1890
|   |   |   |   |   |   |   MemberAccess #1882
|   |   |   |   |   |   |   |   Identifier #1881
|   |   |   |   |   |   |   Identifier #1883
|   |   |   |   |   |   |   IndexAccess #1886
|   |   |   |   |   |   |   |   Identifier #1884
|   |   |   |   |   |   |   |   Literal #1885
|   |   |   |   |   |   |   IndexAccess #1889
|   |   |   |   |   |   |   |   Identifier #1887
|   |   |   |   |   |   |   |   Literal #1888
|   |   |   |   |   |   Identifier #1891
|   |   |   |   ExpressionStatement #1901
|   |   |   |   |   FunctionCall #1900
|   |   |   |   |   |   Identifier #1894
|   |   |   |   |   |   Identifier #1895
|   |   |   |   |   |   FunctionCall #1899
|   |   |   |   |   |   |   ElementaryTypeNameExpression #1897
|   |   |   |   |   |   |   |   ElementaryTypeName #1896
|   |   |   |   |   |   |   Identifier #1898
|   |   |   |   VariableDeclarationStatement #1913
|   |   |   |   |   VariableDeclaration #1903 -> uint256 amountOut
|   |   |   |   |   |   ElementaryTypeName #1902
|   |   |   |   |   FunctionCall #1912
|   |   |   |   |   |   MemberAccess #1907
|   |   |   |   |   |   |   FunctionCall #1906
|   |   |   |   |   |   |   |   Identifier #1904
|   |   |   |   |   |   |   |   Identifier #1905
|   |   |   |   |   |   FunctionCall #1911
|   |   |   |   |   |   |   ElementaryTypeNameExpression #1909
|   |   |   |   |   |   |   |   ElementaryTypeName #1908
|   |   |   |   |   |   |   Identifier #1910
|   |   |   |   ExpressionStatement #1920
|   |   |   |   |   FunctionCall #1919
|   |   |   |   |   |   Identifier #1914
|   |   |   |   |   |   BinaryOperation #1917
|   |   |   |   |   |   |   Identifier #1915
|   |   |   |   |   |   |   Identifier #1916
|   |   |   |   |   |   Literal #1918
|   |   |   |   ExpressionStatement #1927
|   |   |   |   |   FunctionCall #1926
|   |   |   |   |   |   MemberAccess #1924
|   |   |   |   |   |   |   FunctionCall #1923
|   |   |   |   |   |   |   |   Identifier #1921
|   |   |   |   |   |   |   |   Identifier #1922
|   |   |   |   |   |   Identifier #1925
|   |   |   |   ExpressionStatement #1934
|   |   |   |   |   FunctionCall #1933
|   |   |   |   |   |   MemberAccess #1930
|   |   |   |   |   |   |   Identifier #1928
|   |   |   |   |   |   Identifier #1931
|   |   |   |   |   |   Identifier #1932
|   |   FunctionDefinition #1956 -> quote(uint256,uint256,uint256) [selector: ad615dec]
|   |   |   ParameterList #1943
|   |   |   |   VariableDeclaration #1938 -> uint256 amountA
|   |   |   |   |   ElementaryTypeName #1937
|   |   |   |   VariableDeclaration #1940 -> uint256 reserveA
|   |   |   |   |   ElementaryTypeName #1939
|   |   |   |   VariableDeclaration #1942 -> uint256 reserveB
|   |   |   |   |   ElementaryTypeName #1941
|   |   |   OverrideSpecifier #1944
|   |   |   ParameterList #1947
|   |   |   |   VariableDeclaration #1946 -> uint256 amountB
|   |   |   |   |   ElementaryTypeName #1945
|   |   |   Block #1955
|   |   |   |   Return #1954
|   |   |   |   |   FunctionCall #1953
|   |   |   |   |   |   MemberAccess #1949
|   |   |   |   |   |   |   Identifier #1948
|   |   |   |   |   |   Identifier #1950
|   |   |   |   |   |   Identifier #1951
|   |   |   |   |   |   Identifier #1952
|   |   FunctionDefinition #1976 -> getAmountOut(uint256,uint256,uint256) [selector: 054d50d4]
|   |   |   ParameterList #1963
|   |   |   |   VariableDeclaration #1958 -> uint256 amountIn
|   |   |   |   |   ElementaryTypeName #1957
|   |   |   |   VariableDeclaration #1960 -> uint256 reserveIn
|   |   |   |   |   ElementaryTypeName #1959
|   |   |   |   VariableDeclaration #1962 -> uint256 reserveOut
|   |   |   |   |   ElementaryTypeName #1961
|   |   |   OverrideSpecifier #1964
|   |   |   ParameterList #1967
|   |   |   |   VariableDeclaration #1966 -> uint256 amountOut
|   |   |   |   |   ElementaryTypeName #1965
|   |   |   Block #1975
|   |   |   |   Return #1974
|   |   |   |   |   FunctionCall #1973
|   |   |   |   |   |   MemberAccess #1969
|   |   |   |   |   |   |   Identifier #1968
|   |   |   |   |   |   Identifier #1970
|   |   |   |   |   |   Identifier #1971
|   |   |   |   |   |   Identifier #1972
|   |   FunctionDefinition #1996 -> getAmountIn(uint256,uint256,uint256) [selector: 85f8c259]
|   |   |   ParameterList #1983
|   |   |   |   VariableDeclaration #1978 -> uint256 amountOut
|   |   |   |   |   ElementaryTypeName #1977
|   |   |   |   VariableDeclaration #1980 -> uint256 reserveIn
|   |   |   |   |   ElementaryTypeName #1979
|   |   |   |   VariableDeclaration #1982 -> uint256 reserveOut
|   |   |   |   |   ElementaryTypeName #1981
|   |   |   OverrideSpecifier #1984
|   |   |   ParameterList #1987
|   |   |   |   VariableDeclaration #1986 -> uint256 amountIn
|   |   |   |   |   ElementaryTypeName #1985
|   |   |   Block #1995
|   |   |   |   Return #1994
|   |   |   |   |   FunctionCall #1993
|   |   |   |   |   |   MemberAccess #1989
|   |   |   |   |   |   |   Identifier #1988
|   |   |   |   |   |   Identifier #1990
|   |   |   |   |   |   Identifier #1991
|   |   |   |   |   |   Identifier #1992
|   |   FunctionDefinition #2016 -> getAmountsOut(uint256,address[]) [selector: d06ca61f]
|   |   |   ParameterList #2002
|   |   |   |   VariableDeclaration #1998 -> uint256 amountIn
|   |   |   |   |   ElementaryTypeName #1997
|   |   |   |   VariableDeclaration #2001 -> address[] path
|   |   |   |   |   ArrayTypeName #2000
|   |   |   |   |   |   ElementaryTypeName #1999
|   |   |   OverrideSpecifier #2003
|   |   |   ParameterList #2007
|   |   |   |   VariableDeclaration #2006 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #2005
|   |   |   |   |   |   ElementaryTypeName #2004
|   |   |   Block #2015
|   |   |   |   Return #2014
|   |   |   |   |   FunctionCall #2013
|   |   |   |   |   |   MemberAccess #2009
|   |   |   |   |   |   |   Identifier #2008
|   |   |   |   |   |   Identifier #2010
|   |   |   |   |   |   Identifier #2011
|   |   |   |   |   |   Identifier #2012
|   |   FunctionDefinition #2036 -> getAmountsIn(uint256,address[]) [selector: 1f00ca74]
|   |   |   ParameterList #2022
|   |   |   |   VariableDeclaration #2018 -> uint256 amountOut
|   |   |   |   |   ElementaryTypeName #2017
|   |   |   |   VariableDeclaration #2021 -> address[] path
|   |   |   |   |   ArrayTypeName #2020
|   |   |   |   |   |   ElementaryTypeName #2019
|   |   |   OverrideSpecifier #2023
|   |   |   ParameterList #2027
|   |   |   |   VariableDeclaration #2026 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #2025
|   |   |   |   |   |   ElementaryTypeName #2024
|   |   |   Block #2035
|   |   |   |   Return #2034
|   |   |   |   |   FunctionCall #2033
|   |   |   |   |   |   MemberAccess #2029
|   |   |   |   |   |   |   Identifier #2028
|   |   |   |   |   |   Identifier #2030
|   |   |   |   |   |   Identifier #2031
|   |   |   |   |   |   Identifier #2032

SourceUnit #2122 -> /Users/sbacha/GPL-V3/uniswapv2/contracts/interfaces/IERC20.sol
|   PragmaDirective #2039
|   ContractDefinition #2121 -> interface IERC20Uniswap [id: 942e8b22]
|   |   EventDefinition #2047
|   |   |   ParameterList #2046
|   |   |   |   VariableDeclaration #2041 -> address owner
|   |   |   |   |   ElementaryTypeName #2040
|   |   |   |   VariableDeclaration #2043 -> address spender
|   |   |   |   |   ElementaryTypeName #2042
|   |   |   |   VariableDeclaration #2045 -> uint256 value
|   |   |   |   |   ElementaryTypeName #2044
|   |   EventDefinition #2055
|   |   |   ParameterList #2054
|   |   |   |   VariableDeclaration #2049 -> address from
|   |   |   |   |   ElementaryTypeName #2048
|   |   |   |   VariableDeclaration #2051 -> address to
|   |   |   |   |   ElementaryTypeName #2050
|   |   |   |   VariableDeclaration #2053 -> uint256 value
|   |   |   |   |   ElementaryTypeName #2052
|   |   FunctionDefinition #2060 -> name() [selector: 06fdde03]
|   |   |   ParameterList #2056
|   |   |   ParameterList #2059
|   |   |   |   VariableDeclaration #2058 -> string
|   |   |   |   |   ElementaryTypeName #2057
|   |   FunctionDefinition #2065 -> symbol() [selector: 95d89b41]
|   |   |   ParameterList #2061
|   |   |   ParameterList #2064
|   |   |   |   VariableDeclaration #2063 -> string
|   |   |   |   |   ElementaryTypeName #2062
|   |   FunctionDefinition #2070 -> decimals() [selector: 313ce567]
|   |   |   ParameterList #2066
|   |   |   ParameterList #2069
|   |   |   |   VariableDeclaration #2068 -> uint8
|   |   |   |   |   ElementaryTypeName #2067
|   |   FunctionDefinition #2075 -> totalSupply() [selector: 18160ddd]
|   |   |   ParameterList #2071
|   |   |   ParameterList #2074
|   |   |   |   VariableDeclaration #2073 -> uint256
|   |   |   |   |   ElementaryTypeName #2072
|   |   FunctionDefinition #2082 -> balanceOf(address) [selector: 70a08231]
|   |   |   ParameterList #2078
|   |   |   |   VariableDeclaration #2077 -> address owner
|   |   |   |   |   ElementaryTypeName #2076
|   |   |   ParameterList #2081
|   |   |   |   VariableDeclaration #2080 -> uint256
|   |   |   |   |   ElementaryTypeName #2079
|   |   FunctionDefinition #2091 -> allowance(address,address) [selector: dd62ed3e]
|   |   |   ParameterList #2087
|   |   |   |   VariableDeclaration #2084 -> address owner
|   |   |   |   |   ElementaryTypeName #2083
|   |   |   |   VariableDeclaration #2086 -> address spender
|   |   |   |   |   ElementaryTypeName #2085
|   |   |   ParameterList #2090
|   |   |   |   VariableDeclaration #2089 -> uint256
|   |   |   |   |   ElementaryTypeName #2088
|   |   FunctionDefinition #2100 -> approve(address,uint256) [selector: 095ea7b3]
|   |   |   ParameterList #2096
|   |   |   |   VariableDeclaration #2093 -> address spender
|   |   |   |   |   ElementaryTypeName #2092
|   |   |   |   VariableDeclaration #2095 -> uint256 value
|   |   |   |   |   ElementaryTypeName #2094
|   |   |   ParameterList #2099
|   |   |   |   VariableDeclaration #2098 -> bool
|   |   |   |   |   ElementaryTypeName #2097
|   |   FunctionDefinition #2109 -> transfer(address,uint256) [selector: a9059cbb]
|   |   |   ParameterList #2105
|   |   |   |   VariableDeclaration #2102 -> address to
|   |   |   |   |   ElementaryTypeName #2101
|   |   |   |   VariableDeclaration #2104 -> uint256 value
|   |   |   |   |   ElementaryTypeName #2103
|   |   |   ParameterList #2108
|   |   |   |   VariableDeclaration #2107 -> bool
|   |   |   |   |   ElementaryTypeName #2106
|   |   FunctionDefinition #2120 -> transferFrom(address,address,uint256) [selector: 23b872dd]
|   |   |   ParameterList #2116
|   |   |   |   VariableDeclaration #2111 -> address from
|   |   |   |   |   ElementaryTypeName #2110
|   |   |   |   VariableDeclaration #2113 -> address to
|   |   |   |   |   ElementaryTypeName #2112
|   |   |   |   VariableDeclaration #2115 -> uint256 value
|   |   |   |   |   ElementaryTypeName #2114
|   |   |   ParameterList #2119
|   |   |   |   VariableDeclaration #2118 -> bool
|   |   |   |   |   ElementaryTypeName #2117

SourceUnit #2195 -> /Users/sbacha/GPL-V3/uniswapv2/contracts/interfaces/IUniswapV2Factory.sol
|   PragmaDirective #2123
|   ContractDefinition #2194 -> interface IUniswapV2Factory [id: 67b49eb2]
|   |   EventDefinition #2133
|   |   |   ParameterList #2132
|   |   |   |   VariableDeclaration #2125 -> address token0
|   |   |   |   |   ElementaryTypeName #2124
|   |   |   |   VariableDeclaration #2127 -> address token1
|   |   |   |   |   ElementaryTypeName #2126
|   |   |   |   VariableDeclaration #2129 -> address pair
|   |   |   |   |   ElementaryTypeName #2128
|   |   |   |   VariableDeclaration #2131 -> uint256
|   |   |   |   |   ElementaryTypeName #2130
|   |   FunctionDefinition #2138 -> feeTo() [selector: 017e7e58]
|   |   |   ParameterList #2134
|   |   |   ParameterList #2137
|   |   |   |   VariableDeclaration #2136 -> address
|   |   |   |   |   ElementaryTypeName #2135
|   |   FunctionDefinition #2143 -> feeToSetter() [selector: 094b7415]
|   |   |   ParameterList #2139
|   |   |   ParameterList #2142
|   |   |   |   VariableDeclaration #2141 -> address
|   |   |   |   |   ElementaryTypeName #2140
|   |   FunctionDefinition #2148 -> migrator() [selector: 7cd07e47]
|   |   |   ParameterList #2144
|   |   |   ParameterList #2147
|   |   |   |   VariableDeclaration #2146 -> address
|   |   |   |   |   ElementaryTypeName #2145
|   |   FunctionDefinition #2157 -> getPair(address,address) [selector: e6a43905]
|   |   |   ParameterList #2153
|   |   |   |   VariableDeclaration #2150 -> address tokenA
|   |   |   |   |   ElementaryTypeName #2149
|   |   |   |   VariableDeclaration #2152 -> address tokenB
|   |   |   |   |   ElementaryTypeName #2151
|   |   |   ParameterList #2156
|   |   |   |   VariableDeclaration #2155 -> address pair
|   |   |   |   |   ElementaryTypeName #2154
|   |   FunctionDefinition #2164 -> allPairs(uint256) [selector: 1e3dd18b]
|   |   |   ParameterList #2160
|   |   |   |   VariableDeclaration #2159 -> uint256
|   |   |   |   |   ElementaryTypeName #2158
|   |   |   ParameterList #2163
|   |   |   |   VariableDeclaration #2162 -> address pair
|   |   |   |   |   ElementaryTypeName #2161
|   |   FunctionDefinition #2169 -> allPairsLength() [selector: 574f2ba3]
|   |   |   ParameterList #2165
|   |   |   ParameterList #2168
|   |   |   |   VariableDeclaration #2167 -> uint256
|   |   |   |   |   ElementaryTypeName #2166
|   |   FunctionDefinition #2178 -> createPair(address,address) [selector: c9c65396]
|   |   |   ParameterList #2174
|   |   |   |   VariableDeclaration #2171 -> address tokenA
|   |   |   |   |   ElementaryTypeName #2170
|   |   |   |   VariableDeclaration #2173 -> address tokenB
|   |   |   |   |   ElementaryTypeName #2172
|   |   |   ParameterList #2177
|   |   |   |   VariableDeclaration #2176 -> address pair
|   |   |   |   |   ElementaryTypeName #2175
|   |   FunctionDefinition #2183 -> setFeeTo(address) [selector: f46901ed]
|   |   |   ParameterList #2181
|   |   |   |   VariableDeclaration #2180 -> address
|   |   |   |   |   ElementaryTypeName #2179
|   |   |   ParameterList #2182
|   |   FunctionDefinition #2188 -> setFeeToSetter(address) [selector: a2e74af6]
|   |   |   ParameterList #2186
|   |   |   |   VariableDeclaration #2185 -> address
|   |   |   |   |   ElementaryTypeName #2184
|   |   |   ParameterList #2187
|   |   FunctionDefinition #2193 -> setMigrator(address) [selector: 23cf3118]
|   |   |   ParameterList #2191
|   |   |   |   VariableDeclaration #2190 -> address
|   |   |   |   |   ElementaryTypeName #2189
|   |   |   ParameterList #2192

SourceUnit #3560 -> /Users/sbacha/GPL-V3/uniswapv2/contracts/interfaces/IUniswapV2Pair.sol
|   PragmaDirective #3319
|   ContractDefinition #3559 -> interface IUniswapV2Pair [id: 0c1c2247]
|   |   EventDefinition #3327
|   |   |   ParameterList #3326
|   |   |   |   VariableDeclaration #3321 -> address owner
|   |   |   |   |   ElementaryTypeName #3320
|   |   |   |   VariableDeclaration #3323 -> address spender
|   |   |   |   |   ElementaryTypeName #3322
|   |   |   |   VariableDeclaration #3325 -> uint256 value
|   |   |   |   |   ElementaryTypeName #3324
|   |   EventDefinition #3335
|   |   |   ParameterList #3334
|   |   |   |   VariableDeclaration #3329 -> address from
|   |   |   |   |   ElementaryTypeName #3328
|   |   |   |   VariableDeclaration #3331 -> address to
|   |   |   |   |   ElementaryTypeName #3330
|   |   |   |   VariableDeclaration #3333 -> uint256 value
|   |   |   |   |   ElementaryTypeName #3332
|   |   FunctionDefinition #3340 -> name() [selector: 06fdde03]
|   |   |   ParameterList #3336
|   |   |   ParameterList #3339
|   |   |   |   VariableDeclaration #3338 -> string
|   |   |   |   |   ElementaryTypeName #3337
|   |   FunctionDefinition #3345 -> symbol() [selector: 95d89b41]
|   |   |   ParameterList #3341
|   |   |   ParameterList #3344
|   |   |   |   VariableDeclaration #3343 -> string
|   |   |   |   |   ElementaryTypeName #3342
|   |   FunctionDefinition #3350 -> decimals() [selector: 313ce567]
|   |   |   ParameterList #3346
|   |   |   ParameterList #3349
|   |   |   |   VariableDeclaration #3348 -> uint8
|   |   |   |   |   ElementaryTypeName #3347
|   |   FunctionDefinition #3355 -> totalSupply() [selector: 18160ddd]
|   |   |   ParameterList #3351
|   |   |   ParameterList #3354
|   |   |   |   VariableDeclaration #3353 -> uint256
|   |   |   |   |   ElementaryTypeName #3352
|   |   FunctionDefinition #3362 -> balanceOf(address) [selector: 70a08231]
|   |   |   ParameterList #3358
|   |   |   |   VariableDeclaration #3357 -> address owner
|   |   |   |   |   ElementaryTypeName #3356
|   |   |   ParameterList #3361
|   |   |   |   VariableDeclaration #3360 -> uint256
|   |   |   |   |   ElementaryTypeName #3359
|   |   FunctionDefinition #3371 -> allowance(address,address) [selector: dd62ed3e]
|   |   |   ParameterList #3367
|   |   |   |   VariableDeclaration #3364 -> address owner
|   |   |   |   |   ElementaryTypeName #3363
|   |   |   |   VariableDeclaration #3366 -> address spender
|   |   |   |   |   ElementaryTypeName #3365
|   |   |   ParameterList #3370
|   |   |   |   VariableDeclaration #3369 -> uint256
|   |   |   |   |   ElementaryTypeName #3368
|   |   FunctionDefinition #3380 -> approve(address,uint256) [selector: 095ea7b3]
|   |   |   ParameterList #3376
|   |   |   |   VariableDeclaration #3373 -> address spender
|   |   |   |   |   ElementaryTypeName #3372
|   |   |   |   VariableDeclaration #3375 -> uint256 value
|   |   |   |   |   ElementaryTypeName #3374
|   |   |   ParameterList #3379
|   |   |   |   VariableDeclaration #3378 -> bool
|   |   |   |   |   ElementaryTypeName #3377
|   |   FunctionDefinition #3389 -> transfer(address,uint256) [selector: a9059cbb]
|   |   |   ParameterList #3385
|   |   |   |   VariableDeclaration #3382 -> address to
|   |   |   |   |   ElementaryTypeName #3381
|   |   |   |   VariableDeclaration #3384 -> uint256 value
|   |   |   |   |   ElementaryTypeName #3383
|   |   |   ParameterList #3388
|   |   |   |   VariableDeclaration #3387 -> bool
|   |   |   |   |   ElementaryTypeName #3386
|   |   FunctionDefinition #3400 -> transferFrom(address,address,uint256) [selector: 23b872dd]
|   |   |   ParameterList #3396
|   |   |   |   VariableDeclaration #3391 -> address from
|   |   |   |   |   ElementaryTypeName #3390
|   |   |   |   VariableDeclaration #3393 -> address to
|   |   |   |   |   ElementaryTypeName #3392
|   |   |   |   VariableDeclaration #3395 -> uint256 value
|   |   |   |   |   ElementaryTypeName #3394
|   |   |   ParameterList #3399
|   |   |   |   VariableDeclaration #3398 -> bool
|   |   |   |   |   ElementaryTypeName #3397
|   |   FunctionDefinition #3405 -> DOMAIN_SEPARATOR() [selector: 3644e515]
|   |   |   ParameterList #3401
|   |   |   ParameterList #3404
|   |   |   |   VariableDeclaration #3403 -> bytes32
|   |   |   |   |   ElementaryTypeName #3402
|   |   FunctionDefinition #3410 -> PERMIT_TYPEHASH() [selector: 30adf81f]
|   |   |   ParameterList #3406
|   |   |   ParameterList #3409
|   |   |   |   VariableDeclaration #3408 -> bytes32
|   |   |   |   |   ElementaryTypeName #3407
|   |   FunctionDefinition #3417 -> nonces(address) [selector: 7ecebe00]
|   |   |   ParameterList #3413
|   |   |   |   VariableDeclaration #3412 -> address owner
|   |   |   |   |   ElementaryTypeName #3411
|   |   |   ParameterList #3416
|   |   |   |   VariableDeclaration #3415 -> uint256
|   |   |   |   |   ElementaryTypeName #3414
|   |   FunctionDefinition #3434 -> permit(address,address,uint256,uint256,uint8,bytes32,bytes32) [selector: d505accf]
|   |   |   ParameterList #3432
|   |   |   |   VariableDeclaration #3419 -> address owner
|   |   |   |   |   ElementaryTypeName #3418
|   |   |   |   VariableDeclaration #3421 -> address spender
|   |   |   |   |   ElementaryTypeName #3420
|   |   |   |   VariableDeclaration #3423 -> uint256 value
|   |   |   |   |   ElementaryTypeName #3422
|   |   |   |   VariableDeclaration #3425 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #3424
|   |   |   |   VariableDeclaration #3427 -> uint8 v
|   |   |   |   |   ElementaryTypeName #3426
|   |   |   |   VariableDeclaration #3429 -> bytes32 r
|   |   |   |   |   ElementaryTypeName #3428
|   |   |   |   VariableDeclaration #3431 -> bytes32 s
|   |   |   |   |   ElementaryTypeName #3430
|   |   |   ParameterList #3433
|   |   EventDefinition #3442
|   |   |   ParameterList #3441
|   |   |   |   VariableDeclaration #3436 -> address sender
|   |   |   |   |   ElementaryTypeName #3435
|   |   |   |   VariableDeclaration #3438 -> uint256 amount0
|   |   |   |   |   ElementaryTypeName #3437
|   |   |   |   VariableDeclaration #3440 -> uint256 amount1
|   |   |   |   |   ElementaryTypeName #3439
|   |   EventDefinition #3452
|   |   |   ParameterList #3451
|   |   |   |   VariableDeclaration #3444 -> address sender
|   |   |   |   |   ElementaryTypeName #3443
|   |   |   |   VariableDeclaration #3446 -> uint256 amount0
|   |   |   |   |   ElementaryTypeName #3445
|   |   |   |   VariableDeclaration #3448 -> uint256 amount1
|   |   |   |   |   ElementaryTypeName #3447
|   |   |   |   VariableDeclaration #3450 -> address to
|   |   |   |   |   ElementaryTypeName #3449
|   |   EventDefinition #3466
|   |   |   ParameterList #3465
|   |   |   |   VariableDeclaration #3454 -> address sender
|   |   |   |   |   ElementaryTypeName #3453
|   |   |   |   VariableDeclaration #3456 -> uint256 amount0In
|   |   |   |   |   ElementaryTypeName #3455
|   |   |   |   VariableDeclaration #3458 -> uint256 amount1In
|   |   |   |   |   ElementaryTypeName #3457
|   |   |   |   VariableDeclaration #3460 -> uint256 amount0Out
|   |   |   |   |   ElementaryTypeName #3459
|   |   |   |   VariableDeclaration #3462 -> uint256 amount1Out
|   |   |   |   |   ElementaryTypeName #3461
|   |   |   |   VariableDeclaration #3464 -> address to
|   |   |   |   |   ElementaryTypeName #3463
|   |   EventDefinition #3472
|   |   |   ParameterList #3471
|   |   |   |   VariableDeclaration #3468 -> uint112 reserve0
|   |   |   |   |   ElementaryTypeName #3467
|   |   |   |   VariableDeclaration #3470 -> uint112 reserve1
|   |   |   |   |   ElementaryTypeName #3469
|   |   FunctionDefinition #3477 -> MINIMUM_LIQUIDITY() [selector: ba9a7a56]
|   |   |   ParameterList #3473
|   |   |   ParameterList #3476
|   |   |   |   VariableDeclaration #3475 -> uint256
|   |   |   |   |   ElementaryTypeName #3474
|   |   FunctionDefinition #3482 -> factory() [selector: c45a0155]
|   |   |   ParameterList #3478
|   |   |   ParameterList #3481
|   |   |   |   VariableDeclaration #3480 -> address
|   |   |   |   |   ElementaryTypeName #3479
|   |   FunctionDefinition #3487 -> token0() [selector: 0dfe1681]
|   |   |   ParameterList #3483
|   |   |   ParameterList #3486
|   |   |   |   VariableDeclaration #3485 -> address
|   |   |   |   |   ElementaryTypeName #3484
|   |   FunctionDefinition #3492 -> token1() [selector: d21220a7]
|   |   |   ParameterList #3488
|   |   |   ParameterList #3491
|   |   |   |   VariableDeclaration #3490 -> address
|   |   |   |   |   ElementaryTypeName #3489
|   |   FunctionDefinition #3501 -> getReserves() [selector: 0902f1ac]
|   |   |   ParameterList #3493
|   |   |   ParameterList #3500
|   |   |   |   VariableDeclaration #3495 -> uint112 reserve0
|   |   |   |   |   ElementaryTypeName #3494
|   |   |   |   VariableDeclaration #3497 -> uint112 reserve1
|   |   |   |   |   ElementaryTypeName #3496
|   |   |   |   VariableDeclaration #3499 -> uint32 blockTimestampLast
|   |   |   |   |   ElementaryTypeName #3498
|   |   FunctionDefinition #3506 -> price0CumulativeLast() [selector: 5909c0d5]
|   |   |   ParameterList #3502
|   |   |   ParameterList #3505
|   |   |   |   VariableDeclaration #3504 -> uint256
|   |   |   |   |   ElementaryTypeName #3503
|   |   FunctionDefinition #3511 -> price1CumulativeLast() [selector: 5a3d5493]
|   |   |   ParameterList #3507
|   |   |   ParameterList #3510
|   |   |   |   VariableDeclaration #3509 -> uint256
|   |   |   |   |   ElementaryTypeName #3508
|   |   FunctionDefinition #3516 -> kLast() [selector: 7464fc3d]
|   |   |   ParameterList #3512
|   |   |   ParameterList #3515
|   |   |   |   VariableDeclaration #3514 -> uint256
|   |   |   |   |   ElementaryTypeName #3513
|   |   FunctionDefinition #3523 -> mint(address) [selector: 6a627842]
|   |   |   ParameterList #3519
|   |   |   |   VariableDeclaration #3518 -> address to
|   |   |   |   |   ElementaryTypeName #3517
|   |   |   ParameterList #3522
|   |   |   |   VariableDeclaration #3521 -> uint256 liquidity
|   |   |   |   |   ElementaryTypeName #3520
|   |   FunctionDefinition #3532 -> burn(address) [selector: 89afcb44]
|   |   |   ParameterList #3526
|   |   |   |   VariableDeclaration #3525 -> address to
|   |   |   |   |   ElementaryTypeName #3524
|   |   |   ParameterList #3531
|   |   |   |   VariableDeclaration #3528 -> uint256 amount0
|   |   |   |   |   ElementaryTypeName #3527
|   |   |   |   VariableDeclaration #3530 -> uint256 amount1
|   |   |   |   |   ElementaryTypeName #3529
|   |   FunctionDefinition #3543 -> swap(uint256,uint256,address,bytes) [selector: 022c0d9f]
|   |   |   ParameterList #3541
|   |   |   |   VariableDeclaration #3534 -> uint256 amount0Out
|   |   |   |   |   ElementaryTypeName #3533
|   |   |   |   VariableDeclaration #3536 -> uint256 amount1Out
|   |   |   |   |   ElementaryTypeName #3535
|   |   |   |   VariableDeclaration #3538 -> address to
|   |   |   |   |   ElementaryTypeName #3537
|   |   |   |   VariableDeclaration #3540 -> bytes data
|   |   |   |   |   ElementaryTypeName #3539
|   |   |   ParameterList #3542
|   |   FunctionDefinition #3548 -> skim(address) [selector: bc25cf77]
|   |   |   ParameterList #3546
|   |   |   |   VariableDeclaration #3545 -> address to
|   |   |   |   |   ElementaryTypeName #3544
|   |   |   ParameterList #3547
|   |   FunctionDefinition #3551 -> sync() [selector: fff6cae9]
|   |   |   ParameterList #3549
|   |   |   ParameterList #3550
|   |   FunctionDefinition #3558 -> initialize(address,address) [selector: 485cc955]
|   |   |   ParameterList #3556
|   |   |   |   VariableDeclaration #3553 -> address
|   |   |   |   |   ElementaryTypeName #3552
|   |   |   |   VariableDeclaration #3555 -> address
|   |   |   |   |   ElementaryTypeName #3554
|   |   |   ParameterList #3557

SourceUnit #3318 -> /Users/sbacha/GPL-V3/uniswapv2/contracts/interfaces/IUniswapV2Router01.sol
|   PragmaDirective #3011
|   ContractDefinition #3317 -> interface IUniswapV2Router01 [id: b10b19c6]
|   |   FunctionDefinition #3016 -> factory() [selector: c45a0155]
|   |   |   ParameterList #3012
|   |   |   ParameterList #3015
|   |   |   |   VariableDeclaration #3014 -> address
|   |   |   |   |   ElementaryTypeName #3013
|   |   FunctionDefinition #3021 -> WETH() [selector: ad5c4648]
|   |   |   ParameterList #3017
|   |   |   ParameterList #3020
|   |   |   |   VariableDeclaration #3019 -> address
|   |   |   |   |   ElementaryTypeName #3018
|   |   FunctionDefinition #3046 -> addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256) [selector: e8e33700]
|   |   |   ParameterList #3038
|   |   |   |   VariableDeclaration #3023 -> address tokenA
|   |   |   |   |   ElementaryTypeName #3022
|   |   |   |   VariableDeclaration #3025 -> address tokenB
|   |   |   |   |   ElementaryTypeName #3024
|   |   |   |   VariableDeclaration #3027 -> uint256 amountADesired
|   |   |   |   |   ElementaryTypeName #3026
|   |   |   |   VariableDeclaration #3029 -> uint256 amountBDesired
|   |   |   |   |   ElementaryTypeName #3028
|   |   |   |   VariableDeclaration #3031 -> uint256 amountAMin
|   |   |   |   |   ElementaryTypeName #3030
|   |   |   |   VariableDeclaration #3033 -> uint256 amountBMin
|   |   |   |   |   ElementaryTypeName #3032
|   |   |   |   VariableDeclaration #3035 -> address to
|   |   |   |   |   ElementaryTypeName #3034
|   |   |   |   VariableDeclaration #3037 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #3036
|   |   |   ParameterList #3045
|   |   |   |   VariableDeclaration #3040 -> uint256 amountA
|   |   |   |   |   ElementaryTypeName #3039
|   |   |   |   VariableDeclaration #3042 -> uint256 amountB
|   |   |   |   |   ElementaryTypeName #3041
|   |   |   |   VariableDeclaration #3044 -> uint256 liquidity
|   |   |   |   |   ElementaryTypeName #3043
|   |   FunctionDefinition #3067 -> addLiquidityETH(address,uint256,uint256,uint256,address,uint256) [selector: f305d719]
|   |   |   ParameterList #3059
|   |   |   |   VariableDeclaration #3048 -> address token
|   |   |   |   |   ElementaryTypeName #3047
|   |   |   |   VariableDeclaration #3050 -> uint256 amountTokenDesired
|   |   |   |   |   ElementaryTypeName #3049
|   |   |   |   VariableDeclaration #3052 -> uint256 amountTokenMin
|   |   |   |   |   ElementaryTypeName #3051
|   |   |   |   VariableDeclaration #3054 -> uint256 amountETHMin
|   |   |   |   |   ElementaryTypeName #3053
|   |   |   |   VariableDeclaration #3056 -> address to
|   |   |   |   |   ElementaryTypeName #3055
|   |   |   |   VariableDeclaration #3058 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #3057
|   |   |   ParameterList #3066
|   |   |   |   VariableDeclaration #3061 -> uint256 amountToken
|   |   |   |   |   ElementaryTypeName #3060
|   |   |   |   VariableDeclaration #3063 -> uint256 amountETH
|   |   |   |   |   ElementaryTypeName #3062
|   |   |   |   VariableDeclaration #3065 -> uint256 liquidity
|   |   |   |   |   ElementaryTypeName #3064
|   |   FunctionDefinition #3088 -> removeLiquidity(address,address,uint256,uint256,uint256,address,uint256) [selector: baa2abde]
|   |   |   ParameterList #3082
|   |   |   |   VariableDeclaration #3069 -> address tokenA
|   |   |   |   |   ElementaryTypeName #3068
|   |   |   |   VariableDeclaration #3071 -> address tokenB
|   |   |   |   |   ElementaryTypeName #3070
|   |   |   |   VariableDeclaration #3073 -> uint256 liquidity
|   |   |   |   |   ElementaryTypeName #3072
|   |   |   |   VariableDeclaration #3075 -> uint256 amountAMin
|   |   |   |   |   ElementaryTypeName #3074
|   |   |   |   VariableDeclaration #3077 -> uint256 amountBMin
|   |   |   |   |   ElementaryTypeName #3076
|   |   |   |   VariableDeclaration #3079 -> address to
|   |   |   |   |   ElementaryTypeName #3078
|   |   |   |   VariableDeclaration #3081 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #3080
|   |   |   ParameterList #3087
|   |   |   |   VariableDeclaration #3084 -> uint256 amountA
|   |   |   |   |   ElementaryTypeName #3083
|   |   |   |   VariableDeclaration #3086 -> uint256 amountB
|   |   |   |   |   ElementaryTypeName #3085
|   |   FunctionDefinition #3107 -> removeLiquidityETH(address,uint256,uint256,uint256,address,uint256) [selector: 02751cec]
|   |   |   ParameterList #3101
|   |   |   |   VariableDeclaration #3090 -> address token
|   |   |   |   |   ElementaryTypeName #3089
|   |   |   |   VariableDeclaration #3092 -> uint256 liquidity
|   |   |   |   |   ElementaryTypeName #3091
|   |   |   |   VariableDeclaration #3094 -> uint256 amountTokenMin
|   |   |   |   |   ElementaryTypeName #3093
|   |   |   |   VariableDeclaration #3096 -> uint256 amountETHMin
|   |   |   |   |   ElementaryTypeName #3095
|   |   |   |   VariableDeclaration #3098 -> address to
|   |   |   |   |   ElementaryTypeName #3097
|   |   |   |   VariableDeclaration #3100 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #3099
|   |   |   ParameterList #3106
|   |   |   |   VariableDeclaration #3103 -> uint256 amountToken
|   |   |   |   |   ElementaryTypeName #3102
|   |   |   |   VariableDeclaration #3105 -> uint256 amountETH
|   |   |   |   |   ElementaryTypeName #3104
|   |   FunctionDefinition #3136 -> removeLiquidityWithPermit(address,address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32) [selector: 2195995c]
|   |   |   ParameterList #3130
|   |   |   |   VariableDeclaration #3109 -> address tokenA
|   |   |   |   |   ElementaryTypeName #3108
|   |   |   |   VariableDeclaration #3111 -> address tokenB
|   |   |   |   |   ElementaryTypeName #3110
|   |   |   |   VariableDeclaration #3113 -> uint256 liquidity
|   |   |   |   |   ElementaryTypeName #3112
|   |   |   |   VariableDeclaration #3115 -> uint256 amountAMin
|   |   |   |   |   ElementaryTypeName #3114
|   |   |   |   VariableDeclaration #3117 -> uint256 amountBMin
|   |   |   |   |   ElementaryTypeName #3116
|   |   |   |   VariableDeclaration #3119 -> address to
|   |   |   |   |   ElementaryTypeName #3118
|   |   |   |   VariableDeclaration #3121 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #3120
|   |   |   |   VariableDeclaration #3123 -> bool approveMax
|   |   |   |   |   ElementaryTypeName #3122
|   |   |   |   VariableDeclaration #3125 -> uint8 v
|   |   |   |   |   ElementaryTypeName #3124
|   |   |   |   VariableDeclaration #3127 -> bytes32 r
|   |   |   |   |   ElementaryTypeName #3126
|   |   |   |   VariableDeclaration #3129 -> bytes32 s
|   |   |   |   |   ElementaryTypeName #3128
|   |   |   ParameterList #3135
|   |   |   |   VariableDeclaration #3132 -> uint256 amountA
|   |   |   |   |   ElementaryTypeName #3131
|   |   |   |   VariableDeclaration #3134 -> uint256 amountB
|   |   |   |   |   ElementaryTypeName #3133
|   |   FunctionDefinition #3163 -> removeLiquidityETHWithPermit(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32) [selector: ded9382a]
|   |   |   ParameterList #3157
|   |   |   |   VariableDeclaration #3138 -> address token
|   |   |   |   |   ElementaryTypeName #3137
|   |   |   |   VariableDeclaration #3140 -> uint256 liquidity
|   |   |   |   |   ElementaryTypeName #3139
|   |   |   |   VariableDeclaration #3142 -> uint256 amountTokenMin
|   |   |   |   |   ElementaryTypeName #3141
|   |   |   |   VariableDeclaration #3144 -> uint256 amountETHMin
|   |   |   |   |   ElementaryTypeName #3143
|   |   |   |   VariableDeclaration #3146 -> address to
|   |   |   |   |   ElementaryTypeName #3145
|   |   |   |   VariableDeclaration #3148 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #3147
|   |   |   |   VariableDeclaration #3150 -> bool approveMax
|   |   |   |   |   ElementaryTypeName #3149
|   |   |   |   VariableDeclaration #3152 -> uint8 v
|   |   |   |   |   ElementaryTypeName #3151
|   |   |   |   VariableDeclaration #3154 -> bytes32 r
|   |   |   |   |   ElementaryTypeName #3153
|   |   |   |   VariableDeclaration #3156 -> bytes32 s
|   |   |   |   |   ElementaryTypeName #3155
|   |   |   ParameterList #3162
|   |   |   |   VariableDeclaration #3159 -> uint256 amountToken
|   |   |   |   |   ElementaryTypeName #3158
|   |   |   |   VariableDeclaration #3161 -> uint256 amountETH
|   |   |   |   |   ElementaryTypeName #3160
|   |   FunctionDefinition #3180 -> swapExactTokensForTokens(uint256,uint256,address[],address,uint256) [selector: 38ed1739]
|   |   |   ParameterList #3175
|   |   |   |   VariableDeclaration #3165 -> uint256 amountIn
|   |   |   |   |   ElementaryTypeName #3164
|   |   |   |   VariableDeclaration #3167 -> uint256 amountOutMin
|   |   |   |   |   ElementaryTypeName #3166
|   |   |   |   VariableDeclaration #3170 -> address[] path
|   |   |   |   |   ArrayTypeName #3169
|   |   |   |   |   |   ElementaryTypeName #3168
|   |   |   |   VariableDeclaration #3172 -> address to
|   |   |   |   |   ElementaryTypeName #3171
|   |   |   |   VariableDeclaration #3174 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #3173
|   |   |   ParameterList #3179
|   |   |   |   VariableDeclaration #3178 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #3177
|   |   |   |   |   |   ElementaryTypeName #3176
|   |   FunctionDefinition #3197 -> swapTokensForExactTokens(uint256,uint256,address[],address,uint256) [selector: 8803dbee]
|   |   |   ParameterList #3192
|   |   |   |   VariableDeclaration #3182 -> uint256 amountOut
|   |   |   |   |   ElementaryTypeName #3181
|   |   |   |   VariableDeclaration #3184 -> uint256 amountInMax
|   |   |   |   |   ElementaryTypeName #3183
|   |   |   |   VariableDeclaration #3187 -> address[] path
|   |   |   |   |   ArrayTypeName #3186
|   |   |   |   |   |   ElementaryTypeName #3185
|   |   |   |   VariableDeclaration #3189 -> address to
|   |   |   |   |   ElementaryTypeName #3188
|   |   |   |   VariableDeclaration #3191 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #3190
|   |   |   ParameterList #3196
|   |   |   |   VariableDeclaration #3195 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #3194
|   |   |   |   |   |   ElementaryTypeName #3193
|   |   FunctionDefinition #3212 -> swapExactETHForTokens(uint256,address[],address,uint256) [selector: 7ff36ab5]
|   |   |   ParameterList #3207
|   |   |   |   VariableDeclaration #3199 -> uint256 amountOutMin
|   |   |   |   |   ElementaryTypeName #3198
|   |   |   |   VariableDeclaration #3202 -> address[] path
|   |   |   |   |   ArrayTypeName #3201
|   |   |   |   |   |   ElementaryTypeName #3200
|   |   |   |   VariableDeclaration #3204 -> address to
|   |   |   |   |   ElementaryTypeName #3203
|   |   |   |   VariableDeclaration #3206 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #3205
|   |   |   ParameterList #3211
|   |   |   |   VariableDeclaration #3210 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #3209
|   |   |   |   |   |   ElementaryTypeName #3208
|   |   FunctionDefinition #3229 -> swapTokensForExactETH(uint256,uint256,address[],address,uint256) [selector: 4a25d94a]
|   |   |   ParameterList #3224
|   |   |   |   VariableDeclaration #3214 -> uint256 amountOut
|   |   |   |   |   ElementaryTypeName #3213
|   |   |   |   VariableDeclaration #3216 -> uint256 amountInMax
|   |   |   |   |   ElementaryTypeName #3215
|   |   |   |   VariableDeclaration #3219 -> address[] path
|   |   |   |   |   ArrayTypeName #3218
|   |   |   |   |   |   ElementaryTypeName #3217
|   |   |   |   VariableDeclaration #3221 -> address to
|   |   |   |   |   ElementaryTypeName #3220
|   |   |   |   VariableDeclaration #3223 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #3222
|   |   |   ParameterList #3228
|   |   |   |   VariableDeclaration #3227 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #3226
|   |   |   |   |   |   ElementaryTypeName #3225
|   |   FunctionDefinition #3246 -> swapExactTokensForETH(uint256,uint256,address[],address,uint256) [selector: 18cbafe5]
|   |   |   ParameterList #3241
|   |   |   |   VariableDeclaration #3231 -> uint256 amountIn
|   |   |   |   |   ElementaryTypeName #3230
|   |   |   |   VariableDeclaration #3233 -> uint256 amountOutMin
|   |   |   |   |   ElementaryTypeName #3232
|   |   |   |   VariableDeclaration #3236 -> address[] path
|   |   |   |   |   ArrayTypeName #3235
|   |   |   |   |   |   ElementaryTypeName #3234
|   |   |   |   VariableDeclaration #3238 -> address to
|   |   |   |   |   ElementaryTypeName #3237
|   |   |   |   VariableDeclaration #3240 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #3239
|   |   |   ParameterList #3245
|   |   |   |   VariableDeclaration #3244 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #3243
|   |   |   |   |   |   ElementaryTypeName #3242
|   |   FunctionDefinition #3261 -> swapETHForExactTokens(uint256,address[],address,uint256) [selector: fb3bdb41]
|   |   |   ParameterList #3256
|   |   |   |   VariableDeclaration #3248 -> uint256 amountOut
|   |   |   |   |   ElementaryTypeName #3247
|   |   |   |   VariableDeclaration #3251 -> address[] path
|   |   |   |   |   ArrayTypeName #3250
|   |   |   |   |   |   ElementaryTypeName #3249
|   |   |   |   VariableDeclaration #3253 -> address to
|   |   |   |   |   ElementaryTypeName #3252
|   |   |   |   VariableDeclaration #3255 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #3254
|   |   |   ParameterList #3260
|   |   |   |   VariableDeclaration #3259 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #3258
|   |   |   |   |   |   ElementaryTypeName #3257
|   |   FunctionDefinition #3272 -> quote(uint256,uint256,uint256) [selector: ad615dec]
|   |   |   ParameterList #3268
|   |   |   |   VariableDeclaration #3263 -> uint256 amountA
|   |   |   |   |   ElementaryTypeName #3262
|   |   |   |   VariableDeclaration #3265 -> uint256 reserveA
|   |   |   |   |   ElementaryTypeName #3264
|   |   |   |   VariableDeclaration #3267 -> uint256 reserveB
|   |   |   |   |   ElementaryTypeName #3266
|   |   |   ParameterList #3271
|   |   |   |   VariableDeclaration #3270 -> uint256 amountB
|   |   |   |   |   ElementaryTypeName #3269
|   |   FunctionDefinition #3283 -> getAmountOut(uint256,uint256,uint256) [selector: 054d50d4]
|   |   |   ParameterList #3279
|   |   |   |   VariableDeclaration #3274 -> uint256 amountIn
|   |   |   |   |   ElementaryTypeName #3273
|   |   |   |   VariableDeclaration #3276 -> uint256 reserveIn
|   |   |   |   |   ElementaryTypeName #3275
|   |   |   |   VariableDeclaration #3278 -> uint256 reserveOut
|   |   |   |   |   ElementaryTypeName #3277
|   |   |   ParameterList #3282
|   |   |   |   VariableDeclaration #3281 -> uint256 amountOut
|   |   |   |   |   ElementaryTypeName #3280
|   |   FunctionDefinition #3294 -> getAmountIn(uint256,uint256,uint256) [selector: 85f8c259]
|   |   |   ParameterList #3290
|   |   |   |   VariableDeclaration #3285 -> uint256 amountOut
|   |   |   |   |   ElementaryTypeName #3284
|   |   |   |   VariableDeclaration #3287 -> uint256 reserveIn
|   |   |   |   |   ElementaryTypeName #3286
|   |   |   |   VariableDeclaration #3289 -> uint256 reserveOut
|   |   |   |   |   ElementaryTypeName #3288
|   |   |   ParameterList #3293
|   |   |   |   VariableDeclaration #3292 -> uint256 amountIn
|   |   |   |   |   ElementaryTypeName #3291
|   |   FunctionDefinition #3305 -> getAmountsOut(uint256,address[]) [selector: d06ca61f]
|   |   |   ParameterList #3300
|   |   |   |   VariableDeclaration #3296 -> uint256 amountIn
|   |   |   |   |   ElementaryTypeName #3295
|   |   |   |   VariableDeclaration #3299 -> address[] path
|   |   |   |   |   ArrayTypeName #3298
|   |   |   |   |   |   ElementaryTypeName #3297
|   |   |   ParameterList #3304
|   |   |   |   VariableDeclaration #3303 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #3302
|   |   |   |   |   |   ElementaryTypeName #3301
|   |   FunctionDefinition #3316 -> getAmountsIn(uint256,address[]) [selector: 1f00ca74]
|   |   |   ParameterList #3311
|   |   |   |   VariableDeclaration #3307 -> uint256 amountOut
|   |   |   |   |   ElementaryTypeName #3306
|   |   |   |   VariableDeclaration #3310 -> address[] path
|   |   |   |   |   ArrayTypeName #3309
|   |   |   |   |   |   ElementaryTypeName #3308
|   |   |   ParameterList #3315
|   |   |   |   VariableDeclaration #3314 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #3313
|   |   |   |   |   |   ElementaryTypeName #3312

SourceUnit #2283 -> /Users/sbacha/GPL-V3/uniswapv2/contracts/interfaces/IUniswapV2Router02.sol
|   PragmaDirective #2196
|   ImportDirective #2197
|   ContractDefinition #2282 -> interface IUniswapV2Router02 [id: 67d6e028]
|   |   InheritanceSpecifier #2199
|   |   |   UserDefinedTypeName #2198
|   |   FunctionDefinition #2216 -> removeLiquidityETHSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256) [selector: af2979eb]
|   |   |   ParameterList #2212
|   |   |   |   VariableDeclaration #2201 -> address token
|   |   |   |   |   ElementaryTypeName #2200
|   |   |   |   VariableDeclaration #2203 -> uint256 liquidity
|   |   |   |   |   ElementaryTypeName #2202
|   |   |   |   VariableDeclaration #2205 -> uint256 amountTokenMin
|   |   |   |   |   ElementaryTypeName #2204
|   |   |   |   VariableDeclaration #2207 -> uint256 amountETHMin
|   |   |   |   |   ElementaryTypeName #2206
|   |   |   |   VariableDeclaration #2209 -> address to
|   |   |   |   |   ElementaryTypeName #2208
|   |   |   |   VariableDeclaration #2211 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #2210
|   |   |   ParameterList #2215
|   |   |   |   VariableDeclaration #2214 -> uint256 amountETH
|   |   |   |   |   ElementaryTypeName #2213
|   |   FunctionDefinition #2241 -> removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32) [selector: 5b0d5984]
|   |   |   ParameterList #2237
|   |   |   |   VariableDeclaration #2218 -> address token
|   |   |   |   |   ElementaryTypeName #2217
|   |   |   |   VariableDeclaration #2220 -> uint256 liquidity
|   |   |   |   |   ElementaryTypeName #2219
|   |   |   |   VariableDeclaration #2222 -> uint256 amountTokenMin
|   |   |   |   |   ElementaryTypeName #2221
|   |   |   |   VariableDeclaration #2224 -> uint256 amountETHMin
|   |   |   |   |   ElementaryTypeName #2223
|   |   |   |   VariableDeclaration #2226 -> address to
|   |   |   |   |   ElementaryTypeName #2225
|   |   |   |   VariableDeclaration #2228 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #2227
|   |   |   |   VariableDeclaration #2230 -> bool approveMax
|   |   |   |   |   ElementaryTypeName #2229
|   |   |   |   VariableDeclaration #2232 -> uint8 v
|   |   |   |   |   ElementaryTypeName #2231
|   |   |   |   VariableDeclaration #2234 -> bytes32 r
|   |   |   |   |   ElementaryTypeName #2233
|   |   |   |   VariableDeclaration #2236 -> bytes32 s
|   |   |   |   |   ElementaryTypeName #2235
|   |   |   ParameterList #2240
|   |   |   |   VariableDeclaration #2239 -> uint256 amountETH
|   |   |   |   |   ElementaryTypeName #2238
|   |   FunctionDefinition #2255 -> swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256) [selector: 5c11d795]
|   |   |   ParameterList #2253
|   |   |   |   VariableDeclaration #2243 -> uint256 amountIn
|   |   |   |   |   ElementaryTypeName #2242
|   |   |   |   VariableDeclaration #2245 -> uint256 amountOutMin
|   |   |   |   |   ElementaryTypeName #2244
|   |   |   |   VariableDeclaration #2248 -> address[] path
|   |   |   |   |   ArrayTypeName #2247
|   |   |   |   |   |   ElementaryTypeName #2246
|   |   |   |   VariableDeclaration #2250 -> address to
|   |   |   |   |   ElementaryTypeName #2249
|   |   |   |   VariableDeclaration #2252 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #2251
|   |   |   ParameterList #2254
|   |   FunctionDefinition #2267 -> swapExactETHForTokensSupportingFeeOnTransferTokens(uint256,address[],address,uint256) [selector: b6f9de95]
|   |   |   ParameterList #2265
|   |   |   |   VariableDeclaration #2257 -> uint256 amountOutMin
|   |   |   |   |   ElementaryTypeName #2256
|   |   |   |   VariableDeclaration #2260 -> address[] path
|   |   |   |   |   ArrayTypeName #2259
|   |   |   |   |   |   ElementaryTypeName #2258
|   |   |   |   VariableDeclaration #2262 -> address to
|   |   |   |   |   ElementaryTypeName #2261
|   |   |   |   VariableDeclaration #2264 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #2263
|   |   |   ParameterList #2266
|   |   FunctionDefinition #2281 -> swapExactTokensForETHSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256) [selector: 791ac947]
|   |   |   ParameterList #2279
|   |   |   |   VariableDeclaration #2269 -> uint256 amountIn
|   |   |   |   |   ElementaryTypeName #2268
|   |   |   |   VariableDeclaration #2271 -> uint256 amountOutMin
|   |   |   |   |   ElementaryTypeName #2270
|   |   |   |   VariableDeclaration #2274 -> address[] path
|   |   |   |   |   ArrayTypeName #2273
|   |   |   |   |   |   ElementaryTypeName #2272
|   |   |   |   VariableDeclaration #2276 -> address to
|   |   |   |   |   ElementaryTypeName #2275
|   |   |   |   VariableDeclaration #2278 -> uint256 deadline
|   |   |   |   |   ElementaryTypeName #2277
|   |   |   ParameterList #2280

SourceUnit #2303 -> /Users/sbacha/GPL-V3/uniswapv2/contracts/interfaces/IWETH.sol
|   PragmaDirective #2284
|   ContractDefinition #2302 -> interface IWETH [id: 57fcec46]
|   |   FunctionDefinition #2287 -> deposit() [selector: d0e30db0]
|   |   |   ParameterList #2285
|   |   |   ParameterList #2286
|   |   FunctionDefinition #2296 -> transfer(address,uint256) [selector: a9059cbb]
|   |   |   ParameterList #2292
|   |   |   |   VariableDeclaration #2289 -> address to
|   |   |   |   |   ElementaryTypeName #2288
|   |   |   |   VariableDeclaration #2291 -> uint256 value
|   |   |   |   |   ElementaryTypeName #2290
|   |   |   ParameterList #2295
|   |   |   |   VariableDeclaration #2294 -> bool
|   |   |   |   |   ElementaryTypeName #2293
|   |   FunctionDefinition #2301 -> withdraw(uint256) [selector: 2e1a7d4d]
|   |   |   ParameterList #2299
|   |   |   |   VariableDeclaration #2298 -> uint256
|   |   |   |   |   ElementaryTypeName #2297
|   |   |   ParameterList #2300

SourceUnit #2378 -> /Users/sbacha/GPL-V3/uniswapv2/contracts/libraries/SafeMath.sol
|   PragmaDirective #2304
|   ContractDefinition #2377 -> library SafeMathUniswap
|   |   FunctionDefinition #2326 -> add(uint256,uint256) [selector: 771602f7]
|   |   |   ParameterList #2309
|   |   |   |   VariableDeclaration #2306 -> uint256 x
|   |   |   |   |   ElementaryTypeName #2305
|   |   |   |   VariableDeclaration #2308 -> uint256 y
|   |   |   |   |   ElementaryTypeName #2307
|   |   |   ParameterList #2312
|   |   |   |   VariableDeclaration #2311 -> uint256 z
|   |   |   |   |   ElementaryTypeName #2310
|   |   |   Block #2325
|   |   |   |   ExpressionStatement #2324
|   |   |   |   |   FunctionCall #2323
|   |   |   |   |   |   Identifier #2313
|   |   |   |   |   |   BinaryOperation #2321
|   |   |   |   |   |   |   TupleExpression #2319
|   |   |   |   |   |   |   |   Assignment #2318
|   |   |   |   |   |   |   |   |   Identifier #2314
|   |   |   |   |   |   |   |   |   BinaryOperation #2317
|   |   |   |   |   |   |   |   |   |   Identifier #2315
|   |   |   |   |   |   |   |   |   |   Identifier #2316
|   |   |   |   |   |   |   Identifier #2320
|   |   |   |   |   |   Literal #2322
|   |   FunctionDefinition #2348 -> sub(uint256,uint256) [selector: b67d77c5]
|   |   |   ParameterList #2331
|   |   |   |   VariableDeclaration #2328 -> uint256 x
|   |   |   |   |   ElementaryTypeName #2327
|   |   |   |   VariableDeclaration #2330 -> uint256 y
|   |   |   |   |   ElementaryTypeName #2329
|   |   |   ParameterList #2334
|   |   |   |   VariableDeclaration #2333 -> uint256 z
|   |   |   |   |   ElementaryTypeName #2332
|   |   |   Block #2347
|   |   |   |   ExpressionStatement #2346
|   |   |   |   |   FunctionCall #2345
|   |   |   |   |   |   Identifier #2335
|   |   |   |   |   |   BinaryOperation #2343
|   |   |   |   |   |   |   TupleExpression #2341
|   |   |   |   |   |   |   |   Assignment #2340
|   |   |   |   |   |   |   |   |   Identifier #2336
|   |   |   |   |   |   |   |   |   BinaryOperation #2339
|   |   |   |   |   |   |   |   |   |   Identifier #2337
|   |   |   |   |   |   |   |   |   |   Identifier #2338
|   |   |   |   |   |   |   Identifier #2342
|   |   |   |   |   |   Literal #2344
|   |   FunctionDefinition #2376 -> mul(uint256,uint256) [selector: c8a4ac9c]
|   |   |   ParameterList #2353
|   |   |   |   VariableDeclaration #2350 -> uint256 x
|   |   |   |   |   ElementaryTypeName #2349
|   |   |   |   VariableDeclaration #2352 -> uint256 y
|   |   |   |   |   ElementaryTypeName #2351
|   |   |   ParameterList #2356
|   |   |   |   VariableDeclaration #2355 -> uint256 z
|   |   |   |   |   ElementaryTypeName #2354
|   |   |   Block #2375
|   |   |   |   ExpressionStatement #2374
|   |   |   |   |   FunctionCall #2373
|   |   |   |   |   |   Identifier #2357
|   |   |   |   |   |   BinaryOperation #2371
|   |   |   |   |   |   |   BinaryOperation #2360
|   |   |   |   |   |   |   |   Identifier #2358
|   |   |   |   |   |   |   |   Literal #2359
|   |   |   |   |   |   |   BinaryOperation #2370
|   |   |   |   |   |   |   |   BinaryOperation #2368
|   |   |   |   |   |   |   |   |   TupleExpression #2366
|   |   |   |   |   |   |   |   |   |   Assignment #2365
|   |   |   |   |   |   |   |   |   |   |   Identifier #2361
|   |   |   |   |   |   |   |   |   |   |   BinaryOperation #2364
|   |   |   |   |   |   |   |   |   |   |   |   Identifier #2362
|   |   |   |   |   |   |   |   |   |   |   |   Identifier #2363
|   |   |   |   |   |   |   |   |   Identifier #2367
|   |   |   |   |   |   |   |   Identifier #2369
|   |   |   |   |   |   Literal #2372

SourceUnit #2538 -> /Users/sbacha/GPL-V3/uniswapv2/contracts/libraries/TransferHelper.sol
|   PragmaDirective #2379
|   ContractDefinition #2537 -> library TransferHelper
|   |   FunctionDefinition #2422 -> safeApprove(address,address,uint256) [selector: eb5625d9]
|   |   |   ParameterList #2386
|   |   |   |   VariableDeclaration #2381 -> address token
|   |   |   |   |   ElementaryTypeName #2380
|   |   |   |   VariableDeclaration #2383 -> address to
|   |   |   |   |   ElementaryTypeName #2382
|   |   |   |   VariableDeclaration #2385 -> uint256 value
|   |   |   |   |   ElementaryTypeName #2384
|   |   |   ParameterList #2387
|   |   |   Block #2421
|   |   |   |   VariableDeclarationStatement #2401
|   |   |   |   |   VariableDeclaration #2389 -> bool success
|   |   |   |   |   |   ElementaryTypeName #2388
|   |   |   |   |   VariableDeclaration #2391 -> bytes data
|   |   |   |   |   |   ElementaryTypeName #2390
|   |   |   |   |   FunctionCall #2400
|   |   |   |   |   |   MemberAccess #2393
|   |   |   |   |   |   |   Identifier #2392
|   |   |   |   |   |   FunctionCall #2399
|   |   |   |   |   |   |   MemberAccess #2395
|   |   |   |   |   |   |   |   Identifier #2394
|   |   |   |   |   |   |   Literal #2396
|   |   |   |   |   |   |   Identifier #2397
|   |   |   |   |   |   |   Identifier #2398
|   |   |   |   ExpressionStatement #2420
|   |   |   |   |   FunctionCall #2419
|   |   |   |   |   |   Identifier #2402
|   |   |   |   |   |   BinaryOperation #2417
|   |   |   |   |   |   |   Identifier #2403
|   |   |   |   |   |   |   TupleExpression #2416
|   |   |   |   |   |   |   |   BinaryOperation #2415
|   |   |   |   |   |   |   |   |   BinaryOperation #2407
|   |   |   |   |   |   |   |   |   |   MemberAccess #2405
|   |   |   |   |   |   |   |   |   |   |   Identifier #2404
|   |   |   |   |   |   |   |   |   |   Literal #2406
|   |   |   |   |   |   |   |   |   FunctionCall #2414
|   |   |   |   |   |   |   |   |   |   MemberAccess #2409
|   |   |   |   |   |   |   |   |   |   |   Identifier #2408
|   |   |   |   |   |   |   |   |   |   Identifier #2410
|   |   |   |   |   |   |   |   |   |   TupleExpression #2413
|   |   |   |   |   |   |   |   |   |   |   ElementaryTypeNameExpression #2412
|   |   |   |   |   |   |   |   |   |   |   |   ElementaryTypeName #2411
|   |   |   |   |   |   Literal #2418
|   |   FunctionDefinition #2465 -> safeTransfer(address,address,uint256) [selector: d1660f99]
|   |   |   ParameterList #2429
|   |   |   |   VariableDeclaration #2424 -> address token
|   |   |   |   |   ElementaryTypeName #2423
|   |   |   |   VariableDeclaration #2426 -> address to
|   |   |   |   |   ElementaryTypeName #2425
|   |   |   |   VariableDeclaration #2428 -> uint256 value
|   |   |   |   |   ElementaryTypeName #2427
|   |   |   ParameterList #2430
|   |   |   Block #2464
|   |   |   |   VariableDeclarationStatement #2444
|   |   |   |   |   VariableDeclaration #2432 -> bool success
|   |   |   |   |   |   ElementaryTypeName #2431
|   |   |   |   |   VariableDeclaration #2434 -> bytes data
|   |   |   |   |   |   ElementaryTypeName #2433
|   |   |   |   |   FunctionCall #2443
|   |   |   |   |   |   MemberAccess #2436
|   |   |   |   |   |   |   Identifier #2435
|   |   |   |   |   |   FunctionCall #2442
|   |   |   |   |   |   |   MemberAccess #2438
|   |   |   |   |   |   |   |   Identifier #2437
|   |   |   |   |   |   |   Literal #2439
|   |   |   |   |   |   |   Identifier #2440
|   |   |   |   |   |   |   Identifier #2441
|   |   |   |   ExpressionStatement #2463
|   |   |   |   |   FunctionCall #2462
|   |   |   |   |   |   Identifier #2445
|   |   |   |   |   |   BinaryOperation #2460
|   |   |   |   |   |   |   Identifier #2446
|   |   |   |   |   |   |   TupleExpression #2459
|   |   |   |   |   |   |   |   BinaryOperation #2458
|   |   |   |   |   |   |   |   |   BinaryOperation #2450
|   |   |   |   |   |   |   |   |   |   MemberAccess #2448
|   |   |   |   |   |   |   |   |   |   |   Identifier #2447
|   |   |   |   |   |   |   |   |   |   Literal #2449
|   |   |   |   |   |   |   |   |   FunctionCall #2457
|   |   |   |   |   |   |   |   |   |   MemberAccess #2452
|   |   |   |   |   |   |   |   |   |   |   Identifier #2451
|   |   |   |   |   |   |   |   |   |   Identifier #2453
|   |   |   |   |   |   |   |   |   |   TupleExpression #2456
|   |   |   |   |   |   |   |   |   |   |   ElementaryTypeNameExpression #2455
|   |   |   |   |   |   |   |   |   |   |   |   ElementaryTypeName #2454
|   |   |   |   |   |   Literal #2461
|   |   FunctionDefinition #2511 -> safeTransferFrom(address,address,address,uint256) [selector: d9fc4b61]
|   |   |   ParameterList #2474
|   |   |   |   VariableDeclaration #2467 -> address token
|   |   |   |   |   ElementaryTypeName #2466
|   |   |   |   VariableDeclaration #2469 -> address from
|   |   |   |   |   ElementaryTypeName #2468
|   |   |   |   VariableDeclaration #2471 -> address to
|   |   |   |   |   ElementaryTypeName #2470
|   |   |   |   VariableDeclaration #2473 -> uint256 value
|   |   |   |   |   ElementaryTypeName #2472
|   |   |   ParameterList #2475
|   |   |   Block #2510
|   |   |   |   VariableDeclarationStatement #2490
|   |   |   |   |   VariableDeclaration #2477 -> bool success
|   |   |   |   |   |   ElementaryTypeName #2476
|   |   |   |   |   VariableDeclaration #2479 -> bytes data
|   |   |   |   |   |   ElementaryTypeName #2478
|   |   |   |   |   FunctionCall #2489
|   |   |   |   |   |   MemberAccess #2481
|   |   |   |   |   |   |   Identifier #2480
|   |   |   |   |   |   FunctionCall #2488
|   |   |   |   |   |   |   MemberAccess #2483
|   |   |   |   |   |   |   |   Identifier #2482
|   |   |   |   |   |   |   Literal #2484
|   |   |   |   |   |   |   Identifier #2485
|   |   |   |   |   |   |   Identifier #2486
|   |   |   |   |   |   |   Identifier #2487
|   |   |   |   ExpressionStatement #2509
|   |   |   |   |   FunctionCall #2508
|   |   |   |   |   |   Identifier #2491
|   |   |   |   |   |   BinaryOperation #2506
|   |   |   |   |   |   |   Identifier #2492
|   |   |   |   |   |   |   TupleExpression #2505
|   |   |   |   |   |   |   |   BinaryOperation #2504
|   |   |   |   |   |   |   |   |   BinaryOperation #2496
|   |   |   |   |   |   |   |   |   |   MemberAccess #2494
|   |   |   |   |   |   |   |   |   |   |   Identifier #2493
|   |   |   |   |   |   |   |   |   |   Literal #2495
|   |   |   |   |   |   |   |   |   FunctionCall #2503
|   |   |   |   |   |   |   |   |   |   MemberAccess #2498
|   |   |   |   |   |   |   |   |   |   |   Identifier #2497
|   |   |   |   |   |   |   |   |   |   Identifier #2499
|   |   |   |   |   |   |   |   |   |   TupleExpression #2502
|   |   |   |   |   |   |   |   |   |   |   ElementaryTypeNameExpression #2501
|   |   |   |   |   |   |   |   |   |   |   |   ElementaryTypeName #2500
|   |   |   |   |   |   Literal #2507
|   |   FunctionDefinition #2536 -> safeTransferETH(address,uint256) [selector: 7c4368c1]
|   |   |   ParameterList #2516
|   |   |   |   VariableDeclaration #2513 -> address to
|   |   |   |   |   ElementaryTypeName #2512
|   |   |   |   VariableDeclaration #2515 -> uint256 value
|   |   |   |   |   ElementaryTypeName #2514
|   |   |   ParameterList #2517
|   |   |   Block #2535
|   |   |   |   VariableDeclarationStatement #2529
|   |   |   |   |   VariableDeclaration #2519 -> bool success
|   |   |   |   |   |   ElementaryTypeName #2518
|   |   |   |   |   FunctionCall #2528
|   |   |   |   |   |   FunctionCallOptions #2523
|   |   |   |   |   |   |   MemberAccess #2521
|   |   |   |   |   |   |   |   Identifier #2520
|   |   |   |   |   |   |   Identifier #2522
|   |   |   |   |   |   FunctionCall #2527
|   |   |   |   |   |   |   NewExpression #2525
|   |   |   |   |   |   |   |   ElementaryTypeName #2524
|   |   |   |   |   |   |   Literal #2526
|   |   |   |   ExpressionStatement #2534
|   |   |   |   |   FunctionCall #2533
|   |   |   |   |   |   Identifier #2530
|   |   |   |   |   |   Identifier #2531
|   |   |   |   |   |   Literal #2532

SourceUnit #3010 -> /Users/sbacha/GPL-V3/uniswapv2/contracts/libraries/UniswapV2Library.sol
|   PragmaDirective #2539
|   ImportDirective #2540
|   ImportDirective #2541
|   ContractDefinition #3009 -> library UniswapV2Library
|   |   UsingForDirective #2544
|   |   |   UserDefinedTypeName #2542
|   |   |   ElementaryTypeName #2543
|   |   FunctionDefinition #2588 -> sortTokens(address,address) [selector: 544caa56]
|   |   |   ParameterList #2549
|   |   |   |   VariableDeclaration #2546 -> address tokenA
|   |   |   |   |   ElementaryTypeName #2545
|   |   |   |   VariableDeclaration #2548 -> address tokenB
|   |   |   |   |   ElementaryTypeName #2547
|   |   |   ParameterList #2554
|   |   |   |   VariableDeclaration #2551 -> address token0
|   |   |   |   |   ElementaryTypeName #2550
|   |   |   |   VariableDeclaration #2553 -> address token1
|   |   |   |   |   ElementaryTypeName #2552
|   |   |   Block #2587
|   |   |   |   ExpressionStatement #2561
|   |   |   |   |   FunctionCall #2560
|   |   |   |   |   |   Identifier #2555
|   |   |   |   |   |   BinaryOperation #2558
|   |   |   |   |   |   |   Identifier #2556
|   |   |   |   |   |   |   Identifier #2557
|   |   |   |   |   |   Literal #2559
|   |   |   |   ExpressionStatement #2576
|   |   |   |   |   Assignment #2575
|   |   |   |   |   |   TupleExpression #2564
|   |   |   |   |   |   |   Identifier #2562
|   |   |   |   |   |   |   Identifier #2563
|   |   |   |   |   |   Conditional #2574
|   |   |   |   |   |   |   BinaryOperation #2567
|   |   |   |   |   |   |   |   Identifier #2565
|   |   |   |   |   |   |   |   Identifier #2566
|   |   |   |   |   |   |   TupleExpression #2570
|   |   |   |   |   |   |   |   Identifier #2568
|   |   |   |   |   |   |   |   Identifier #2569
|   |   |   |   |   |   |   TupleExpression #2573
|   |   |   |   |   |   |   |   Identifier #2571
|   |   |   |   |   |   |   |   Identifier #2572
|   |   |   |   ExpressionStatement #2586
|   |   |   |   |   FunctionCall #2585
|   |   |   |   |   |   Identifier #2577
|   |   |   |   |   |   BinaryOperation #2583
|   |   |   |   |   |   |   Identifier #2578
|   |   |   |   |   |   |   FunctionCall #2582
|   |   |   |   |   |   |   |   ElementaryTypeNameExpression #2580
|   |   |   |   |   |   |   |   |   ElementaryTypeName #2579
|   |   |   |   |   |   |   |   Literal #2581
|   |   |   |   |   |   Literal #2584
|   |   FunctionDefinition #2633 -> pairFor(address,address,address) [selector: 6d91c0e2]
|   |   |   ParameterList #2595
|   |   |   |   VariableDeclaration #2590 -> address factory
|   |   |   |   |   ElementaryTypeName #2589
|   |   |   |   VariableDeclaration #2592 -> address tokenA
|   |   |   |   |   ElementaryTypeName #2591
|   |   |   |   VariableDeclaration #2594 -> address tokenB
|   |   |   |   |   ElementaryTypeName #2593
|   |   |   ParameterList #2598
|   |   |   |   VariableDeclaration #2597 -> address pair
|   |   |   |   |   ElementaryTypeName #2596
|   |   |   Block #2632
|   |   |   |   VariableDeclarationStatement #2607
|   |   |   |   |   VariableDeclaration #2600 -> address token0
|   |   |   |   |   |   ElementaryTypeName #2599
|   |   |   |   |   VariableDeclaration #2602 -> address token1
|   |   |   |   |   |   ElementaryTypeName #2601
|   |   |   |   |   FunctionCall #2606
|   |   |   |   |   |   Identifier #2603
|   |   |   |   |   |   Identifier #2604
|   |   |   |   |   |   Identifier #2605
|   |   |   |   ExpressionStatement #2631
|   |   |   |   |   Assignment #2630
|   |   |   |   |   |   Identifier #2608
|   |   |   |   |   |   FunctionCall #2629
|   |   |   |   |   |   |   ElementaryTypeNameExpression #2610
|   |   |   |   |   |   |   |   ElementaryTypeName #2609
|   |   |   |   |   |   |   FunctionCall #2628
|   |   |   |   |   |   |   |   ElementaryTypeNameExpression #2612
|   |   |   |   |   |   |   |   |   ElementaryTypeName #2611
|   |   |   |   |   |   |   |   FunctionCall #2627
|   |   |   |   |   |   |   |   |   Identifier #2613
|   |   |   |   |   |   |   |   |   FunctionCall #2626
|   |   |   |   |   |   |   |   |   |   MemberAccess #2615
|   |   |   |   |   |   |   |   |   |   |   Identifier #2614
|   |   |   |   |   |   |   |   |   |   Literal #2616
|   |   |   |   |   |   |   |   |   |   Identifier #2617
|   |   |   |   |   |   |   |   |   |   FunctionCall #2624
|   |   |   |   |   |   |   |   |   |   |   Identifier #2618
|   |   |   |   |   |   |   |   |   |   |   FunctionCall #2623
|   |   |   |   |   |   |   |   |   |   |   |   MemberAccess #2620
|   |   |   |   |   |   |   |   |   |   |   |   |   Identifier #2619
|   |   |   |   |   |   |   |   |   |   |   |   Identifier #2621
|   |   |   |   |   |   |   |   |   |   |   |   Identifier #2622
|   |   |   |   |   |   |   |   |   |   Literal #2625
|   |   FunctionDefinition #2683 -> getReserves(address,address,address) [selector: 32749461]
|   |   |   ParameterList #2640
|   |   |   |   VariableDeclaration #2635 -> address factory
|   |   |   |   |   ElementaryTypeName #2634
|   |   |   |   VariableDeclaration #2637 -> address tokenA
|   |   |   |   |   ElementaryTypeName #2636
|   |   |   |   VariableDeclaration #2639 -> address tokenB
|   |   |   |   |   ElementaryTypeName #2638
|   |   |   ParameterList #2645
|   |   |   |   VariableDeclaration #2642 -> uint256 reserveA
|   |   |   |   |   ElementaryTypeName #2641
|   |   |   |   VariableDeclaration #2644 -> uint256 reserveB
|   |   |   |   |   ElementaryTypeName #2643
|   |   |   Block #2682
|   |   |   |   VariableDeclarationStatement #2652
|   |   |   |   |   VariableDeclaration #2647 -> address token0
|   |   |   |   |   |   ElementaryTypeName #2646
|   |   |   |   |   FunctionCall #2651
|   |   |   |   |   |   Identifier #2648
|   |   |   |   |   |   Identifier #2649
|   |   |   |   |   |   Identifier #2650
|   |   |   |   VariableDeclarationStatement #2666
|   |   |   |   |   VariableDeclaration #2654 -> uint256 reserve0
|   |   |   |   |   |   ElementaryTypeName #2653
|   |   |   |   |   VariableDeclaration #2656 -> uint256 reserve1
|   |   |   |   |   |   ElementaryTypeName #2655
|   |   |   |   |   FunctionCall #2665
|   |   |   |   |   |   MemberAccess #2664
|   |   |   |   |   |   |   FunctionCall #2663
|   |   |   |   |   |   |   |   Identifier #2657
|   |   |   |   |   |   |   |   FunctionCall #2662
|   |   |   |   |   |   |   |   |   Identifier #2658
|   |   |   |   |   |   |   |   |   Identifier #2659
|   |   |   |   |   |   |   |   |   Identifier #2660
|   |   |   |   |   |   |   |   |   Identifier #2661
|   |   |   |   ExpressionStatement #2681
|   |   |   |   |   Assignment #2680
|   |   |   |   |   |   TupleExpression #2669
|   |   |   |   |   |   |   Identifier #2667
|   |   |   |   |   |   |   Identifier #2668
|   |   |   |   |   |   Conditional #2679
|   |   |   |   |   |   |   BinaryOperation #2672
|   |   |   |   |   |   |   |   Identifier #2670
|   |   |   |   |   |   |   |   Identifier #2671
|   |   |   |   |   |   |   TupleExpression #2675
|   |   |   |   |   |   |   |   Identifier #2673
|   |   |   |   |   |   |   |   Identifier #2674
|   |   |   |   |   |   |   TupleExpression #2678
|   |   |   |   |   |   |   |   Identifier #2676
|   |   |   |   |   |   |   |   Identifier #2677
|   |   FunctionDefinition #2722 -> quote(uint256,uint256,uint256) [selector: ad615dec]
|   |   |   ParameterList #2690
|   |   |   |   VariableDeclaration #2685 -> uint256 amountA
|   |   |   |   |   ElementaryTypeName #2684
|   |   |   |   VariableDeclaration #2687 -> uint256 reserveA
|   |   |   |   |   ElementaryTypeName #2686
|   |   |   |   VariableDeclaration #2689 -> uint256 reserveB
|   |   |   |   |   ElementaryTypeName #2688
|   |   |   ParameterList #2693
|   |   |   |   VariableDeclaration #2692 -> uint256 amountB
|   |   |   |   |   ElementaryTypeName #2691
|   |   |   Block #2721
|   |   |   |   ExpressionStatement #2700
|   |   |   |   |   FunctionCall #2699
|   |   |   |   |   |   Identifier #2694
|   |   |   |   |   |   BinaryOperation #2697
|   |   |   |   |   |   |   Identifier #2695
|   |   |   |   |   |   |   Literal #2696
|   |   |   |   |   |   Literal #2698
|   |   |   |   ExpressionStatement #2711
|   |   |   |   |   FunctionCall #2710
|   |   |   |   |   |   Identifier #2701
|   |   |   |   |   |   BinaryOperation #2708
|   |   |   |   |   |   |   BinaryOperation #2704
|   |   |   |   |   |   |   |   Identifier #2702
|   |   |   |   |   |   |   |   Literal #2703
|   |   |   |   |   |   |   BinaryOperation #2707
|   |   |   |   |   |   |   |   Identifier #2705
|   |   |   |   |   |   |   |   Literal #2706
|   |   |   |   |   |   Literal #2709
|   |   |   |   ExpressionStatement #2720
|   |   |   |   |   Assignment #2719
|   |   |   |   |   |   Identifier #2712
|   |   |   |   |   |   BinaryOperation #2718
|   |   |   |   |   |   |   FunctionCall #2716
|   |   |   |   |   |   |   |   MemberAccess #2714
|   |   |   |   |   |   |   |   |   Identifier #2713
|   |   |   |   |   |   |   |   Identifier #2715
|   |   |   |   |   |   |   Identifier #2717
|   |   FunctionDefinition #2782 -> getAmountOut(uint256,uint256,uint256) [selector: 054d50d4]
|   |   |   ParameterList #2729
|   |   |   |   VariableDeclaration #2724 -> uint256 amountIn
|   |   |   |   |   ElementaryTypeName #2723
|   |   |   |   VariableDeclaration #2726 -> uint256 reserveIn
|   |   |   |   |   ElementaryTypeName #2725
|   |   |   |   VariableDeclaration #2728 -> uint256 reserveOut
|   |   |   |   |   ElementaryTypeName #2727
|   |   |   ParameterList #2732
|   |   |   |   VariableDeclaration #2731 -> uint256 amountOut
|   |   |   |   |   ElementaryTypeName #2730
|   |   |   Block #2781
|   |   |   |   ExpressionStatement #2739
|   |   |   |   |   FunctionCall #2738
|   |   |   |   |   |   Identifier #2733
|   |   |   |   |   |   BinaryOperation #2736
|   |   |   |   |   |   |   Identifier #2734
|   |   |   |   |   |   |   Literal #2735
|   |   |   |   |   |   Literal #2737
|   |   |   |   ExpressionStatement #2750
|   |   |   |   |   FunctionCall #2749
|   |   |   |   |   |   Identifier #2740
|   |   |   |   |   |   BinaryOperation #2747
|   |   |   |   |   |   |   BinaryOperation #2743
|   |   |   |   |   |   |   |   Identifier #2741
|   |   |   |   |   |   |   |   Literal #2742
|   |   |   |   |   |   |   BinaryOperation #2746
|   |   |   |   |   |   |   |   Identifier #2744
|   |   |   |   |   |   |   |   Literal #2745
|   |   |   |   |   |   Literal #2748
|   |   |   |   VariableDeclarationStatement #2757
|   |   |   |   |   VariableDeclaration #2752 -> uint256 amountInWithFee
|   |   |   |   |   |   ElementaryTypeName #2751
|   |   |   |   |   FunctionCall #2756
|   |   |   |   |   |   MemberAccess #2754
|   |   |   |   |   |   |   Identifier #2753
|   |   |   |   |   |   Literal #2755
|   |   |   |   VariableDeclarationStatement #2764
|   |   |   |   |   VariableDeclaration #2759 -> uint256 numerator
|   |   |   |   |   |   ElementaryTypeName #2758
|   |   |   |   |   FunctionCall #2763
|   |   |   |   |   |   MemberAccess #2761
|   |   |   |   |   |   |   Identifier #2760
|   |   |   |   |   |   Identifier #2762
|   |   |   |   VariableDeclarationStatement #2774
|   |   |   |   |   VariableDeclaration #2766 -> uint256 denominator
|   |   |   |   |   |   ElementaryTypeName #2765
|   |   |   |   |   FunctionCall #2773
|   |   |   |   |   |   MemberAccess #2771
|   |   |   |   |   |   |   FunctionCall #2770
|   |   |   |   |   |   |   |   MemberAccess #2768
|   |   |   |   |   |   |   |   |   Identifier #2767
|   |   |   |   |   |   |   |   Literal #2769
|   |   |   |   |   |   Identifier #2772
|   |   |   |   ExpressionStatement #2780
|   |   |   |   |   Assignment #2779
|   |   |   |   |   |   Identifier #2775
|   |   |   |   |   |   BinaryOperation #2778
|   |   |   |   |   |   |   Identifier #2776
|   |   |   |   |   |   |   Identifier #2777
|   |   FunctionDefinition #2842 -> getAmountIn(uint256,uint256,uint256) [selector: 85f8c259]
|   |   |   ParameterList #2789
|   |   |   |   VariableDeclaration #2784 -> uint256 amountOut
|   |   |   |   |   ElementaryTypeName #2783
|   |   |   |   VariableDeclaration #2786 -> uint256 reserveIn
|   |   |   |   |   ElementaryTypeName #2785
|   |   |   |   VariableDeclaration #2788 -> uint256 reserveOut
|   |   |   |   |   ElementaryTypeName #2787
|   |   |   ParameterList #2792
|   |   |   |   VariableDeclaration #2791 -> uint256 amountIn
|   |   |   |   |   ElementaryTypeName #2790
|   |   |   Block #2841
|   |   |   |   ExpressionStatement #2799
|   |   |   |   |   FunctionCall #2798
|   |   |   |   |   |   Identifier #2793
|   |   |   |   |   |   BinaryOperation #2796
|   |   |   |   |   |   |   Identifier #2794
|   |   |   |   |   |   |   Literal #2795
|   |   |   |   |   |   Literal #2797
|   |   |   |   ExpressionStatement #2810
|   |   |   |   |   FunctionCall #2809
|   |   |   |   |   |   Identifier #2800
|   |   |   |   |   |   BinaryOperation #2807
|   |   |   |   |   |   |   BinaryOperation #2803
|   |   |   |   |   |   |   |   Identifier #2801
|   |   |   |   |   |   |   |   Literal #2802
|   |   |   |   |   |   |   BinaryOperation #2806
|   |   |   |   |   |   |   |   Identifier #2804
|   |   |   |   |   |   |   |   Literal #2805
|   |   |   |   |   |   Literal #2808
|   |   |   |   VariableDeclarationStatement #2820
|   |   |   |   |   VariableDeclaration #2812 -> uint256 numerator
|   |   |   |   |   |   ElementaryTypeName #2811
|   |   |   |   |   FunctionCall #2819
|   |   |   |   |   |   MemberAccess #2817
|   |   |   |   |   |   |   FunctionCall #2816
|   |   |   |   |   |   |   |   MemberAccess #2814
|   |   |   |   |   |   |   |   |   Identifier #2813
|   |   |   |   |   |   |   |   Identifier #2815
|   |   |   |   |   |   Literal #2818
|   |   |   |   VariableDeclarationStatement #2830
|   |   |   |   |   VariableDeclaration #2822 -> uint256 denominator
|   |   |   |   |   |   ElementaryTypeName #2821
|   |   |   |   |   FunctionCall #2829
|   |   |   |   |   |   MemberAccess #2827
|   |   |   |   |   |   |   FunctionCall #2826
|   |   |   |   |   |   |   |   MemberAccess #2824
|   |   |   |   |   |   |   |   |   Identifier #2823
|   |   |   |   |   |   |   |   Identifier #2825
|   |   |   |   |   |   Literal #2828
|   |   |   |   ExpressionStatement #2840
|   |   |   |   |   Assignment #2839
|   |   |   |   |   |   Identifier #2831
|   |   |   |   |   |   FunctionCall #2838
|   |   |   |   |   |   |   MemberAccess #2836
|   |   |   |   |   |   |   |   TupleExpression #2835
|   |   |   |   |   |   |   |   |   BinaryOperation #2834
|   |   |   |   |   |   |   |   |   |   Identifier #2832
|   |   |   |   |   |   |   |   |   |   Identifier #2833
|   |   |   |   |   |   |   Literal #2837
|   |   FunctionDefinition #2923 -> getAmountsOut(address,uint256,address[]) [selector: bb7b9c76]
|   |   |   ParameterList #2850
|   |   |   |   VariableDeclaration #2844 -> address factory
|   |   |   |   |   ElementaryTypeName #2843
|   |   |   |   VariableDeclaration #2846 -> uint256 amountIn
|   |   |   |   |   ElementaryTypeName #2845
|   |   |   |   VariableDeclaration #2849 -> address[] path
|   |   |   |   |   ArrayTypeName #2848
|   |   |   |   |   |   ElementaryTypeName #2847
|   |   |   ParameterList #2854
|   |   |   |   VariableDeclaration #2853 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #2852
|   |   |   |   |   |   ElementaryTypeName #2851
|   |   |   Block #2922
|   |   |   |   ExpressionStatement #2862
|   |   |   |   |   FunctionCall #2861
|   |   |   |   |   |   Identifier #2855
|   |   |   |   |   |   BinaryOperation #2859
|   |   |   |   |   |   |   MemberAccess #2857
|   |   |   |   |   |   |   |   Identifier #2856
|   |   |   |   |   |   |   Literal #2858
|   |   |   |   |   |   Literal #2860
|   |   |   |   ExpressionStatement #2871
|   |   |   |   |   Assignment #2870
|   |   |   |   |   |   Identifier #2863
|   |   |   |   |   |   FunctionCall #2869
|   |   |   |   |   |   |   NewExpression #2866
|   |   |   |   |   |   |   |   ArrayTypeName #2865
|   |   |   |   |   |   |   |   |   ElementaryTypeName #2864
|   |   |   |   |   |   |   MemberAccess #2868
|   |   |   |   |   |   |   |   Identifier #2867
|   |   |   |   ExpressionStatement #2877
|   |   |   |   |   Assignment #2876
|   |   |   |   |   |   IndexAccess #2874
|   |   |   |   |   |   |   Identifier #2872
|   |   |   |   |   |   |   Literal #2873
|   |   |   |   |   |   Identifier #2875
|   |   |   |   ForStatement #2921
|   |   |   |   |   VariableDeclarationStatement #2880
|   |   |   |   |   |   VariableDeclaration #2879 -> uint256 i
|   |   |   |   |   |   |   ElementaryTypeName #2878
|   |   |   |   |   BinaryOperation #2886
|   |   |   |   |   |   Identifier #2881
|   |   |   |   |   |   BinaryOperation #2885
|   |   |   |   |   |   |   MemberAccess #2883
|   |   |   |   |   |   |   |   Identifier #2882
|   |   |   |   |   |   |   Literal #2884
|   |   |   |   |   ExpressionStatement #2889
|   |   |   |   |   |   UnaryOperation #2888
|   |   |   |   |   |   |   Identifier #2887
|   |   |   |   |   Block #2920
|   |   |   |   |   |   VariableDeclarationStatement #2905
|   |   |   |   |   |   |   VariableDeclaration #2891 -> uint256 reserveIn
|   |   |   |   |   |   |   |   ElementaryTypeName #2890
|   |   |   |   |   |   |   VariableDeclaration #2893 -> uint256 reserveOut
|   |   |   |   |   |   |   |   ElementaryTypeName #2892
|   |   |   |   |   |   |   FunctionCall #2904
|   |   |   |   |   |   |   |   Identifier #2894
|   |   |   |   |   |   |   |   Identifier #2895
|   |   |   |   |   |   |   |   IndexAccess #2898
|   |   |   |   |   |   |   |   |   Identifier #2896
|   |   |   |   |   |   |   |   |   Identifier #2897
|   |   |   |   |   |   |   |   IndexAccess #2903
|   |   |   |   |   |   |   |   |   Identifier #2899
|   |   |   |   |   |   |   |   |   BinaryOperation #2902
|   |   |   |   |   |   |   |   |   |   Identifier #2900
|   |   |   |   |   |   |   |   |   |   Literal #2901
|   |   |   |   |   |   ExpressionStatement #2919
|   |   |   |   |   |   |   Assignment #2918
|   |   |   |   |   |   |   |   IndexAccess #2910
|   |   |   |   |   |   |   |   |   Identifier #2906
|   |   |   |   |   |   |   |   |   BinaryOperation #2909
|   |   |   |   |   |   |   |   |   |   Identifier #2907
|   |   |   |   |   |   |   |   |   |   Literal #2908
|   |   |   |   |   |   |   |   FunctionCall #2917
|   |   |   |   |   |   |   |   |   Identifier #2911
|   |   |   |   |   |   |   |   |   IndexAccess #2914
|   |   |   |   |   |   |   |   |   |   Identifier #2912
|   |   |   |   |   |   |   |   |   |   Identifier #2913
|   |   |   |   |   |   |   |   |   Identifier #2915
|   |   |   |   |   |   |   |   |   Identifier #2916
|   |   FunctionDefinition #3008 -> getAmountsIn(address,uint256,address[]) [selector: 192128b2]
|   |   |   ParameterList #2931
|   |   |   |   VariableDeclaration #2925 -> address factory
|   |   |   |   |   ElementaryTypeName #2924
|   |   |   |   VariableDeclaration #2927 -> uint256 amountOut
|   |   |   |   |   ElementaryTypeName #2926
|   |   |   |   VariableDeclaration #2930 -> address[] path
|   |   |   |   |   ArrayTypeName #2929
|   |   |   |   |   |   ElementaryTypeName #2928
|   |   |   ParameterList #2935
|   |   |   |   VariableDeclaration #2934 -> uint256[] amounts
|   |   |   |   |   ArrayTypeName #2933
|   |   |   |   |   |   ElementaryTypeName #2932
|   |   |   Block #3007
|   |   |   |   ExpressionStatement #2943
|   |   |   |   |   FunctionCall #2942
|   |   |   |   |   |   Identifier #2936
|   |   |   |   |   |   BinaryOperation #2940
|   |   |   |   |   |   |   MemberAccess #2938
|   |   |   |   |   |   |   |   Identifier #2937
|   |   |   |   |   |   |   Literal #2939
|   |   |   |   |   |   Literal #2941
|   |   |   |   ExpressionStatement #2952
|   |   |   |   |   Assignment #2951
|   |   |   |   |   |   Identifier #2944
|   |   |   |   |   |   FunctionCall #2950
|   |   |   |   |   |   |   NewExpression #2947
|   |   |   |   |   |   |   |   ArrayTypeName #2946
|   |   |   |   |   |   |   |   |   ElementaryTypeName #2945
|   |   |   |   |   |   |   MemberAccess #2949
|   |   |   |   |   |   |   |   Identifier #2948
|   |   |   |   ExpressionStatement #2961
|   |   |   |   |   Assignment #2960
|   |   |   |   |   |   IndexAccess #2958
|   |   |   |   |   |   |   Identifier #2953
|   |   |   |   |   |   |   BinaryOperation #2957
|   |   |   |   |   |   |   |   MemberAccess #2955
|   |   |   |   |   |   |   |   |   Identifier #2954
|   |   |   |   |   |   |   |   Literal #2956
|   |   |   |   |   |   Identifier #2959
|   |   |   |   ForStatement #3006
|   |   |   |   |   VariableDeclarationStatement #2968
|   |   |   |   |   |   VariableDeclaration #2963 -> uint256 i
|   |   |   |   |   |   |   ElementaryTypeName #2962
|   |   |   |   |   |   BinaryOperation #2967
|   |   |   |   |   |   |   MemberAccess #2965
|   |   |   |   |   |   |   |   Identifier #2964
|   |   |   |   |   |   |   Literal #2966
|   |   |   |   |   BinaryOperation #2971
|   |   |   |   |   |   Identifier #2969
|   |   |   |   |   |   Literal #2970
|   |   |   |   |   ExpressionStatement #2974
|   |   |   |   |   |   UnaryOperation #2973
|   |   |   |   |   |   |   Identifier #2972
|   |   |   |   |   Block #3005
|   |   |   |   |   |   VariableDeclarationStatement #2990
|   |   |   |   |   |   |   VariableDeclaration #2976 -> uint256 reserveIn
|   |   |   |   |   |   |   |   ElementaryTypeName #2975
|   |   |   |   |   |   |   VariableDeclaration #2978 -> uint256 reserveOut
|   |   |   |   |   |   |   |   ElementaryTypeName #2977
|   |   |   |   |   |   |   FunctionCall #2989
|   |   |   |   |   |   |   |   Identifier #2979
|   |   |   |   |   |   |   |   Identifier #2980
|   |   |   |   |   |   |   |   IndexAccess #2985
|   |   |   |   |   |   |   |   |   Identifier #2981
|   |   |   |   |   |   |   |   |   BinaryOperation #2984
|   |   |   |   |   |   |   |   |   |   Identifier #2982
|   |   |   |   |   |   |   |   |   |   Literal #2983
|   |   |   |   |   |   |   |   IndexAccess #2988
|   |   |   |   |   |   |   |   |   Identifier #2986
|   |   |   |   |   |   |   |   |   Identifier #2987
|   |   |   |   |   |   ExpressionStatement #3004
|   |   |   |   |   |   |   Assignment #3003
|   |   |   |   |   |   |   |   IndexAccess #2995
|   |   |   |   |   |   |   |   |   Identifier #2991
|   |   |   |   |   |   |   |   |   BinaryOperation #2994
|   |   |   |   |   |   |   |   |   |   Identifier #2992
|   |   |   |   |   |   |   |   |   |   Literal #2993
|   |   |   |   |   |   |   |   FunctionCall #3002
|   |   |   |   |   |   |   |   |   Identifier #2996
|   |   |   |   |   |   |   |   |   IndexAccess #2999
|   |   |   |   |   |   |   |   |   |   Identifier #2997
|   |   |   |   |   |   |   |   |   |   Identifier #2998
|   |   |   |   |   |   |   |   |   Identifier #3000
|   |   |   |   |   |   |   |   |   Identifier #3001

