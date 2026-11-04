declare module "packages/com/blakebr0/cucumber/crafting/$OutputResolver$Item" {
import {$OutputResolver, $OutputResolver$Type} from "packages/com/blakebr0/cucumber/crafting/$OutputResolver"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $OutputResolver$Item implements $OutputResolver {

constructor(arg0: $ItemStack$Type)

public "resolve"(): $ItemStack
public static "create"(arg0: $FriendlyByteBuf$Type): $OutputResolver$Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputResolver$Item$Type = ($OutputResolver$Item);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutputResolver$Item_ = $OutputResolver$Item$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/api/crafting/$ITableRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $ITableRecipe extends $Recipe<($Container)> {

 "getTier"(): integer
 "hasRequiredTier"(): boolean
 "getId"(): $ResourceLocation
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "isSpecial"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "isIncomplete"(): boolean
 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "getType"(): $ResourceLocation
 "getMod"(): string
 "getSchema"(): $RecipeSchema
 "getGroup"(): string
 "setGroup"(group: string): void
 "getOrCreateId"(): $ResourceLocation
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
}

export namespace $ITableRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITableRecipe$Type = ($ITableRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITableRecipe_ = $ITableRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$CompressorRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$ICompressorRecipe, $ICompressorRecipe$Type} from "packages/com/blakebr0/extendedcrafting/api/crafting/$ICompressorRecipe"

export class $CompressorRecipe implements $ISpecialRecipe, $ICompressorRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: integer, arg4: $Ingredient$Type, arg5: integer)
constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: integer, arg4: $Ingredient$Type, arg5: integer, arg6: integer)

public "matches"(arg0: $IItemHandler$Type): boolean
public "getId"(): $ResourceLocation
public "getPowerCost"(): integer
public "getPowerRate"(): integer
public "getInputCount"(): integer
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getCatalyst"(): $Ingredient
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "getMod"(): string
public "getSchema"(): $RecipeSchema
public "getGroup"(): string
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
get "id"(): $ResourceLocation
get "powerCost"(): integer
get "powerRate"(): integer
get "inputCount"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "catalyst"(): $Ingredient
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "mod"(): string
get "schema"(): $RecipeSchema
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressorRecipe$Type = ($CompressorRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompressorRecipe_ = $CompressorRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$UltimateSingularityRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$UltimateSingularityRecipe, $UltimateSingularityRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$UltimateSingularityRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $UltimateSingularityRecipe$Serializer implements $RecipeSerializer<($UltimateSingularityRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $UltimateSingularityRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $UltimateSingularityRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $UltimateSingularityRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $UltimateSingularityRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UltimateSingularityRecipe$Serializer$Type = ($UltimateSingularityRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UltimateSingularityRecipe$Serializer_ = $UltimateSingularityRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessTableRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ShapelessTableRecipe, $ShapelessTableRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessTableRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapelessTableRecipe$Serializer implements $RecipeSerializer<($ShapelessTableRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapelessTableRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapelessTableRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapelessTableRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapelessTableRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessTableRecipe$Serializer$Type = ($ShapelessTableRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessTableRecipe$Serializer_ = $ShapelessTableRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$PedestalBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PedestalBlock extends $BaseTileEntityBlock {
static readonly "PEDESTAL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PedestalBlock$Type = ($PedestalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PedestalBlock_ = $PedestalBlock$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedTransferDamageRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $ShapedTransferDamageRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
 "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $ItemStack$Type, arg7: boolean, arg8: boolean)

public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTransferDamageRecipe$Type = ($ShapedTransferDamageRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedTransferDamageRecipe_ = $ShapedTransferDamageRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapedFluxCrafterRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$IFluxCrafterRecipe, $IFluxCrafterRecipe$Type} from "packages/com/blakebr0/extendedcrafting/api/crafting/$IFluxCrafterRecipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ShapedFluxCrafterRecipe implements $ISpecialRecipe, $IFluxCrafterRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $ItemStack$Type, arg5: integer)
constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $ItemStack$Type, arg5: integer, arg6: integer)

public "matches"(arg0: $IItemHandler$Type): boolean
public "getWidth"(): integer
public "getHeight"(): integer
public "getId"(): $ResourceLocation
public "getPowerRate"(): integer
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getPowerRequired"(): integer
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "getMod"(): string
public "getSchema"(): $RecipeSchema
public "getGroup"(): string
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
get "width"(): integer
get "height"(): integer
get "id"(): $ResourceLocation
get "powerRate"(): integer
get "powerRequired"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "mod"(): string
get "schema"(): $RecipeSchema
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedFluxCrafterRecipe$Type = ($ShapedFluxCrafterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedFluxCrafterRecipe_ = $ShapedFluxCrafterRecipe$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedTransferDamageRecipe$Serializer" {
import {$ShapedTransferDamageRecipe, $ShapedTransferDamageRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedTransferDamageRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedTransferDamageRecipe$Serializer implements $RecipeSerializer<($ShapedTransferDamageRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedTransferDamageRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedTransferDamageRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedTransferDamageRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedTransferDamageRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTransferDamageRecipe$Serializer$Type = ($ShapedTransferDamageRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedTransferDamageRecipe$Serializer_ = $ShapedTransferDamageRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/$OutputResolver" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$OutputResolver$Item, $OutputResolver$Item$Type} from "packages/com/blakebr0/cucumber/crafting/$OutputResolver$Item"

export interface $OutputResolver {

 "resolve"(): $ItemStack

(): $ItemStack
}

export namespace $OutputResolver {
function create(arg0: $FriendlyByteBuf$Type): $OutputResolver$Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputResolver$Type = ($OutputResolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutputResolver_ = $OutputResolver$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedTransferNBTRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ShapedTransferNBTRecipe, $ShapedTransferNBTRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedTransferNBTRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedTransferNBTRecipe$Serializer implements $RecipeSerializer<($ShapedTransferNBTRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedTransferNBTRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedTransferNBTRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedTransferNBTRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedTransferNBTRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTransferNBTRecipe$Serializer$Type = ($ShapedTransferNBTRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedTransferNBTRecipe$Serializer_ = $ShapedTransferNBTRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/item/$HandheldTableItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HandheldTableItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandheldTableItem$Type = ($HandheldTableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandheldTableItem_ = $HandheldTableItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/item/$UltimateSingularityItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UltimateSingularityItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UltimateSingularityItem$Type = ($UltimateSingularityItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UltimateSingularityItem_ = $UltimateSingularityItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessFluxCrafterRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ShapelessFluxCrafterRecipe, $ShapelessFluxCrafterRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessFluxCrafterRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapelessFluxCrafterRecipe$Serializer implements $RecipeSerializer<($ShapelessFluxCrafterRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapelessFluxCrafterRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapelessFluxCrafterRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapelessFluxCrafterRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapelessFluxCrafterRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessFluxCrafterRecipe$Serializer$Type = ($ShapelessFluxCrafterRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessFluxCrafterRecipe$Serializer_ = $ShapelessFluxCrafterRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapelessTagRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ShapelessTagRecipe, $ShapelessTagRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/recipe/$ShapelessTagRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapelessTagRecipe$Serializer implements $RecipeSerializer<($ShapelessTagRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapelessTagRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapelessTagRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapelessTagRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapelessTagRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessTagRecipe$Serializer$Type = ($ShapelessTagRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessTagRecipe$Serializer_ = $ShapelessTagRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/$BaseShinyItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseShinyItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()
constructor(arg0: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)

public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseShinyItem$Type = ($BaseShinyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseShinyItem_ = $BaseShinyItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$UltimateTableBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $UltimateTableBlock extends $BaseTileEntityBlock {
static readonly "ULTIMATE_TABLE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UltimateTableBlock$Type = ($UltimateTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UltimateTableBlock_ = $UltimateTableBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$AutoFluxCrafterBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AutoFluxCrafterBlock extends $BaseTileEntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoFluxCrafterBlock$Type = ($AutoFluxCrafterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoFluxCrafterBlock_ = $AutoFluxCrafterBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$TheUltimateBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $TheUltimateBlock extends $BaseTileEntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TheUltimateBlock$Type = ($TheUltimateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TheUltimateBlock_ = $TheUltimateBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessEnderCrafterRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$IEnderCrafterRecipe, $IEnderCrafterRecipe$Type} from "packages/com/blakebr0/extendedcrafting/api/crafting/$IEnderCrafterRecipe"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ShapelessEnderCrafterRecipe implements $ISpecialRecipe, $IEnderCrafterRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $ItemStack$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: integer)

public "matches"(arg0: $IItemHandler$Type): boolean
public "getId"(): $ResourceLocation
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getCraftingTime"(): integer
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "getMod"(): string
public "getSchema"(): $RecipeSchema
public "getGroup"(): string
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
get "id"(): $ResourceLocation
get "craftingTime"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "mod"(): string
get "schema"(): $RecipeSchema
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessEnderCrafterRecipe$Type = ($ShapelessEnderCrafterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessEnderCrafterRecipe_ = $ShapelessEnderCrafterRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapedEnderCrafterRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$IEnderCrafterRecipe, $IEnderCrafterRecipe$Type} from "packages/com/blakebr0/extendedcrafting/api/crafting/$IEnderCrafterRecipe"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ShapedEnderCrafterRecipe implements $ISpecialRecipe, $IEnderCrafterRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $ItemStack$Type)
constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $ItemStack$Type, arg5: integer)

public "matches"(arg0: $IItemHandler$Type): boolean
public "getWidth"(): integer
public "getHeight"(): integer
public "getId"(): $ResourceLocation
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getCraftingTime"(): integer
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "getMod"(): string
public "getSchema"(): $RecipeSchema
public "getGroup"(): string
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
get "width"(): integer
get "height"(): integer
get "id"(): $ResourceLocation
get "craftingTime"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "mod"(): string
get "schema"(): $RecipeSchema
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedEnderCrafterRecipe$Type = ($ShapedEnderCrafterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedEnderCrafterRecipe_ = $ShapedEnderCrafterRecipe$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedTagRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ShapedTagRecipe, $ShapedTagRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedTagRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedTagRecipe$Serializer implements $RecipeSerializer<($ShapedTagRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedTagRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedTagRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedTagRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedTagRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTagRecipe$Serializer$Type = ($ShapedTagRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedTagRecipe$Serializer_ = $ShapedTagRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/cucumber/util/$TriFunction" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"

export interface $TriFunction<A, B, C, R> {

 "apply"(arg0: A, arg1: B, arg2: C): R
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $TriFunction<(A), (B), (C), (V)>

(arg0: A, arg1: B, arg2: C): R
}

export namespace $TriFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriFunction$Type<A, B, C, R> = ($TriFunction<(A), (B), (C), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriFunction_<A, B, C, R> = $TriFunction$Type<(A), (B), (C), (R)>;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$CompressorRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CompressorRecipe, $CompressorRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$CompressorRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CompressorRecipe$Serializer implements $RecipeSerializer<($CompressorRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CompressorRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CompressorRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CompressorRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CompressorRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressorRecipe$Serializer$Type = ($CompressorRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompressorRecipe$Serializer_ = $CompressorRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$AdvancedTableBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AdvancedTableBlock extends $BaseTileEntityBlock {
static readonly "ADVANCED_TABLE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedTableBlock$Type = ($AdvancedTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedTableBlock_ = $AdvancedTableBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapedTableRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ShapedTableRecipe, $ShapedTableRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapedTableRecipe"

export class $ShapedTableRecipe$Serializer implements $RecipeSerializer<($ShapedTableRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedTableRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedTableRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedTableRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedTableRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTableRecipe$Serializer$Type = ($ShapedTableRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedTableRecipe$Serializer_ = $ShapedTableRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/api/crafting/$ICombinationRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $ICombinationRecipe extends $Recipe<($Container)> {

 "getInputsList"(): $List<($Component)>
 "getPowerCost"(): integer
 "getPowerRate"(): integer
 "getId"(): $ResourceLocation
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "isSpecial"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "isIncomplete"(): boolean
 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "getType"(): $ResourceLocation
 "getMod"(): string
 "getSchema"(): $RecipeSchema
 "getGroup"(): string
 "setGroup"(group: string): void
 "getOrCreateId"(): $ResourceLocation
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
}

export namespace $ICombinationRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICombinationRecipe$Type = ($ICombinationRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICombinationRecipe_ = $ICombinationRecipe$Type;
}}
declare module "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseBlock"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BaseTileEntityBlock extends $BaseBlock implements $EntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $SoundType$Type, arg1: float, arg2: float, arg3: boolean)
constructor(arg0: $SoundType$Type, arg1: float, arg2: float)
constructor(arg0: $Function$Type<($BlockBehaviour$Properties$Type), ($BlockBehaviour$Properties$Type)>)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseTileEntityBlock$Type = ($BaseTileEntityBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseTileEntityBlock_ = $BaseTileEntityBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/item/$RecipeMakerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RecipeMakerItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeMakerItem$Type = ($RecipeMakerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeMakerItem_ = $RecipeMakerItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$BasicTableBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BasicTableBlock extends $BaseTileEntityBlock {
static readonly "BASIC_TABLE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicTableBlock$Type = ($BasicTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicTableBlock_ = $BasicTableBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$CombinationRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ICombinationRecipe, $ICombinationRecipe$Type} from "packages/com/blakebr0/extendedcrafting/api/crafting/$ICombinationRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $CombinationRecipe implements $ISpecialRecipe, $ICombinationRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: integer)
constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: integer, arg4: integer)

public "getInputsList"(): $List<($Component)>
public "matches"(arg0: $IItemHandler$Type): boolean
public "getId"(): $ResourceLocation
public "getPowerCost"(): integer
public "getPowerRate"(): integer
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "getMod"(): string
public "getSchema"(): $RecipeSchema
public "getGroup"(): string
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
get "inputsList"(): $List<($Component)>
get "id"(): $ResourceLocation
get "powerCost"(): integer
get "powerRate"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "mod"(): string
get "schema"(): $RecipeSchema
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombinationRecipe$Type = ($CombinationRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CombinationRecipe_ = $CombinationRecipe$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedTagRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapedNoMirrorRecipe, $ShapedNoMirrorRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedNoMirrorRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$OutputResolver$Item, $OutputResolver$Item$Type} from "packages/com/blakebr0/cucumber/crafting/$OutputResolver$Item"

export class $ShapedTagRecipe extends $ShapedNoMirrorRecipe {
readonly "width": integer
readonly "height": integer
 "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $OutputResolver$Item$Type, arg7: boolean)
constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: string, arg7: integer, arg8: boolean)

public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTagRecipe$Type = ($ShapedTagRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedTagRecipe_ = $ShapedTagRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$AdvancedAutoTableBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AdvancedAutoTableBlock extends $BaseTileEntityBlock {
static readonly "ADVANCED_AUTO_TABLE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedAutoTableBlock$Type = ($AdvancedAutoTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedAutoTableBlock_ = $AdvancedAutoTableBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/item/$SingularityItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IColored, $IColored$Type} from "packages/com/blakebr0/cucumber/iface/$IColored"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SingularityItem extends $BaseItem implements $IColored {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getColor"(arg0: integer, arg1: $ItemStack$Type): integer
public "getColor"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingularityItem$Type = ($SingularityItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingularityItem_ = $SingularityItem$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedNoMirrorRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ShapedNoMirrorRecipe, $ShapedNoMirrorRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedNoMirrorRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedNoMirrorRecipe$Serializer implements $RecipeSerializer<($ShapedNoMirrorRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedNoMirrorRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedNoMirrorRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedNoMirrorRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedNoMirrorRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedNoMirrorRecipe$Serializer$Type = ($ShapedNoMirrorRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedNoMirrorRecipe$Serializer_ = $ShapedNoMirrorRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$CompressorBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $CompressorBlock extends $BaseTileEntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressorBlock$Type = ($CompressorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompressorBlock_ = $CompressorBlock$Type;
}}
declare module "packages/com/blakebr0/cucumber/block/$BaseBlock" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BaseBlock extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $Function$Type<($BlockBehaviour$Properties$Type), ($BlockBehaviour$Properties$Type)>)
constructor(arg0: $SoundType$Type, arg1: float, arg2: float)
constructor(arg0: $SoundType$Type, arg1: float, arg2: float, arg3: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlock$Type = ($BaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlock_ = $BaseBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$UltimateSingularityRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessTableRecipe, $ShapelessTableRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessTableRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $UltimateSingularityRecipe extends $ShapelessTableRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type)

public "matches"(arg0: $IItemHandler$Type): boolean
public static "invalidate"(): void
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UltimateSingularityRecipe$Type = ($UltimateSingularityRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UltimateSingularityRecipe_ = $UltimateSingularityRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$BasicAutoTableBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BasicAutoTableBlock extends $BaseTileEntityBlock {
static readonly "BASIC_AUTO_TABLE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicAutoTableBlock$Type = ($BasicAutoTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicAutoTableBlock_ = $BasicAutoTableBlock$Type;
}}
declare module "packages/com/blakebr0/cucumber/iface/$IColored" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IColored {

 "getColor"(arg0: integer): integer
 "getColor"(arg0: integer, arg1: $ItemStack$Type): integer
}

export namespace $IColored {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColored$Type = ($IColored);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColored_ = $IColored$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$EliteTableBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EliteTableBlock extends $BaseTileEntityBlock {
static readonly "ELITE_TABLE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EliteTableBlock$Type = ($EliteTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EliteTableBlock_ = $EliteTableBlock$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/$BaseBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type)
constructor(arg0: $Block$Type, arg1: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$Type = ($BaseBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockItem_ = $BaseBlockItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessEnderCrafterRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ShapelessEnderCrafterRecipe, $ShapelessEnderCrafterRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessEnderCrafterRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapelessEnderCrafterRecipe$Serializer implements $RecipeSerializer<($ShapelessEnderCrafterRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapelessEnderCrafterRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapelessEnderCrafterRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapelessEnderCrafterRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapelessEnderCrafterRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessEnderCrafterRecipe$Serializer$Type = ($ShapelessEnderCrafterRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessEnderCrafterRecipe$Serializer_ = $ShapelessEnderCrafterRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapedFluxCrafterRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ShapedFluxCrafterRecipe, $ShapedFluxCrafterRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapedFluxCrafterRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedFluxCrafterRecipe$Serializer implements $RecipeSerializer<($ShapedFluxCrafterRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedFluxCrafterRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedFluxCrafterRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedFluxCrafterRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedFluxCrafterRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedFluxCrafterRecipe$Serializer$Type = ($ShapedFluxCrafterRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedFluxCrafterRecipe$Serializer_ = $ShapedFluxCrafterRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/api/crafting/$IEnderCrafterRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $IEnderCrafterRecipe extends $Recipe<($Container)> {

 "getCraftingTime"(): integer
 "getId"(): $ResourceLocation
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "isSpecial"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "isIncomplete"(): boolean
 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "getType"(): $ResourceLocation
 "getMod"(): string
 "getSchema"(): $RecipeSchema
 "getGroup"(): string
 "setGroup"(group: string): void
 "getOrCreateId"(): $ResourceLocation
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
}

export namespace $IEnderCrafterRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnderCrafterRecipe$Type = ($IEnderCrafterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnderCrafterRecipe_ = $IEnderCrafterRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$CraftingCoreBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CraftingCoreBlock extends $BaseTileEntityBlock {
static readonly "CRAFTING_CORE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingCoreBlock$Type = ($CraftingCoreBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingCoreBlock_ = $CraftingCoreBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$CombinationRecipe$Serializer" {
import {$CombinationRecipe, $CombinationRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$CombinationRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CombinationRecipe$Serializer implements $RecipeSerializer<($CombinationRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CombinationRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CombinationRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CombinationRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CombinationRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombinationRecipe$Serializer$Type = ($CombinationRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CombinationRecipe$Serializer_ = $CombinationRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapelessTagRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$OutputResolver$Item, $OutputResolver$Item$Type} from "packages/com/blakebr0/cucumber/crafting/$OutputResolver$Item"

export class $ShapelessTagRecipe extends $ShapelessRecipe {
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $OutputResolver$Item$Type)
constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: string, arg5: integer)

public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessTagRecipe$Type = ($ShapelessTagRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessTagRecipe_ = $ShapelessTagRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$EnderCrafterBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EnderCrafterBlock extends $BaseTileEntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderCrafterBlock$Type = ($EnderCrafterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderCrafterBlock_ = $EnderCrafterBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$FluxCrafterBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FluxCrafterBlock extends $BaseTileEntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluxCrafterBlock$Type = ($FluxCrafterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluxCrafterBlock_ = $FluxCrafterBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/api/crafting/$IFluxCrafterRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $IFluxCrafterRecipe extends $Recipe<($Container)> {

 "getPowerRate"(): integer
 "getPowerRequired"(): integer
 "getId"(): $ResourceLocation
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "isSpecial"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "isIncomplete"(): boolean
 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "getType"(): $ResourceLocation
 "getMod"(): string
 "getSchema"(): $RecipeSchema
 "getGroup"(): string
 "setGroup"(group: string): void
 "getOrCreateId"(): $ResourceLocation
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
}

export namespace $IFluxCrafterRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluxCrafterRecipe$Type = ($IFluxCrafterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluxCrafterRecipe_ = $IFluxCrafterRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$EnderAlternatorBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseBlock"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EnderAlternatorBlock extends $BaseBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderAlternatorBlock$Type = ($EnderAlternatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderAlternatorBlock_ = $EnderAlternatorBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$AutoEnderCrafterBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AutoEnderCrafterBlock extends $BaseTileEntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoEnderCrafterBlock$Type = ($AutoEnderCrafterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoEnderCrafterBlock_ = $AutoEnderCrafterBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapedEnderCrafterRecipe$Serializer" {
import {$ShapedEnderCrafterRecipe, $ShapedEnderCrafterRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapedEnderCrafterRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedEnderCrafterRecipe$Serializer implements $RecipeSerializer<($ShapedEnderCrafterRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedEnderCrafterRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedEnderCrafterRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedEnderCrafterRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedEnderCrafterRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedEnderCrafterRecipe$Serializer$Type = ($ShapedEnderCrafterRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedEnderCrafterRecipe$Serializer_ = $ShapedEnderCrafterRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessFluxCrafterRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$IFluxCrafterRecipe, $IFluxCrafterRecipe$Type} from "packages/com/blakebr0/extendedcrafting/api/crafting/$IFluxCrafterRecipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ShapelessFluxCrafterRecipe implements $ISpecialRecipe, $IFluxCrafterRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: integer)
constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: integer, arg4: integer)

public "matches"(arg0: $IItemHandler$Type): boolean
public "getId"(): $ResourceLocation
public "getPowerRate"(): integer
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getPowerRequired"(): integer
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "getMod"(): string
public "getSchema"(): $RecipeSchema
public "getGroup"(): string
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
get "id"(): $ResourceLocation
get "powerRate"(): integer
get "powerRequired"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "mod"(): string
get "schema"(): $RecipeSchema
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessFluxCrafterRecipe$Type = ($ShapelessFluxCrafterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessFluxCrafterRecipe_ = $ShapelessFluxCrafterRecipe$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedNoMirrorRecipe" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $ShapedNoMirrorRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
 "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $ItemStack$Type, arg7: boolean)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedNoMirrorRecipe$Type = ($ShapedNoMirrorRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedNoMirrorRecipe_ = $ShapedNoMirrorRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapedTableRecipe" {
import {$TriFunction, $TriFunction$Type} from "packages/com/blakebr0/cucumber/util/$TriFunction"
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ITableRecipe, $ITableRecipe$Type} from "packages/com/blakebr0/extendedcrafting/api/crafting/$ITableRecipe"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ShapedTableRecipe implements $ISpecialRecipe, $ITableRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $ItemStack$Type)
constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $ItemStack$Type, arg5: integer)

public "setTransformer"(arg0: $TriFunction$Type<(integer), (integer), ($ItemStack$Type), ($ItemStack$Type)>): void
public "matches"(arg0: $IItemHandler$Type): boolean
public "getWidth"(): integer
public "getHeight"(): integer
public "getId"(): $ResourceLocation
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getTier"(): integer
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "hasRequiredTier"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "getMod"(): string
public "getSchema"(): $RecipeSchema
public "getGroup"(): string
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
set "transformer"(value: $TriFunction$Type<(integer), (integer), ($ItemStack$Type), ($ItemStack$Type)>)
get "width"(): integer
get "height"(): integer
get "id"(): $ResourceLocation
get "tier"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "mod"(): string
get "schema"(): $RecipeSchema
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTableRecipe$Type = ($ShapedTableRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedTableRecipe_ = $ShapedTableRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/api/crafting/$ICompressorRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $ICompressorRecipe extends $Recipe<($Container)> {

 "getPowerCost"(): integer
 "getPowerRate"(): integer
 "getInputCount"(): integer
 "getCatalyst"(): $Ingredient
 "getId"(): $ResourceLocation
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "isSpecial"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "isIncomplete"(): boolean
 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "getType"(): $ResourceLocation
 "getMod"(): string
 "getSchema"(): $RecipeSchema
 "getGroup"(): string
 "setGroup"(group: string): void
 "getOrCreateId"(): $ResourceLocation
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
}

export namespace $ICompressorRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICompressorRecipe$Type = ($ICompressorRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICompressorRecipe_ = $ICompressorRecipe$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/$BaseItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()
constructor(arg0: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItem$Type = ($BaseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseItem_ = $BaseItem$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedTransferNBTRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $ShapedTransferNBTRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
 "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $ItemStack$Type, arg7: boolean, arg8: integer)

public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTransferNBTRecipe$Type = ($ShapedTransferNBTRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedTransferNBTRecipe_ = $ShapedTransferNBTRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessTableRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ITableRecipe, $ITableRecipe$Type} from "packages/com/blakebr0/extendedcrafting/api/crafting/$ITableRecipe"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ShapelessTableRecipe implements $ISpecialRecipe, $ITableRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $ItemStack$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: integer)

public "setTransformer"(arg0: $BiFunction$Type<(integer), ($ItemStack$Type), ($ItemStack$Type)>): void
public "matches"(arg0: $IItemHandler$Type): boolean
public "getId"(): $ResourceLocation
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getTier"(): integer
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "hasRequiredTier"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "getMod"(): string
public "getSchema"(): $RecipeSchema
public "getGroup"(): string
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
set "transformer"(value: $BiFunction$Type<(integer), ($ItemStack$Type), ($ItemStack$Type)>)
get "id"(): $ResourceLocation
get "tier"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "mod"(): string
get "schema"(): $RecipeSchema
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessTableRecipe$Type = ($ShapelessTableRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessTableRecipe_ = $ShapelessTableRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$FrameBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $FrameBlock extends $BaseBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameBlock$Type = ($FrameBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrameBlock_ = $FrameBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$FluxAlternatorBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FluxAlternatorBlock extends $BaseTileEntityBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluxAlternatorBlock$Type = ($FluxAlternatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluxAlternatorBlock_ = $FluxAlternatorBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$UltimateAutoTableBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $UltimateAutoTableBlock extends $BaseTileEntityBlock {
static readonly "ULTIMATE_AUTO_TABLE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UltimateAutoTableBlock$Type = ($UltimateAutoTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UltimateAutoTableBlock_ = $UltimateAutoTableBlock$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $ISpecialRecipe extends $Recipe<($Container)> {

 "matches"(arg0: $IItemHandler$Type): boolean
 "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
 "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "getId"(): $ResourceLocation
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "isSpecial"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "isIncomplete"(): boolean
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "getType"(): $ResourceLocation
 "getMod"(): string
 "getSchema"(): $RecipeSchema
 "getGroup"(): string
 "setGroup"(group: string): void
 "getOrCreateId"(): $ResourceLocation
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
}

export namespace $ISpecialRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpecialRecipe$Type = ($ISpecialRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpecialRecipe_ = $ISpecialRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$EliteAutoTableBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EliteAutoTableBlock extends $BaseTileEntityBlock {
static readonly "ELITE_AUTO_TABLE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EliteAutoTableBlock$Type = ($EliteAutoTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EliteAutoTableBlock_ = $EliteAutoTableBlock$Type;
}}
