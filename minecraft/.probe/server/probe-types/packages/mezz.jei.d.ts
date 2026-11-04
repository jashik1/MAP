declare module "packages/mezz/jei/api/gui/builder/$IRecipeSlotBuilder" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IIngredientConsumer, $IIngredientConsumer$Type} from "packages/mezz/jei/api/gui/builder/$IIngredientConsumer"
import {$VerticalAlignment, $VerticalAlignment$Type} from "packages/mezz/jei/api/gui/placement/$VerticalAlignment"
import {$IRecipeSlotTooltipCallback, $IRecipeSlotTooltipCallback$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotTooltipCallback"
import {$IPlaceable, $IPlaceable$Type} from "packages/mezz/jei/api/gui/placement/$IPlaceable"
import {$HorizontalAlignment, $HorizontalAlignment$Type} from "packages/mezz/jei/api/gui/placement/$HorizontalAlignment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IIngredientAcceptor, $IIngredientAcceptor$Type} from "packages/mezz/jei/api/gui/builder/$IIngredientAcceptor"
import {$IRecipeSlotRichTooltipCallback, $IRecipeSlotRichTooltipCallback$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotRichTooltipCallback"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TilingDirection, $TilingDirection$Type} from "packages/mezz/jei/api/gui/drawable/$TilingDirection"
import {$IIngredientRenderer, $IIngredientRenderer$Type} from "packages/mezz/jei/api/ingredients/$IIngredientRenderer"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"

export interface $IRecipeSlotBuilder extends $IIngredientAcceptor<($IRecipeSlotBuilder)>, $IPlaceable<($IRecipeSlotBuilder)> {

/**
 * 
 * @deprecated
 */
 "addTooltipCallback"(arg0: $IRecipeSlotTooltipCallback$Type): $IRecipeSlotBuilder
 "setSlotName"(arg0: string): $IRecipeSlotBuilder
 "setFluidRenderer"(arg0: long, arg1: boolean, arg2: integer, arg3: integer): $IRecipeSlotBuilder
 "setFluidRenderer"(arg0: long, arg1: boolean, arg2: integer, arg3: integer, arg4: $TilingDirection$Type): $IRecipeSlotBuilder
 "setCustomRenderer"<T>(arg0: $IIngredientType$Type<(T)>, arg1: $IIngredientRenderer$Type<(T)>): $IRecipeSlotBuilder
 "setStandardSlotBackground"(): $IRecipeSlotBuilder
 "setOutputSlotBackground"(): $IRecipeSlotBuilder
 "addRichTooltipCallback"(arg0: $IRecipeSlotRichTooltipCallback$Type): $IRecipeSlotBuilder
 "getWidth"(): integer
 "getHeight"(): integer
 "setPosition"(arg0: integer, arg1: integer): $IRecipeSlotBuilder
 "setPosition"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $HorizontalAlignment$Type, arg5: $VerticalAlignment$Type): $IRecipeSlotBuilder
 "setBackground"(arg0: $IDrawable$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "setOverlay"(arg0: $IDrawable$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "addItemLike"(arg0: $ItemLike$Type): $IIngredientConsumer
 "addIngredient"<I>(arg0: $IIngredientType$Type<(I)>, arg1: I): $IRecipeSlotBuilder
 "addIngredientsUnsafe"(arg0: $List$Type<(any)>): $IRecipeSlotBuilder
 "addItemStack"(arg0: $ItemStack$Type): $IRecipeSlotBuilder
}

export namespace $IRecipeSlotBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotBuilder$Type = ($IRecipeSlotBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotBuilder_ = $IRecipeSlotBuilder$Type;
}}
declare module "packages/mezz/jei/api/gui/widgets/$IRecipeWidget" {
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenPosition"
import {$ScreenRectangle, $ScreenRectangle$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IRecipeWidget {

 "getScreenRectangle"(): $ScreenRectangle
 "tick"(): void
 "getPosition"(): $ScreenPosition
/**
 * 
 * @deprecated
 */
 "draw"(arg0: $GuiGraphics$Type, arg1: double, arg2: double): void
 "getTooltip"(arg0: $ITooltipBuilder$Type, arg1: double, arg2: double): void
 "drawWidget"(arg0: $GuiGraphics$Type, arg1: double, arg2: double): void

(): $ScreenRectangle
}

export namespace $IRecipeWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeWidget$Type = ($IRecipeWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeWidget_ = $IRecipeWidget$Type;
}}
declare module "packages/mezz/jei/api/registration/$IRecipeRegistration" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$IVanillaRecipeFactory, $IVanillaRecipeFactory$Type} from "packages/mezz/jei/api/recipe/vanilla/$IVanillaRecipeFactory"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IIngredientVisibility, $IIngredientVisibility$Type} from "packages/mezz/jei/api/runtime/$IIngredientVisibility"
import {$IIngredientManager, $IIngredientManager$Type} from "packages/mezz/jei/api/runtime/$IIngredientManager"

export interface $IRecipeRegistration {

 "addRecipes"<T>(arg0: $RecipeType$Type<(T)>, arg1: $List$Type<(T)>): void
/**
 * 
 * @deprecated
 */
 "getIngredientVisibility"(): $IIngredientVisibility
 "addIngredientInfo"<T>(arg0: T, arg1: $IIngredientType$Type<(T)>, ...arg2: ($Component$Type)[]): void
 "addIngredientInfo"<T>(arg0: $List$Type<(T)>, arg1: $IIngredientType$Type<(T)>, ...arg2: ($Component$Type)[]): void
 "addIngredientInfo"(arg0: $ItemLike$Type, ...arg1: ($Component$Type)[]): void
 "getJeiHelpers"(): $IJeiHelpers
 "getIngredientManager"(): $IIngredientManager
 "getVanillaRecipeFactory"(): $IVanillaRecipeFactory
 "addItemStackInfo"(arg0: $List$Type<($ItemStack$Type)>, ...arg1: ($Component$Type)[]): void
 "addItemStackInfo"(arg0: $ItemStack$Type, ...arg1: ($Component$Type)[]): void
}

export namespace $IRecipeRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeRegistration$Type = ($IRecipeRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeRegistration_ = $IRecipeRegistration$Type;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IRecipeSlotView {

 "getSlotName"(): $Optional<(string)>
 "getItemStacks"(): $Stream<($ItemStack)>
 "getDisplayedItemStack"(): $Optional<($ItemStack)>
 "getDisplayedIngredients"(): $Stream<($ITypedIngredient<(any)>)>
 "getAllIngredientsList"(): $List<($ITypedIngredient<(any)>)>
 "isEmpty"(): boolean
 "getIngredients"<T>(arg0: $IIngredientType$Type<(T)>): $Stream<(T)>
 "getRole"(): $RecipeIngredientRole
 "getDisplayedIngredient"(): $Optional<($ITypedIngredient<(any)>)>
 "getDisplayedIngredient"<T>(arg0: $IIngredientType$Type<(T)>): $Optional<(T)>
 "getTagKey"(): $Optional<($TagKey<(any)>)>
 "getAllIngredients"(): $Stream<($ITypedIngredient<(any)>)>
 "drawHighlight"(arg0: $GuiGraphics$Type, arg1: integer): void
}

export namespace $IRecipeSlotView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotView$Type = ($IRecipeSlotView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotView_ = $IRecipeSlotView$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IRecipeManager" {
import {$IRecipeCatalystLookup, $IRecipeCatalystLookup$Type} from "packages/mezz/jei/api/recipe/$IRecipeCatalystLookup"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$IRecipeLookup, $IRecipeLookup$Type} from "packages/mezz/jei/api/recipe/$IRecipeLookup"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IRecipeLayoutDrawable, $IRecipeLayoutDrawable$Type} from "packages/mezz/jei/api/gui/$IRecipeLayoutDrawable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"
import {$IRecipeCategoriesLookup, $IRecipeCategoriesLookup$Type} from "packages/mezz/jei/api/recipe/$IRecipeCategoriesLookup"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeButtonControllerFactory, $IRecipeButtonControllerFactory$Type} from "packages/mezz/jei/api/recipe/advanced/$IRecipeButtonControllerFactory"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IScalableDrawable, $IScalableDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IScalableDrawable"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$IFocusGroup, $IFocusGroup$Type} from "packages/mezz/jei/api/recipe/$IFocusGroup"

export interface $IRecipeManager {

 "addRecipes"<T>(arg0: $RecipeType$Type<(T)>, arg1: $List$Type<(T)>): void
 "unhideRecipes"<T>(arg0: $RecipeType$Type<(T)>, arg1: $Collection$Type<(T)>): void
/**
 * 
 * @deprecated
 */
 "createRecipeSlotDrawable"(arg0: $RecipeIngredientRole$Type, arg1: $List$Type<($Optional$Type<($ITypedIngredient$Type<(any)>)>)>, arg2: $Set$Type<(integer)>, arg3: integer, arg4: integer, arg5: integer): $IRecipeSlotDrawable
 "createRecipeSlotDrawable"(arg0: $RecipeIngredientRole$Type, arg1: $List$Type<($Optional$Type<($ITypedIngredient$Type<(any)>)>)>, arg2: $Set$Type<(integer)>, arg3: integer): $IRecipeSlotDrawable
 "createRecipeCatalystLookup"(arg0: $RecipeType$Type<(any)>): $IRecipeCatalystLookup
 "getRecipeButtonControllerFactories"(): $List<($IRecipeButtonControllerFactory)>
 "createRecipeLayoutDrawable"<T>(arg0: $IRecipeCategory$Type<(T)>, arg1: T, arg2: $IFocusGroup$Type): $Optional<($IRecipeLayoutDrawable<(T)>)>
 "createRecipeLayoutDrawable"<T>(arg0: $IRecipeCategory$Type<(T)>, arg1: T, arg2: $IFocusGroup$Type, arg3: $IScalableDrawable$Type, arg4: integer): $Optional<($IRecipeLayoutDrawable<(T)>)>
 "unhideRecipeCategory"(arg0: $RecipeType$Type<(any)>): void
 "createRecipeLayoutDrawableOrShowError"<T>(arg0: $IRecipeCategory$Type<(T)>, arg1: T, arg2: $IFocusGroup$Type): $IRecipeLayoutDrawable<(T)>
 "getRecipeType"<T>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(any)>): $Optional<($RecipeType<(T)>)>
 "getRecipeType"(arg0: $ResourceLocation$Type): $Optional<($RecipeType<(any)>)>
 "createRecipeCategoryLookup"(): $IRecipeCategoriesLookup
 "getRecipeCategory"<T>(arg0: $RecipeType$Type<(T)>): $IRecipeCategory<(T)>
 "hideRecipeCategory"(arg0: $RecipeType$Type<(any)>): void
 "createRecipeLookup"<R>(arg0: $RecipeType$Type<(R)>): $IRecipeLookup<(R)>
 "hideRecipes"<T>(arg0: $RecipeType$Type<(T)>, arg1: $Collection$Type<(T)>): void
}

export namespace $IRecipeManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeManager$Type = ($IRecipeManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeManager_ = $IRecipeManager$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IRecipesGui" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IFocus, $IFocus$Type} from "packages/mezz/jei/api/recipe/$IFocus"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $IRecipesGui {

 "showTypes"(arg0: $List$Type<($RecipeType$Type<(any)>)>): void
 "show"<V>(arg0: $IFocus$Type<(V)>): void
 "show"(arg0: $List$Type<($IFocus$Type<(any)>)>): void
 "getParentScreen"(): $Optional<($Screen)>
 "getIngredientUnderMouse"<T>(arg0: $IIngredientType$Type<(T)>): $Optional<(T)>
 "showRecipes"<T>(arg0: $IRecipeCategory$Type<(T)>, arg1: $List$Type<(T)>, arg2: $List$Type<($IFocus$Type<(any)>)>): void
}

export namespace $IRecipesGui {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipesGui$Type = ($IRecipesGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipesGui_ = $IRecipesGui$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IJeiHelpers" {
import {$IModIdHelper, $IModIdHelper$Type} from "packages/mezz/jei/api/helpers/$IModIdHelper"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IColorHelper, $IColorHelper$Type} from "packages/mezz/jei/api/helpers/$IColorHelper"
import {$IVanillaRecipeFactory, $IVanillaRecipeFactory$Type} from "packages/mezz/jei/api/recipe/vanilla/$IVanillaRecipeFactory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredientManager, $IIngredientManager$Type} from "packages/mezz/jei/api/runtime/$IIngredientManager"
import {$IFocusFactory, $IFocusFactory$Type} from "packages/mezz/jei/api/recipe/$IFocusFactory"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IIngredientVisibility, $IIngredientVisibility$Type} from "packages/mezz/jei/api/runtime/$IIngredientVisibility"
import {$IPlatformFluidHelper, $IPlatformFluidHelper$Type} from "packages/mezz/jei/api/helpers/$IPlatformFluidHelper"
import {$IGuiHelper, $IGuiHelper$Type} from "packages/mezz/jei/api/helpers/$IGuiHelper"
import {$IStackHelper, $IStackHelper$Type} from "packages/mezz/jei/api/helpers/$IStackHelper"

export interface $IJeiHelpers {

 "getAllRecipeTypes"(): $Stream<($RecipeType<(any)>)>
 "getIngredientVisibility"(): $IIngredientVisibility
 "getPlatformFluidHelper"(): $IPlatformFluidHelper<(any)>
 "getGuiHelper"(): $IGuiHelper
 "getColorHelper"(): $IColorHelper
 "getRecipeType"<T>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(any)>): $Optional<($RecipeType<(T)>)>
/**
 * 
 * @deprecated
 */
 "getRecipeType"(arg0: $ResourceLocation$Type): $Optional<($RecipeType<(any)>)>
 "getIngredientManager"(): $IIngredientManager
 "getVanillaRecipeFactory"(): $IVanillaRecipeFactory
 "getFocusFactory"(): $IFocusFactory
 "getModIdHelper"(): $IModIdHelper
 "getStackHelper"(): $IStackHelper
}

export namespace $IJeiHelpers {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiHelpers$Type = ($IJeiHelpers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiHelpers_ = $IJeiHelpers$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IColorHelper" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $IColorHelper {

 "getClosestColorName"(arg0: integer): string
 "getColors"(arg0: $ItemStack$Type, arg1: integer): $List<(integer)>
 "getColors"(arg0: $TextureAtlasSprite$Type, arg1: integer, arg2: integer): $List<(integer)>
}

export namespace $IColorHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColorHelper$Type = ($IColorHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColorHelper_ = $IColorHelper$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IStackHelper" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$UidContext, $UidContext$Type} from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $IStackHelper {

 "getUniqueIdentifierForStack"(arg0: $ItemStack$Type, arg1: $UidContext$Type): string
 "getUidForStack"(arg0: $ItemStack$Type, arg1: $UidContext$Type): any
 "isEquivalent"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $UidContext$Type): boolean
}

export namespace $IStackHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStackHelper$Type = ($IStackHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStackHelper_ = $IStackHelper$Type;
}}
declare module "packages/mezz/jei/api/recipe/vanilla/$IJeiBrewingRecipe" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IJeiBrewingRecipe {

 "getPotionInputs"(): $List<($ItemStack)>
 "getPotionOutput"(): $ItemStack
 "getUid"(): $ResourceLocation
 "getIngredients"(): $List<($ItemStack)>
 "getBrewingSteps"(): integer
}

export namespace $IJeiBrewingRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiBrewingRecipe$Type = ($IJeiBrewingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiBrewingRecipe_ = $IJeiBrewingRecipe$Type;
}}
declare module "packages/mezz/jei/api/gui/widgets/$IScrollGridWidgetFactory" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ISlottedWidgetFactory, $ISlottedWidgetFactory$Type} from "packages/mezz/jei/api/gui/widgets/$ISlottedWidgetFactory"
import {$IRecipeExtrasBuilder, $IRecipeExtrasBuilder$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeExtrasBuilder"
import {$ScreenRectangle, $ScreenRectangle$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"

/**
 * 
 * @deprecated
 */
export interface $IScrollGridWidgetFactory<R> extends $ISlottedWidgetFactory<(R)> {

 "getArea"(): $ScreenRectangle
 "setPosition"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "createWidgetForSlots"(arg0: $IRecipeExtrasBuilder$Type, arg1: R, arg2: $List$Type<($IRecipeSlotDrawable$Type)>): void
}

export namespace $IScrollGridWidgetFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScrollGridWidgetFactory$Type<R> = ($IScrollGridWidgetFactory<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScrollGridWidgetFactory_<R> = $IScrollGridWidgetFactory$Type<(R)>;
}}
declare module "packages/mezz/jei/api/gui/builder/$IClickableIngredientFactory" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IClickableIngredientFactory$IBuilder, $IClickableIngredientFactory$IBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IClickableIngredientFactory$IBuilder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IClickableIngredientFactory {

 "createBuilder"(arg0: $ItemStack$Type): $IClickableIngredientFactory$IBuilder<($ItemStack)>
 "createBuilder"<T>(arg0: $ITypedIngredient$Type<(T)>): $IClickableIngredientFactory$IBuilder<(T)>
 "createBuilder"<T>(arg0: $IIngredientType$Type<(T)>, arg1: T): $IClickableIngredientFactory$IBuilder<(T)>
}

export namespace $IClickableIngredientFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClickableIngredientFactory$Type = ($IClickableIngredientFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClickableIngredientFactory_ = $IClickableIngredientFactory$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IFocus" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IFocus<V> {

 "getTypedValue"(): $ITypedIngredient<(V)>
 "getRole"(): $RecipeIngredientRole
 "checkedCast"<T>(arg0: $IIngredientType$Type<(T)>): $Optional<($IFocus<(T)>)>
}

export namespace $IFocus {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFocus$Type<V> = ($IFocus<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFocus_<V> = $IFocus$Type<(V)>;
}}
declare module "packages/mezz/jei/api/recipe/$IFocusGroup" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IFocus, $IFocus$Type} from "packages/mezz/jei/api/recipe/$IFocus"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFocusGroup {

 "getFocuses"<T>(arg0: $IIngredientType$Type<(T)>, arg1: $RecipeIngredientRole$Type): $Stream<($IFocus<(T)>)>
 "getFocuses"(arg0: $RecipeIngredientRole$Type): $Stream<($IFocus<(any)>)>
 "getFocuses"<T>(arg0: $IIngredientType$Type<(T)>): $Stream<($IFocus<(T)>)>
 "getItemStackFocuses"(): $Stream<($IFocus<($ItemStack)>)>
 "getItemStackFocuses"(arg0: $RecipeIngredientRole$Type): $Stream<($IFocus<($ItemStack)>)>
 "isEmpty"(): boolean
 "getAllFocuses"(): $List<($IFocus<(any)>)>
}

export namespace $IFocusGroup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFocusGroup$Type = ($IFocusGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFocusGroup_ = $IFocusGroup$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IJeiKeyMapping" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IJeiKeyMapping {

 "isActiveAndMatches"(arg0: $InputConstants$Key$Type): boolean
 "isUnbound"(): boolean
 "getTranslatedKeyMessage"(): $Component
}

export namespace $IJeiKeyMapping {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiKeyMapping$Type = ($IJeiKeyMapping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiKeyMapping_ = $IJeiKeyMapping$Type;
}}
declare module "packages/mezz/jei/api/recipe/$RecipeType" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RecipeType<T> {

constructor(arg0: $ResourceLocation$Type, arg1: $Class$Type<(any)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "create"<T>(arg0: string, arg1: string, arg2: $Class$Type<(any)>): $RecipeType<(T)>
public "getUid"(): $ResourceLocation
public "getRecipeClass"(): $Class<(any)>
get "uid"(): $ResourceLocation
get "recipeClass"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeType$Type<T> = ($RecipeType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeType_<T> = $RecipeType$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/widgets/$IScrollGridWidget" {
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$IPlaceable, $IPlaceable$Type} from "packages/mezz/jei/api/gui/placement/$IPlaceable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RecipeSlotUnderMouse, $RecipeSlotUnderMouse$Type} from "packages/mezz/jei/api/gui/inputs/$RecipeSlotUnderMouse"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenPosition"
import {$ScreenRectangle, $ScreenRectangle$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ISlottedRecipeWidget, $ISlottedRecipeWidget$Type} from "packages/mezz/jei/api/gui/widgets/$ISlottedRecipeWidget"

export interface $IScrollGridWidget extends $ISlottedRecipeWidget, $IPlaceable<($IScrollGridWidget)> {

 "getScreenRectangle"(): $ScreenRectangle
 "getWidth"(): integer
 "getHeight"(): integer
 "getSlotUnderMouse"(arg0: double, arg1: double): $Optional<($RecipeSlotUnderMouse)>
 "tick"(): void
 "getPosition"(): $ScreenPosition
/**
 * 
 * @deprecated
 */
 "draw"(arg0: $GuiGraphics$Type, arg1: double, arg2: double): void
 "getTooltip"(arg0: $ITooltipBuilder$Type, arg1: double, arg2: double): void
 "drawWidget"(arg0: $GuiGraphics$Type, arg1: double, arg2: double): void
}

export namespace $IScrollGridWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScrollGridWidget$Type = ($IScrollGridWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScrollGridWidget_ = $IScrollGridWidget$Type;
}}
declare module "packages/mezz/jei/api/gui/buttons/$IButtonState" {
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"

export interface $IButtonState {

 "setForcePressed"(arg0: boolean): void
 "setActive"(arg0: boolean): void
 "setIcon"(arg0: $IDrawable$Type): void
 "setVisible"(arg0: boolean): void
}

export namespace $IButtonState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IButtonState$Type = ($IButtonState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IButtonState_ = $IButtonState$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientVisibility" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IIngredientVisibility$IListener, $IIngredientVisibility$IListener$Type} from "packages/mezz/jei/api/runtime/$IIngredientVisibility$IListener"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$UidContext, $UidContext$Type} from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $IIngredientVisibility {

 "isIngredientVisible"<V>(arg0: $ITypedIngredient$Type<(V)>): boolean
 "isIngredientVisible"<V>(arg0: $IIngredientType$Type<(V)>, arg1: V): boolean
 "isIngredientVisible"<V>(arg0: $ITypedIngredient$Type<(V)>, arg1: $UidContext$Type): boolean
 "isIngredientVisible"<V>(arg0: $IIngredientType$Type<(V)>, arg1: V, arg2: $UidContext$Type): boolean
 "registerListener"(arg0: $IIngredientVisibility$IListener$Type): void
 "hideIngredients"<V>(arg0: $IIngredientType$Type<(V)>, arg1: $Collection$Type<(V)>, arg2: $Collection$Type<($UidContext$Type)>): void
 "unhideIngredients"<V>(arg0: $IIngredientType$Type<(V)>, arg1: $Collection$Type<(V)>, arg2: $Collection$Type<($UidContext$Type)>): void
}

export namespace $IIngredientVisibility {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientVisibility$Type = ($IIngredientVisibility);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientVisibility_ = $IIngredientVisibility$Type;
}}
declare module "packages/mezz/jei/api/gui/widgets/$IRecipeWidgetBuilder" {
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$IRecipeWidgetTooltipCallback, $IRecipeWidgetTooltipCallback$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeWidgetTooltipCallback"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IPlaceable, $IPlaceable$Type} from "packages/mezz/jei/api/gui/placement/$IPlaceable"

export interface $IRecipeWidgetBuilder<THIS extends $IRecipeWidgetBuilder<(THIS)>> extends $IPlaceable<(THIS)> {

 "getWidth"(): integer
 "getHeight"(): integer
 "setTooltip"(arg0: $FormattedText$Type): THIS
 "setTooltip"(arg0: $Collection$Type<(any)>): THIS
 "setTooltip"(arg0: $TooltipComponent$Type): THIS
 "setTooltip"(arg0: $IRecipeWidgetTooltipCallback$Type): THIS
}

export namespace $IRecipeWidgetBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeWidgetBuilder$Type<THIS> = ($IRecipeWidgetBuilder<(THIS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeWidgetBuilder_<THIS> = $IRecipeWidgetBuilder$Type<(THIS)>;
}}
declare module "packages/mezz/jei/api/gui/widgets/$IScrollBoxWidget" {
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$IJeiInputHandler, $IJeiInputHandler$Type} from "packages/mezz/jei/api/gui/inputs/$IJeiInputHandler"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$IRecipeWidget, $IRecipeWidget$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeWidget"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenPosition"
import {$ScreenRectangle, $ScreenRectangle$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"
import {$IJeiUserInput, $IJeiUserInput$Type} from "packages/mezz/jei/api/gui/inputs/$IJeiUserInput"

export interface $IScrollBoxWidget extends $IRecipeWidget, $IJeiInputHandler {

 "getContentAreaWidth"(): integer
 "getContentAreaHeight"(): integer
 "setContents"(arg0: $List$Type<($FormattedText$Type)>): $IScrollBoxWidget
 "setContents"(arg0: $IDrawable$Type): $IScrollBoxWidget
 "getScreenRectangle"(): $ScreenRectangle
 "tick"(): void
 "getPosition"(): $ScreenPosition
/**
 * 
 * @deprecated
 */
 "draw"(arg0: $GuiGraphics$Type, arg1: double, arg2: double): void
 "getTooltip"(arg0: $ITooltipBuilder$Type, arg1: double, arg2: double): void
 "drawWidget"(arg0: $GuiGraphics$Type, arg1: double, arg2: double): void
 "handleMouseMoved"(arg0: double, arg1: double): void
 "handleMouseDragged"(arg0: double, arg1: double, arg2: $InputConstants$Key$Type, arg3: double, arg4: double): boolean
 "getArea"(): $ScreenRectangle
 "handleInput"(arg0: double, arg1: double, arg2: $IJeiUserInput$Type): boolean
 "handleMouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
}

export namespace $IScrollBoxWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScrollBoxWidget$Type = ($IScrollBoxWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScrollBoxWidget_ = $IScrollBoxWidget$Type;
}}
declare module "packages/mezz/jei/api/gui/$IRecipeLayoutDrawable" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IJeiInputHandler, $IJeiInputHandler$Type} from "packages/mezz/jei/api/gui/inputs/$IJeiInputHandler"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RecipeSlotUnderMouse, $RecipeSlotUnderMouse$Type} from "packages/mezz/jei/api/gui/inputs/$RecipeSlotUnderMouse"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeLayoutDrawable<R> {

 "getRecipeSlotsView"(): $IRecipeSlotsView
 "getRect"(): $Rect2i
 "drawRecipe"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "getRectWithBorder"(): $Rect2i
 "drawOverlays"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "getSideButtonArea"(arg0: integer): $Rect2i
 "tick"(): void
 "getItemStackUnderMouse"(arg0: integer, arg1: integer): $Optional<($ItemStack)>
/**
 * 
 * @deprecated
 */
 "getRecipeSlotUnderMouse"(arg0: double, arg1: double): $Optional<($IRecipeSlotDrawable)>
 "getRecipeTransferButtonArea"(): $Rect2i
 "getRecipeBookmarkButtonArea"(): $Rect2i
 "getSlotUnderMouse"(arg0: double, arg1: double): $Optional<($RecipeSlotUnderMouse)>
 "setPosition"(arg0: integer, arg1: integer): void
 "getRecipe"(): R
 "getInputHandler"(): $IJeiInputHandler
 "getIngredientUnderMouse"<T>(arg0: integer, arg1: integer, arg2: $IIngredientType$Type<(T)>): $Optional<(T)>
 "getRecipeCategory"(): $IRecipeCategory<(R)>
 "isMouseOver"(arg0: double, arg1: double): boolean
}

export namespace $IRecipeLayoutDrawable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeLayoutDrawable$Type<R> = ($IRecipeLayoutDrawable<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeLayoutDrawable_<R> = $IRecipeLayoutDrawable$Type<(R)>;
}}
declare module "packages/mezz/jei/api/ingredients/subtypes/$UidContext" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $UidContext extends $Enum<($UidContext)> {
static readonly "Ingredient": $UidContext
static readonly "Recipe": $UidContext


public static "values"(): ($UidContext)[]
public static "valueOf"(arg0: string): $UidContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UidContext$Type = (("ingredient") | ("recipe")) | ($UidContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UidContext_ = $UidContext$Type;
}}
declare module "packages/mezz/jei/api/registration/$ISubtypeRegistration" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IIngredientSubtypeInterpreter, $IIngredientSubtypeInterpreter$Type} from "packages/mezz/jei/api/ingredients/subtypes/$IIngredientSubtypeInterpreter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IIngredientTypeWithSubtypes, $IIngredientTypeWithSubtypes$Type} from "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes"
import {$ISubtypeInterpreter, $ISubtypeInterpreter$Type} from "packages/mezz/jei/api/ingredients/subtypes/$ISubtypeInterpreter"

export interface $ISubtypeRegistration {

 "registerSubtypeInterpreter"(arg0: $Item$Type, arg1: $IIngredientSubtypeInterpreter$Type<($ItemStack$Type)>): void
 "registerSubtypeInterpreter"<B, I>(arg0: $IIngredientTypeWithSubtypes$Type<(B), (I)>, arg1: B, arg2: $IIngredientSubtypeInterpreter$Type<(I)>): void
 "registerSubtypeInterpreter"(arg0: $Item$Type, arg1: $ISubtypeInterpreter$Type<($ItemStack$Type)>): void
 "registerSubtypeInterpreter"<B, I>(arg0: $IIngredientTypeWithSubtypes$Type<(B), (I)>, arg1: B, arg2: $ISubtypeInterpreter$Type<(I)>): void
 "useNbtForSubtypes"(...arg0: ($Fluid$Type)[]): void
 "useNbtForSubtypes"(...arg0: ($Item$Type)[]): void
}

export namespace $ISubtypeRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubtypeRegistration$Type = ($ISubtypeRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubtypeRegistration_ = $ISubtypeRegistration$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated$StartDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IDrawableAnimated$StartDirection extends $Enum<($IDrawableAnimated$StartDirection)> {
static readonly "TOP": $IDrawableAnimated$StartDirection
static readonly "BOTTOM": $IDrawableAnimated$StartDirection
static readonly "LEFT": $IDrawableAnimated$StartDirection
static readonly "RIGHT": $IDrawableAnimated$StartDirection


public static "values"(): ($IDrawableAnimated$StartDirection)[]
public static "valueOf"(arg0: string): $IDrawableAnimated$StartDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawableAnimated$StartDirection$Type = (("top") | ("left") | ("bottom") | ("right")) | ($IDrawableAnimated$StartDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawableAnimated$StartDirection_ = $IDrawableAnimated$StartDirection$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IBookmarkManager" {
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IBookmarkManager {

 "add"(arg0: $ITypedIngredient$Type<(any)>): boolean
 "remove"(arg0: $ITypedIngredient$Type<(any)>): boolean
 "contains"(arg0: $ITypedIngredient$Type<(any)>): boolean
}

export namespace $IBookmarkManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBookmarkManager$Type = ($IBookmarkManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBookmarkManager_ = $IBookmarkManager$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientVisibility$IListener" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$UidContext, $UidContext$Type} from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $IIngredientVisibility$IListener {

 "onIngredientsVisibilityChanged"<V>(arg0: $Collection$Type<($ITypedIngredient$Type<(V)>)>, arg1: boolean): void
 "onIngredientsVisibilityChanged"<V>(arg0: $Collection$Type<($ITypedIngredient$Type<(V)>)>, arg1: $Collection$Type<($UidContext$Type)>, arg2: boolean): void
 "onIngredientVisibilityChanged"<V>(arg0: $ITypedIngredient$Type<(V)>, arg1: boolean): void

(arg0: $Collection$Type<($ITypedIngredient$Type<(V)>)>, arg1: boolean): void
}

export namespace $IIngredientVisibility$IListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientVisibility$IListener$Type = ($IIngredientVisibility$IListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientVisibility$IListener_ = $IIngredientVisibility$IListener$Type;
}}
declare module "packages/mezz/jei/api/gui/widgets/$ITextWidget" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$VerticalAlignment, $VerticalAlignment$Type} from "packages/mezz/jei/api/gui/placement/$VerticalAlignment"
import {$HorizontalAlignment, $HorizontalAlignment$Type} from "packages/mezz/jei/api/gui/placement/$HorizontalAlignment"
import {$IRecipeWidgetBuilder, $IRecipeWidgetBuilder$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeWidgetBuilder"

export interface $ITextWidget extends $IRecipeWidgetBuilder<($ITextWidget)> {

 "setTextAlignment"(arg0: $HorizontalAlignment$Type): $ITextWidget
 "setTextAlignment"(arg0: $VerticalAlignment$Type): $ITextWidget
 "setLineSpacing"(arg0: integer): $ITextWidget
 "setColor"(arg0: integer): $ITextWidget
 "setShadow"(arg0: boolean): $ITextWidget
 "getWidth"(): integer
 "getHeight"(): integer
 "setFont"(arg0: $Font$Type): $ITextWidget
}

export namespace $ITextWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITextWidget$Type = ($ITextWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITextWidget_ = $ITextWidget$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IEditModeConfig$HideMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IEditModeConfig$HideMode extends $Enum<($IEditModeConfig$HideMode)> {
static readonly "SINGLE": $IEditModeConfig$HideMode
static readonly "WILDCARD": $IEditModeConfig$HideMode


public static "values"(): ($IEditModeConfig$HideMode)[]
public static "valueOf"(arg0: string): $IEditModeConfig$HideMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEditModeConfig$HideMode$Type = (("single") | ("wildcard")) | ($IEditModeConfig$HideMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEditModeConfig$HideMode_ = $IEditModeConfig$HideMode$Type;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferContext" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeTransferResult, $RecipeTransferResult$Type} from "packages/mezz/jei/api/recipe/transfer/$RecipeTransferResult"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeTransferContext<R, C extends $AbstractContainerMenu> {

 "completeRecipeTransfer"(arg0: $RecipeTransferResult$Type): void
 "getScreen"(): $AbstractContainerScreen<(C)>
 "isMaxTransfer"(): boolean
 "getRecipeSlots"(): $IRecipeSlotsView
 "getRecipe"(): R
 "getContainer"(): C
 "getTransferId"(): integer
 "getRecipeType"(): $RecipeType<(R)>
 "getPlayer"(): $Player
}

export namespace $IRecipeTransferContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferContext$Type<R, C> = ($IRecipeTransferContext<(R), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferContext_<R, C> = $IRecipeTransferContext$Type<(R), (C)>;
}}
declare module "packages/mezz/jei/api/recipe/category/$IRecipeCategory" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IRecipeLayoutBuilder, $IRecipeLayoutBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IRecipeExtrasBuilder, $IRecipeExtrasBuilder$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeExtrasBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$IFocusGroup, $IFocusGroup$Type} from "packages/mezz/jei/api/recipe/$IFocusGroup"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IRecipeCategory<T> {

 "getWidth"(): integer
 "getHeight"(): integer
 "getIcon"(): $IDrawable
 "getTitle"(): $Component
 "draw"(arg0: T, arg1: $IRecipeSlotsView$Type, arg2: $GuiGraphics$Type, arg3: double, arg4: double): void
/**
 * 
 * @deprecated
 */
 "getBackground"(): $IDrawable
 "setRecipe"(arg0: $IRecipeLayoutBuilder$Type, arg1: T, arg2: $IFocusGroup$Type): void
 "getRegistryName"(arg0: T): $ResourceLocation
 "getTooltip"(arg0: $ITooltipBuilder$Type, arg1: T, arg2: $IRecipeSlotsView$Type, arg3: double, arg4: double): void
 "getRecipeType"(): $RecipeType<(T)>
 "onDisplayedIngredientsUpdate"(arg0: T, arg1: $List$Type<($IRecipeSlotDrawable$Type)>, arg2: $IFocusGroup$Type): void
 "isHandled"(arg0: T): boolean
 "createRecipeExtras"(arg0: $IRecipeExtrasBuilder$Type, arg1: T, arg2: $IFocusGroup$Type): void
/**
 * 
 * @deprecated
 */
 "handleInput"(arg0: T, arg1: double, arg2: double, arg3: $InputConstants$Key$Type): boolean
 "needsRecipeBorder"(): boolean
/**
 * 
 * @deprecated
 */
 "getTooltipStrings"(arg0: T, arg1: $IRecipeSlotsView$Type, arg2: double, arg3: double): $List<($Component)>
}

export namespace $IRecipeCategory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCategory$Type<T> = ($IRecipeCategory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCategory_<T> = $IRecipeCategory$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotRichTooltipCallback" {
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$IRecipeSlotView, $IRecipeSlotView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"

export interface $IRecipeSlotRichTooltipCallback {

 "onRichTooltip"(arg0: $IRecipeSlotView$Type, arg1: $ITooltipBuilder$Type): void

(arg0: $IRecipeSlotView$Type, arg1: $ITooltipBuilder$Type): void
}

export namespace $IRecipeSlotRichTooltipCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotRichTooltipCallback$Type = ($IRecipeSlotRichTooltipCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotRichTooltipCallback_ = $IRecipeSlotRichTooltipCallback$Type;
}}
declare module "packages/mezz/jei/api/gui/inputs/$RecipeSlotUnderMouse" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenPosition"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"

export class $RecipeSlotUnderMouse extends $Record {

constructor(arg0: $IRecipeSlotDrawable$Type, arg1: integer, arg2: integer)
constructor(slot: $IRecipeSlotDrawable$Type, offset: $ScreenPosition$Type)

public "slot"(): $IRecipeSlotDrawable
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "offset"(): $ScreenPosition
public "addOffset"(arg0: integer, arg1: integer): $RecipeSlotUnderMouse
public "isMouseOver"(arg0: double, arg1: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSlotUnderMouse$Type = ($RecipeSlotUnderMouse);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSlotUnderMouse_ = $RecipeSlotUnderMouse$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IModIdHelper" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IIngredientHelper, $IIngredientHelper$Type} from "packages/mezz/jei/api/ingredients/$IIngredientHelper"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IModIdHelper {

 "getModNameForTooltip"<T>(arg0: $ITypedIngredient$Type<(T)>): $Optional<($Component)>
/**
 * 
 * @deprecated
 */
 "addModNameToIngredientTooltip"<T>(arg0: $List$Type<($Component$Type)>, arg1: $ITypedIngredient$Type<(T)>): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "addModNameToIngredientTooltip"<T>(arg0: $List$Type<($Component$Type)>, arg1: T, arg2: $IIngredientHelper$Type<(T)>): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getFormattedModNameForModId"(arg0: string): string
 "isDisplayingModNameEnabled"(): boolean
 "getFormattedModNameComponentForModId"(arg0: string): $Component
 "getModAliases"(arg0: string): $Set<(string)>
 "getModNameForModId"(arg0: string): string
}

export namespace $IModIdHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModIdHelper$Type = ($IModIdHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModIdHelper_ = $IModIdHelper$Type;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawablesView" {
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"

export interface $IRecipeSlotDrawablesView {

 "findSlotByName"(arg0: string): $Optional<($IRecipeSlotDrawable)>
 "getSlots"(arg0: $RecipeIngredientRole$Type): $List<($IRecipeSlotDrawable)>
 "getSlots"(): $List<($IRecipeSlotDrawable)>

(arg0: string): $Optional<($IRecipeSlotDrawable)>
}

export namespace $IRecipeSlotDrawablesView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotDrawablesView$Type = ($IRecipeSlotDrawablesView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotDrawablesView_ = $IRecipeSlotDrawablesView$Type;
}}
declare module "packages/mezz/jei/api/recipe/$RecipeIngredientRole" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RecipeIngredientRole extends $Enum<($RecipeIngredientRole)> {
static readonly "INPUT": $RecipeIngredientRole
static readonly "OUTPUT": $RecipeIngredientRole
static readonly "CATALYST": $RecipeIngredientRole
static readonly "RENDER_ONLY": $RecipeIngredientRole


public static "values"(): ($RecipeIngredientRole)[]
public static "valueOf"(arg0: string): $RecipeIngredientRole
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeIngredientRole$Type = (("output") | ("input") | ("catalyst") | ("render_only")) | ($RecipeIngredientRole);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeIngredientRole_ = $RecipeIngredientRole$Type;
}}
declare module "packages/mezz/jei/api/gui/widgets/$IRecipeExtrasBuilder" {
import {$IRecipeWidget, $IRecipeWidget$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeWidget"
import {$IDrawableWidget, $IDrawableWidget$Type} from "packages/mezz/jei/api/gui/widgets/$IDrawableWidget"
import {$IPlaceable, $IPlaceable$Type} from "packages/mezz/jei/api/gui/placement/$IPlaceable"
import {$IScrollGridWidget, $IScrollGridWidget$Type} from "packages/mezz/jei/api/gui/widgets/$IScrollGridWidget"
import {$ISlottedRecipeWidget, $ISlottedRecipeWidget$Type} from "packages/mezz/jei/api/gui/widgets/$ISlottedRecipeWidget"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"
import {$ITextWidget, $ITextWidget$Type} from "packages/mezz/jei/api/gui/widgets/$ITextWidget"
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$IJeiInputHandler, $IJeiInputHandler$Type} from "packages/mezz/jei/api/gui/inputs/$IJeiInputHandler"
import {$IScrollBoxWidget, $IScrollBoxWidget$Type} from "packages/mezz/jei/api/gui/widgets/$IScrollBoxWidget"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IJeiGuiEventListener, $IJeiGuiEventListener$Type} from "packages/mezz/jei/api/gui/inputs/$IJeiGuiEventListener"
import {$IRecipeSlotDrawablesView, $IRecipeSlotDrawablesView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawablesView"
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"

export interface $IRecipeExtrasBuilder {

 "addDrawableWidget"(arg0: $IDrawable$Type): $IDrawableWidget
 "addTooltipArea"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IDrawableWidget
 "addGuiEventListener"(arg0: $IJeiGuiEventListener$Type): void
/**
 * 
 * @deprecated
 */
 "addAnimatedRecipeArrow"(arg0: integer): $IPlaceable<(any)>
/**
 * 
 * @deprecated
 */
 "addAnimatedRecipeFlame"(arg0: integer): $IPlaceable<(any)>
 "addScrollBoxWidget"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IScrollBoxWidget
/**
 * 
 * @deprecated
 */
 "addDrawable"(arg0: $IDrawable$Type): $IPlaceable<(any)>
/**
 * 
 * @deprecated
 */
 "addDrawable"(arg0: $IDrawable$Type, arg1: integer, arg2: integer): void
/**
 * 
 * @deprecated
 */
 "addRecipeArrow"(): $IPlaceable<(any)>
 "addSlottedWidget"(arg0: $ISlottedRecipeWidget$Type, arg1: $List$Type<($IRecipeSlotDrawable$Type)>): void
 "addInputHandler"(arg0: $IJeiInputHandler$Type): void
/**
 * 
 * @deprecated
 */
 "addRecipePlusSign"(): $IPlaceable<(any)>
 "addRecipeArrowWidget"(): $IDrawableWidget
 "addAnimatedRecipeArrowWidget"(arg0: integer): $IDrawableWidget
 "addAnimatedRecipeFlameWidget"(arg0: integer): $IDrawableWidget
 "addRecipePlusSignWidget"(): $IDrawableWidget
 "addScrollGridWidget"(arg0: $List$Type<($IRecipeSlotDrawable$Type)>, arg1: integer, arg2: integer): $IScrollGridWidget
 "getRecipeSlots"(): $IRecipeSlotDrawablesView
 "addText"(arg0: $List$Type<($FormattedText$Type)>, arg1: integer, arg2: integer): $ITextWidget
 "addText"(arg0: $FormattedText$Type, arg1: integer, arg2: integer): $ITextWidget
 "addWidget"(arg0: $IRecipeWidget$Type): void
}

export namespace $IRecipeExtrasBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeExtrasBuilder$Type = ($IRecipeExtrasBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeExtrasBuilder_ = $IRecipeExtrasBuilder$Type;
}}
declare module "packages/mezz/jei/api/ingredients/subtypes/$ISubtypeInterpreter" {
import {$UidContext, $UidContext$Type} from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $ISubtypeInterpreter<T> {

 "getLegacyStringSubtypeInfo"(arg0: T, arg1: $UidContext$Type): string
 "getSubtypeData"(arg0: T, arg1: $UidContext$Type): any
}

export namespace $ISubtypeInterpreter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubtypeInterpreter$Type<T> = ($ISubtypeInterpreter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubtypeInterpreter_<T> = $ISubtypeInterpreter$Type<(T)>;
}}
declare module "packages/mezz/jei/api/recipe/$IRecipeCategoriesLookup" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $IRecipeCategoriesLookup {

 "includeHidden"(): $IRecipeCategoriesLookup
 "limitTypes"(arg0: $Collection$Type<($RecipeType$Type<(any)>)>): $IRecipeCategoriesLookup
 "limitFocus"(arg0: $Collection$Type<(any)>): $IRecipeCategoriesLookup
 "get"(): $Stream<($IRecipeCategory<(any)>)>
}

export namespace $IRecipeCategoriesLookup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCategoriesLookup$Type = ($IRecipeCategoriesLookup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCategoriesLookup_ = $IRecipeCategoriesLookup$Type;
}}
declare module "packages/mezz/jei/api/gui/$ITickTimer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITickTimer {

 "getValue"(): integer
 "getMaxValue"(): integer
}

export namespace $ITickTimer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickTimer$Type = ($ITickTimer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickTimer_ = $ITickTimer$Type;
}}
declare module "packages/mezz/jei/api/ingredients/subtypes/$IIngredientSubtypeInterpreter" {
import {$UidContext, $UidContext$Type} from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $IIngredientSubtypeInterpreter<T> {

 "apply"(arg0: T, arg1: $UidContext$Type): string

(arg0: T, arg1: $UidContext$Type): string
}

export namespace $IIngredientSubtypeInterpreter {
const NONE: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientSubtypeInterpreter$Type<T> = ($IIngredientSubtypeInterpreter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientSubtypeInterpreter_<T> = $IIngredientSubtypeInterpreter$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/placement/$HorizontalAlignment" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $HorizontalAlignment extends $Enum<($HorizontalAlignment)> {
static readonly "LEFT": $HorizontalAlignment
static readonly "CENTER": $HorizontalAlignment
static readonly "RIGHT": $HorizontalAlignment


public static "values"(): ($HorizontalAlignment)[]
public static "valueOf"(arg0: string): $HorizontalAlignment
public "getXPos"(arg0: integer, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HorizontalAlignment$Type = (("left") | ("center") | ("right")) | ($HorizontalAlignment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HorizontalAlignment_ = $HorizontalAlignment$Type;
}}
declare module "packages/mezz/jei/library/plugins/vanilla/cooking/$JeiSmeltingRecipe" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$SmeltingRecipe, $SmeltingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmeltingRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $JeiSmeltingRecipe extends $SmeltingRecipe {
static readonly "SERIALIZER": $RecipeSerializer<($JeiSmeltingRecipe)>

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $Ingredient$Type, arg3: $ItemStack$Type, arg4: $ItemStack$Type, arg5: float, arg6: integer)

public "getInput"(): $Ingredient
public "getResult"(): $ItemStack
public "getFuel"(): $Ingredient
public "getFuelOutput"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
get "input"(): $Ingredient
get "result"(): $ItemStack
get "fuel"(): $Ingredient
get "fuelOutput"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JeiSmeltingRecipe$Type = ($JeiSmeltingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JeiSmeltingRecipe_ = $JeiSmeltingRecipe$Type;
}}
declare module "packages/mezz/jei/api/gui/buttons/$IIconButtonController" {
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$IButtonState, $IButtonState$Type} from "packages/mezz/jei/api/gui/buttons/$IButtonState"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IJeiUserInput, $IJeiUserInput$Type} from "packages/mezz/jei/api/gui/inputs/$IJeiUserInput"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IIconButtonController {

 "initState"(arg0: $IButtonState$Type): void
 "getTooltips"(arg0: $ITooltipBuilder$Type): void
 "updateState"(arg0: $IButtonState$Type): void
 "onPress"(arg0: $IJeiUserInput$Type): boolean
 "drawExtras"(arg0: $GuiGraphics$Type, arg1: $Rect2i$Type, arg2: integer, arg3: integer, arg4: float): void

(arg0: $IButtonState$Type): void
}

export namespace $IIconButtonController {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIconButtonController$Type = ($IIconButtonController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIconButtonController_ = $IIconButtonController$Type;
}}
declare module "packages/mezz/jei/api/gui/widgets/$IRecipeWidgetTooltipCallback" {
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"

export interface $IRecipeWidgetTooltipCallback {

 "onTooltip"(arg0: $ITooltipBuilder$Type): void

(arg0: $ITooltipBuilder$Type): void
}

export namespace $IRecipeWidgetTooltipCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeWidgetTooltipCallback$Type = ($IRecipeWidgetTooltipCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeWidgetTooltipCallback_ = $IRecipeWidgetTooltipCallback$Type;
}}
declare module "packages/mezz/jei/api/gui/inputs/$IJeiInputHandler" {
import {$ScreenRectangle, $ScreenRectangle$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"
import {$IJeiUserInput, $IJeiUserInput$Type} from "packages/mezz/jei/api/gui/inputs/$IJeiUserInput"

export interface $IJeiInputHandler {

 "handleMouseMoved"(arg0: double, arg1: double): void
 "handleMouseDragged"(arg0: double, arg1: double, arg2: $InputConstants$Key$Type, arg3: double, arg4: double): boolean
 "getArea"(): $ScreenRectangle
 "handleInput"(arg0: double, arg1: double, arg2: $IJeiUserInput$Type): boolean
 "handleMouseScrolled"(arg0: double, arg1: double, arg2: double): boolean

(arg0: double, arg1: double): void
}

export namespace $IJeiInputHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiInputHandler$Type = ($IJeiInputHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiInputHandler_ = $IJeiInputHandler$Type;
}}
declare module "packages/mezz/jei/api/gui/widgets/$ISlottedRecipeWidget" {
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$IRecipeWidget, $IRecipeWidget$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeWidget"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RecipeSlotUnderMouse, $RecipeSlotUnderMouse$Type} from "packages/mezz/jei/api/gui/inputs/$RecipeSlotUnderMouse"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenPosition"
import {$ScreenRectangle, $ScreenRectangle$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $ISlottedRecipeWidget extends $IRecipeWidget {

 "getSlotUnderMouse"(arg0: double, arg1: double): $Optional<($RecipeSlotUnderMouse)>
 "getScreenRectangle"(): $ScreenRectangle
 "tick"(): void
 "getPosition"(): $ScreenPosition
/**
 * 
 * @deprecated
 */
 "draw"(arg0: $GuiGraphics$Type, arg1: double, arg2: double): void
 "getTooltip"(arg0: $ITooltipBuilder$Type, arg1: double, arg2: double): void
 "drawWidget"(arg0: $GuiGraphics$Type, arg1: double, arg2: double): void
}

export namespace $ISlottedRecipeWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlottedRecipeWidget$Type = ($ISlottedRecipeWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlottedRecipeWidget_ = $ISlottedRecipeWidget$Type;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$RecipeTransferResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RecipeTransferResult extends $Enum<($RecipeTransferResult)> {
static readonly "SUCCESS": $RecipeTransferResult
static readonly "REJECTED": $RecipeTransferResult


public static "values"(): ($RecipeTransferResult)[]
public static "valueOf"(arg0: string): $RecipeTransferResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeTransferResult$Type = (("rejected") | ("success")) | ($RecipeTransferResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeTransferResult_ = $RecipeTransferResult$Type;
}}
declare module "packages/mezz/jei/api/gui/builder/$ITooltipBuilder" {
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$IJeiKeyMapping, $IJeiKeyMapping$Type} from "packages/mezz/jei/api/runtime/$IJeiKeyMapping"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $ITooltipBuilder {

 "clearIngredient"(): void
 "setIngredient"(arg0: $ITypedIngredient$Type<(any)>): void
 "addKeyUsageComponent"(arg0: string, arg1: $IJeiKeyMapping$Type): void
 "add"(arg0: $FormattedText$Type): void
 "add"(arg0: $TooltipComponent$Type): void
 "clear"(): void
 "addAll"(arg0: $Collection$Type<(any)>): void
/**
 * 
 * @deprecated
 */
 "removeAll"(arg0: $List$Type<($Component$Type)>): void
 "getLines"(): $List<($Either<($FormattedText), ($TooltipComponent)>)>
/**
 * 
 * @deprecated
 */
 "toLegacyToComponents"(): $List<($Component)>
}

export namespace $ITooltipBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITooltipBuilder$Type = ($ITooltipBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITooltipBuilder_ = $ITooltipBuilder$Type;
}}
declare module "packages/mezz/jei/library/plugins/vanilla/crafting/$JeiShapedRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$JeiShapedRecipe, $JeiShapedRecipe$Type} from "packages/mezz/jei/library/plugins/vanilla/crafting/$JeiShapedRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $JeiShapedRecipe$Serializer implements $RecipeSerializer<($JeiShapedRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $JeiShapedRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $JeiShapedRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $JeiShapedRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $JeiShapedRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JeiShapedRecipe$Serializer$Type = ($JeiShapedRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JeiShapedRecipe$Serializer_ = $JeiShapedRecipe$Serializer$Type;
}}
declare module "packages/mezz/jei/api/ingredients/rendering/$BatchRenderElement" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $BatchRenderElement<T> extends $Record {

constructor(ingredient: T, x: integer, y: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): integer
public "y"(): integer
public "ingredient"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatchRenderElement$Type<T> = ($BatchRenderElement<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BatchRenderElement_<T> = $BatchRenderElement$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$ICraftingGridHelper" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IRecipeLayoutBuilder, $IRecipeLayoutBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$IRecipeSlotBuilder, $IRecipeSlotBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeSlotBuilder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ICraftingGridHelper {

 "createAndSetNamedInputs"<T>(arg0: $IRecipeLayoutBuilder$Type, arg1: $IIngredientType$Type<(T)>, arg2: $List$Type<($Pair$Type<(string), ($List$Type<(T)>)>)>, arg3: integer, arg4: integer): $List<($IRecipeSlotBuilder)>
 "createAndSetNamedInputs"(arg0: $IRecipeLayoutBuilder$Type, arg1: $List$Type<($Pair$Type<(string), ($List$Type<($ItemStack$Type)>)>)>, arg2: integer, arg3: integer): $List<($IRecipeSlotBuilder)>
 "createAndSetOutputs"(arg0: $IRecipeLayoutBuilder$Type, arg1: $List$Type<($ItemStack$Type)>): $IRecipeSlotBuilder
 "createAndSetOutputs"<T>(arg0: $IRecipeLayoutBuilder$Type, arg1: $IIngredientType$Type<(T)>, arg2: $List$Type<(T)>): $IRecipeSlotBuilder
 "createAndSetIngredients"(arg0: $IRecipeLayoutBuilder$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: integer, arg3: integer): void
 "createAndSetNamedIngredients"(arg0: $IRecipeLayoutBuilder$Type, arg1: $List$Type<($Pair$Type<(string), ($Ingredient$Type)>)>, arg2: integer, arg3: integer): $List<($IRecipeSlotBuilder)>
 "createAndSetInputs"<T>(arg0: $IRecipeLayoutBuilder$Type, arg1: $IIngredientType$Type<(T)>, arg2: $List$Type<($List$Type<(T)>)>, arg3: integer, arg4: integer): $List<($IRecipeSlotBuilder)>
 "createAndSetInputs"(arg0: $IRecipeLayoutBuilder$Type, arg1: $List$Type<($List$Type<($ItemStack$Type)>)>, arg2: integer, arg3: integer): $List<($IRecipeSlotBuilder)>
 "setInputs"<T>(arg0: $List$Type<($IRecipeSlotBuilder$Type)>, arg1: $IIngredientType$Type<(T)>, arg2: $List$Type<($List$Type<(T)>)>, arg3: integer, arg4: integer): void
}

export namespace $ICraftingGridHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingGridHelper$Type = ($ICraftingGridHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingGridHelper_ = $ICraftingGridHelper$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IScalableDrawable" {
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IScalableDrawable {

 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
 "draw"(arg0: $GuiGraphics$Type, arg1: $Rect2i$Type): void

(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
}

export namespace $IScalableDrawable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScalableDrawable$Type = ($IScalableDrawable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScalableDrawable_ = $IScalableDrawable$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IGuiHelper" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$ITickTimer, $ITickTimer$Type} from "packages/mezz/jei/api/gui/$ITickTimer"
import {$IRecipeWidget, $IRecipeWidget$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeWidget"
import {$TextureAtlas, $TextureAtlas$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IScrollGridWidgetFactory, $IScrollGridWidgetFactory$Type} from "packages/mezz/jei/api/gui/widgets/$IScrollGridWidgetFactory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ICraftingGridHelper, $ICraftingGridHelper$Type} from "packages/mezz/jei/api/gui/ingredient/$ICraftingGridHelper"
import {$IDrawableAnimated$StartDirection, $IDrawableAnimated$StartDirection$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated$StartDirection"
import {$IScrollBoxWidget, $IScrollBoxWidget$Type} from "packages/mezz/jei/api/gui/widgets/$IScrollBoxWidget"
import {$IScalableDrawable, $IScalableDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IScalableDrawable"
import {$IDrawableAnimated, $IDrawableAnimated$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated"
import {$IDrawableBuilder, $IDrawableBuilder$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableBuilder"
import {$IIngredientRenderer, $IIngredientRenderer$Type} from "packages/mezz/jei/api/ingredients/$IIngredientRenderer"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$IDrawableStatic, $IDrawableStatic$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableStatic"

export interface $IGuiHelper {

 "createScalableDrawableSprite"(arg0: $TextureAtlas$Type, arg1: $ResourceLocation$Type): $IScalableDrawable
 "createCraftingGridHelper"(): $ICraftingGridHelper
/**
 * 
 * @deprecated
 */
 "getScrollBoxScrollbarExtraWidth"(): integer
 "getRecipeFlameEmpty"(): $IDrawableStatic
 "getRecipeFlameFilled"(): $IDrawableStatic
 "createDrawableIngredient"<V>(arg0: $ITypedIngredient$Type<(V)>): $IDrawable
 "createDrawableIngredient"<V>(arg0: $IIngredientRenderer$Type<(V)>, arg1: V): $IDrawable
 "createDrawableIngredient"<V>(arg0: $IIngredientType$Type<(V)>, arg1: V): $IDrawable
/**
 * 
 * @deprecated
 */
 "createScrollBoxWidget"(arg0: $IDrawable$Type, arg1: integer, arg2: integer, arg3: integer): $IScrollBoxWidget
 "createScrollBoxWidget"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IScrollBoxWidget
 "createDrawableSprite"(arg0: $TextureAtlas$Type, arg1: $ResourceLocation$Type, arg2: integer, arg3: integer): $IDrawableStatic
/**
 * 
 * @deprecated
 */
 "createDrawableSprite"(arg0: $TextureAtlas$Type, arg1: $ResourceLocation$Type): $IDrawableStatic
 "createDrawableItemStack"(arg0: $ItemStack$Type): $IDrawable
 "createBlankDrawable"(arg0: integer, arg1: integer): $IDrawableStatic
 "createAnimatedRecipeFlame"(arg0: integer): $IDrawableAnimated
 "createWidgetFromDrawable"(arg0: $IDrawable$Type, arg1: integer, arg2: integer): $IRecipeWidget
 "createAnimatedRecipeArrow"(arg0: integer): $IDrawableAnimated
 "createDrawableItemLike"(arg0: $ItemLike$Type): $IDrawable
/**
 * 
 * @deprecated
 */
 "createScrollGridFactory"(arg0: integer, arg1: integer): $IScrollGridWidgetFactory<(any)>
 "createAnimatedDrawable"(arg0: $IDrawableStatic$Type, arg1: integer, arg2: $IDrawableAnimated$StartDirection$Type, arg3: boolean): $IDrawableAnimated
 "createAnimatedDrawable"(arg0: $IDrawableStatic$Type, arg1: $ITickTimer$Type, arg2: $IDrawableAnimated$StartDirection$Type): $IDrawableAnimated
 "drawableBuilder"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $IDrawableBuilder
 "createDrawable"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $IDrawableStatic
 "createTickTimer"(arg0: integer, arg1: integer, arg2: boolean): $ITickTimer
 "getRecipeArrow"(): $IDrawableStatic
 "getRecipePlusSign"(): $IDrawableStatic
 "getOutputSlot"(): $IDrawableStatic
 "getRecipeArrowFilled"(): $IDrawableStatic
 "getSlotDrawable"(): $IDrawableStatic
}

export namespace $IGuiHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiHelper$Type = ($IGuiHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiHelper_ = $IGuiHelper$Type;
}}
declare module "packages/mezz/jei/api/gui/placement/$VerticalAlignment" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $VerticalAlignment extends $Enum<($VerticalAlignment)> {
static readonly "TOP": $VerticalAlignment
static readonly "CENTER": $VerticalAlignment
static readonly "BOTTOM": $VerticalAlignment


public static "values"(): ($VerticalAlignment)[]
public static "valueOf"(arg0: string): $VerticalAlignment
public "getYPos"(arg0: integer, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VerticalAlignment$Type = (("top") | ("bottom") | ("center")) | ($VerticalAlignment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VerticalAlignment_ = $VerticalAlignment$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientManager" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IClickableIngredient, $IClickableIngredient$Type} from "packages/mezz/jei/api/runtime/$IClickableIngredient"
import {$IIngredientHelper, $IIngredientHelper$Type} from "packages/mezz/jei/api/ingredients/$IIngredientHelper"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IIngredientManager$IIngredientListener, $IIngredientManager$IIngredientListener$Type} from "packages/mezz/jei/api/runtime/$IIngredientManager$IIngredientListener"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IIngredientRenderer, $IIngredientRenderer$Type} from "packages/mezz/jei/api/ingredients/$IIngredientRenderer"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$IClickableIngredientFactory, $IClickableIngredientFactory$Type} from "packages/mezz/jei/api/gui/builder/$IClickableIngredientFactory"
import {$IIngredientTypeWithSubtypes, $IIngredientTypeWithSubtypes$Type} from "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes"

export interface $IIngredientManager {

 "getAllItemStacks"(): $Collection<($ItemStack)>
/**
 * 
 * @deprecated
 */
 "getIngredientByUid"<V>(arg0: $IIngredientType$Type<(V)>, arg1: string): $Optional<(V)>
 "removeIngredientsAtRuntime"<V>(arg0: $IIngredientType$Type<(V)>, arg1: $Collection$Type<(V)>): void
 "addIngredientsAtRuntime"<V>(arg0: $IIngredientType$Type<(V)>, arg1: $Collection$Type<(V)>): void
 "getIngredientRenderer"<V>(arg0: V): $IIngredientRenderer<(V)>
 "getIngredientRenderer"<V>(arg0: $IIngredientType$Type<(V)>): $IIngredientRenderer<(V)>
 "createClickableIngredient"<V>(arg0: V, arg1: $Rect2i$Type, arg2: boolean): $Optional<($IClickableIngredient<(V)>)>
 "createClickableIngredient"<V>(arg0: $IIngredientType$Type<(V)>, arg1: V, arg2: $Rect2i$Type, arg3: boolean): $Optional<($IClickableIngredient<(V)>)>
 "getIngredientTypeForUid"(arg0: string): $Optional<($IIngredientType<(any)>)>
 "normalizeTypedIngredient"<V>(arg0: $ITypedIngredient$Type<(V)>): $ITypedIngredient<(V)>
 "getTypedIngredientByUid"<V>(arg0: $IIngredientType$Type<(V)>, arg1: string): $Optional<($ITypedIngredient<(V)>)>
 "getIngredientAliases"(arg0: $ITypedIngredient$Type<(any)>): $Collection<(string)>
 "registerIngredientListener"(arg0: $IIngredientManager$IIngredientListener$Type): void
 "getAllTypedIngredients"<V>(arg0: $IIngredientType$Type<(V)>): $Collection<($ITypedIngredient<(V)>)>
 "getRegisteredIngredientTypes"(): $Collection<($IIngredientType<(any)>)>
 "getClickableIngredientFactory"(): $IClickableIngredientFactory
 "createTypedIngredient"<V>(arg0: $IIngredientType$Type<(V)>, arg1: V, arg2: boolean): $Optional<($ITypedIngredient<(V)>)>
 "createTypedIngredient"<V>(arg0: V): $Optional<($ITypedIngredient<(V)>)>
 "createTypedIngredient"<V>(arg0: V, arg1: boolean): $Optional<($ITypedIngredient<(V)>)>
 "createTypedIngredient"<V>(arg0: $IIngredientType$Type<(V)>, arg1: V): $Optional<($ITypedIngredient<(V)>)>
 "getIngredientTypeChecked"<V>(arg0: V): $Optional<($IIngredientType<(V)>)>
 "getIngredientTypeChecked"<V>(arg0: $Class$Type<(any)>): $Optional<($IIngredientType<(V)>)>
 "getIngredientTypeWithSubtypesFromBase"<B, I>(arg0: B): $Optional<($IIngredientTypeWithSubtypes<(B), (I)>)>
 "getIngredientType"<V>(arg0: V): $IIngredientType<(V)>
 "getAllIngredients"<V>(arg0: $IIngredientType$Type<(V)>): $Collection<(V)>
 "getIngredientHelper"<V>(arg0: V): $IIngredientHelper<(V)>
 "getIngredientHelper"<V>(arg0: $IIngredientType$Type<(V)>): $IIngredientHelper<(V)>
}

export namespace $IIngredientManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientManager$Type = ($IIngredientManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientManager_ = $IIngredientManager$Type;
}}
declare module "packages/mezz/jei/api/ingredients/$ITypedIngredient" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IIngredientHelper, $IIngredientHelper$Type} from "packages/mezz/jei/api/ingredients/$IIngredientHelper"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IIngredientTypeWithSubtypes, $IIngredientTypeWithSubtypes$Type} from "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes"

export interface $ITypedIngredient<T> {

 "castToItemStackType"(): $ITypedIngredient<($ItemStack)>
 "cast"<V>(arg0: $IIngredientType$Type<(V)>): $ITypedIngredient<(V)>
 "getType"(): $IIngredientType<(T)>
 "normalize"(arg0: $IIngredientHelper$Type<(T)>): $ITypedIngredient<(T)>
 "getCastIngredient"<V>(arg0: $IIngredientType$Type<(V)>): V
 "getItemStack"(): $Optional<($ItemStack)>
 "getBaseIngredient"<B>(arg0: $IIngredientTypeWithSubtypes$Type<(B), (T)>): B
 "getIngredient"(): T
 "getIngredient"<V>(arg0: $IIngredientType$Type<(V)>): $Optional<(V)>
}

export namespace $ITypedIngredient {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITypedIngredient$Type<T> = ($ITypedIngredient<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITypedIngredient_<T> = $ITypedIngredient$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotTooltipCallback" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeSlotView, $IRecipeSlotView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"

/**
 * 
 * @deprecated
 */
export interface $IRecipeSlotTooltipCallback {

/**
 * 
 * @deprecated
 */
 "onRichTooltip"(arg0: $IRecipeSlotView$Type, arg1: $ITooltipBuilder$Type): void
/**
 * 
 * @deprecated
 */
 "onTooltip"(arg0: $IRecipeSlotView$Type, arg1: $List$Type<($Component$Type)>): void

(arg0: $IRecipeSlotView$Type, arg1: $ITooltipBuilder$Type): void
}

export namespace $IRecipeSlotTooltipCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotTooltipCallback$Type = ($IRecipeSlotTooltipCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotTooltipCallback_ = $IRecipeSlotTooltipCallback$Type;
}}
declare module "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder" {
import {$IIngredientAcceptor, $IIngredientAcceptor$Type} from "packages/mezz/jei/api/gui/builder/$IIngredientAcceptor"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$ISlottedWidgetFactory, $ISlottedWidgetFactory$Type} from "packages/mezz/jei/api/gui/widgets/$ISlottedWidgetFactory"
import {$IRecipeSlotBuilder, $IRecipeSlotBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeSlotBuilder"

export interface $IRecipeLayoutBuilder {

 "addOutputSlot"(): $IRecipeSlotBuilder
 "addOutputSlot"(arg0: integer, arg1: integer): $IRecipeSlotBuilder
 "addInputSlot"(arg0: integer, arg1: integer): $IRecipeSlotBuilder
 "addInputSlot"(): $IRecipeSlotBuilder
 "setShapeless"(): void
 "setShapeless"(arg0: integer, arg1: integer): void
 "createFocusLink"(...arg0: ($IIngredientAcceptor$Type<(any)>)[]): void
/**
 * 
 * @deprecated
 */
 "addSlotToWidget"(arg0: $RecipeIngredientRole$Type, arg1: $ISlottedWidgetFactory$Type<(any)>): $IRecipeSlotBuilder
 "moveRecipeTransferButton"(arg0: integer, arg1: integer): void
 "addInvisibleIngredients"(arg0: $RecipeIngredientRole$Type): $IIngredientAcceptor<(any)>
 "addSlot"(arg0: $RecipeIngredientRole$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "addSlot"(arg0: $RecipeIngredientRole$Type): $IRecipeSlotBuilder
}

export namespace $IRecipeLayoutBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeLayoutBuilder$Type = ($IRecipeLayoutBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeLayoutBuilder_ = $IRecipeLayoutBuilder$Type;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferHandler" {
import {$IRecipeTransferContext, $IRecipeTransferContext$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IRecipeTransferError, $IRecipeTransferError$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeTransferHandler<C extends $AbstractContainerMenu, R> {

 "transferRecipe"(arg0: $IRecipeTransferContext$Type<(R), (C)>, arg1: boolean): $IRecipeTransferError
/**
 * 
 * @deprecated
 */
 "transferRecipe"(arg0: C, arg1: R, arg2: $IRecipeSlotsView$Type, arg3: $Player$Type, arg4: boolean, arg5: boolean): $IRecipeTransferError
 "getContainerClass"(): $Class<(any)>
 "getMenuType"(): $Optional<($MenuType<(C)>)>
 "getRecipeType"(): $RecipeType<(R)>
}

export namespace $IRecipeTransferHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferHandler$Type<C, R> = ($IRecipeTransferHandler<(C), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferHandler_<C, R> = $IRecipeTransferHandler$Type<(C), (R)>;
}}
declare module "packages/mezz/jei/api/runtime/config/$IJeiConfigFile" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $IJeiConfigFile {

 "getPath"(): $Path
 "getCategories"(): $List<(any)>
}

export namespace $IJeiConfigFile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiConfigFile$Type = ($IJeiConfigFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiConfigFile_ = $IJeiConfigFile$Type;
}}
declare module "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $IIngredientTypeWithSubtypes<B, I> extends $IIngredientType<(I)> {

 "getBase"(arg0: I): B
 "getIngredientClass"(): $Class<(any)>
 "getIngredientBaseClass"(): $Class<(any)>
 "getDefaultIngredient"(arg0: B): I
 "getUid"(): string
 "castIngredient"(arg0: any): $Optional<(I)>
 "getCastIngredient"(arg0: any): I
}

export namespace $IIngredientTypeWithSubtypes {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientTypeWithSubtypes$Type<B, I> = ($IIngredientTypeWithSubtypes<(B), (I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientTypeWithSubtypes_<B, I> = $IIngredientTypeWithSubtypes$Type<(B), (I)>;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferManager" {
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IRecipeTransferHandler, $IRecipeTransferHandler$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferHandler"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$IRecipeTransferListener, $IRecipeTransferListener$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferListener"

export interface $IRecipeTransferManager {

 "getRecipeTransferListeners"(): $List<($IRecipeTransferListener)>
 "getRecipeTransferHandler"<C extends $AbstractContainerMenu, R>(arg0: C, arg1: $IRecipeCategory$Type<(R)>): $Optional<($IRecipeTransferHandler<(C), (R)>)>
}

export namespace $IRecipeTransferManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferManager$Type = ($IRecipeTransferManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferManager_ = $IRecipeTransferManager$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IJeiRuntime" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$IEditModeConfig, $IEditModeConfig$Type} from "packages/mezz/jei/api/runtime/$IEditModeConfig"
import {$IJeiConfigManager, $IJeiConfigManager$Type} from "packages/mezz/jei/api/runtime/config/$IJeiConfigManager"
import {$IIngredientFilter, $IIngredientFilter$Type} from "packages/mezz/jei/api/runtime/$IIngredientFilter"
import {$IBookmarkManager, $IBookmarkManager$Type} from "packages/mezz/jei/api/runtime/$IBookmarkManager"
import {$IBookmarkOverlay, $IBookmarkOverlay$Type} from "packages/mezz/jei/api/runtime/$IBookmarkOverlay"
import {$IRecipesGui, $IRecipesGui$Type} from "packages/mezz/jei/api/runtime/$IRecipesGui"
import {$IIngredientListOverlay, $IIngredientListOverlay$Type} from "packages/mezz/jei/api/runtime/$IIngredientListOverlay"
import {$IRecipeManager, $IRecipeManager$Type} from "packages/mezz/jei/api/recipe/$IRecipeManager"
import {$IJeiKeyMappings, $IJeiKeyMappings$Type} from "packages/mezz/jei/api/runtime/$IJeiKeyMappings"
import {$IIngredientManager, $IIngredientManager$Type} from "packages/mezz/jei/api/runtime/$IIngredientManager"
import {$IScreenHelper, $IScreenHelper$Type} from "packages/mezz/jei/api/runtime/$IScreenHelper"
import {$IRecipeTransferManager, $IRecipeTransferManager$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferManager"
import {$IIngredientVisibility, $IIngredientVisibility$Type} from "packages/mezz/jei/api/runtime/$IIngredientVisibility"

export interface $IJeiRuntime {

 "getBookmarkManager"(): $IBookmarkManager
 "getBookmarkOverlay"(): $IBookmarkOverlay
/**
 * 
 * @deprecated
 */
 "getIngredientVisibility"(): $IIngredientVisibility
 "getScreenHelper"(): $IScreenHelper
 "getConfigManager"(): $IJeiConfigManager
 "getIngredientListOverlay"(): $IIngredientListOverlay
 "getIngredientFilter"(): $IIngredientFilter
 "getJeiHelpers"(): $IJeiHelpers
 "getRecipeTransferManager"(): $IRecipeTransferManager
 "getKeyMappings"(): $IJeiKeyMappings
 "getRecipeManager"(): $IRecipeManager
 "getIngredientManager"(): $IIngredientManager
 "getEditModeConfig"(): $IEditModeConfig
 "getRecipesGui"(): $IRecipesGui
}

export namespace $IJeiRuntime {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiRuntime$Type = ($IJeiRuntime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiRuntime_ = $IJeiRuntime$Type;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView" {
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeSlotView, $IRecipeSlotView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $IRecipeSlotsView {

 "getSlotViews"(): $List<($IRecipeSlotView)>
 "getSlotViews"(arg0: $RecipeIngredientRole$Type): $List<($IRecipeSlotView)>
 "findSlotByName"(arg0: string): $Optional<($IRecipeSlotView)>

(): $List<($IRecipeSlotView)>
}

export namespace $IRecipeSlotsView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotsView$Type = ($IRecipeSlotsView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotsView_ = $IRecipeSlotsView$Type;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferListener" {
import {$IRecipeTransferContext, $IRecipeTransferContext$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferContext"
import {$RecipeTransferResult, $RecipeTransferResult$Type} from "packages/mezz/jei/api/recipe/transfer/$RecipeTransferResult"

export interface $IRecipeTransferListener {

 "afterRecipeTransfer"(arg0: $IRecipeTransferContext$Type<(any), (any)>, arg1: $RecipeTransferResult$Type): void
 "beforeRecipeTransfer"(arg0: $IRecipeTransferContext$Type<(any), (any)>): void
}

export namespace $IRecipeTransferListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferListener$Type = ($IRecipeTransferListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferListener_ = $IRecipeTransferListener$Type;
}}
declare module "packages/mezz/jei/api/ingredients/$IIngredientHelper" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$UidContext, $UidContext$Type} from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $IIngredientHelper<V> {

 "getDisplayName"(arg0: V): string
 "getUid"(arg0: V, arg1: $UidContext$Type): any
 "getUid"(arg0: $ITypedIngredient$Type<(V)>, arg1: $UidContext$Type): any
 "copyWithAmount"(arg0: V, arg1: long): V
 "getUniqueId"(arg0: $ITypedIngredient$Type<(V)>, arg1: $UidContext$Type): string
 "getUniqueId"(arg0: V, arg1: $UidContext$Type): string
 "getResourceLocation"(arg0: V): $ResourceLocation
 "getAmount"(arg0: V): long
 "isValidIngredient"(arg0: V): boolean
 "isHiddenFromRecipeViewersByTags"(arg0: $ITypedIngredient$Type<(V)>): boolean
 "isHiddenFromRecipeViewersByTags"(arg0: V): boolean
 "normalizeIngredient"(arg0: V): V
 "isIngredientOnServer"(arg0: V): boolean
 "getTagKeyEquivalent"(arg0: $Collection$Type<(V)>): $Optional<($TagKey<(any)>)>
 "getIngredientType"(): $IIngredientType<(V)>
 "hasSubtypes"(arg0: V): boolean
 "getGroupingUid"(arg0: $ITypedIngredient$Type<(V)>): string
 "getGroupingUid"(arg0: V): string
 "copyIngredient"(arg0: V): V
 "getErrorInfo"(arg0: V): string
 "getWildcardId"(arg0: V): string
 "getDisplayModId"(arg0: V): string
 "getColors"(arg0: V): $Iterable<(integer)>
/**
 * 
 * @deprecated
 */
 "getTagEquivalent"(arg0: $Collection$Type<(V)>): $Optional<($ResourceLocation)>
 "getTagStream"(arg0: V): $Stream<($ResourceLocation)>
 "getCheatItemStack"(arg0: V): $ItemStack
}

export namespace $IIngredientHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientHelper$Type<V> = ($IIngredientHelper<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientHelper_<V> = $IIngredientHelper$Type<(V)>;
}}
declare module "packages/mezz/jei/api/recipe/$IFocusFactory" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IFocus, $IFocus$Type} from "packages/mezz/jei/api/recipe/$IFocus"
import {$IFocusGroup, $IFocusGroup$Type} from "packages/mezz/jei/api/recipe/$IFocusGroup"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IFocusFactory {

 "createFocusGroup"(arg0: $Collection$Type<(any)>): $IFocusGroup
 "getEmptyFocusGroup"(): $IFocusGroup
 "createFocus"<V>(arg0: $RecipeIngredientRole$Type, arg1: $ITypedIngredient$Type<(V)>): $IFocus<(V)>
 "createFocus"<V>(arg0: $RecipeIngredientRole$Type, arg1: $IIngredientType$Type<(V)>, arg2: V): $IFocus<(V)>
}

export namespace $IFocusFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFocusFactory$Type = ($IFocusFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFocusFactory_ = $IFocusFactory$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientListOverlay" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientListOverlay {

 "hasKeyboardFocus"(): boolean
 "isListDisplayed"(): boolean
 "getVisibleIngredients"<T>(arg0: $IIngredientType$Type<(T)>): $List<(T)>
 "getIngredientUnderMouse"<T>(arg0: $IIngredientType$Type<(T)>): T
 "getIngredientUnderMouse"(): $Optional<($ITypedIngredient<(any)>)>
}

export namespace $IIngredientListOverlay {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientListOverlay$Type = ($IIngredientListOverlay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientListOverlay_ = $IIngredientListOverlay$Type;
}}
declare module "packages/mezz/jei/api/recipe/vanilla/$IVanillaRecipeFactory" {
import {$IJeiBrewingRecipe, $IJeiBrewingRecipe$Type} from "packages/mezz/jei/api/recipe/vanilla/$IJeiBrewingRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SmeltingRecipe, $SmeltingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmeltingRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IJeiGrindstoneRecipe, $IJeiGrindstoneRecipe$Type} from "packages/mezz/jei/api/recipe/vanilla/$IJeiGrindstoneRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IJeiAnvilRecipe, $IJeiAnvilRecipe$Type} from "packages/mezz/jei/api/recipe/vanilla/$IJeiAnvilRecipe"
import {$IJeiShapedRecipeBuilder, $IJeiShapedRecipeBuilder$Type} from "packages/mezz/jei/api/recipe/vanilla/$IJeiShapedRecipeBuilder"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export interface $IVanillaRecipeFactory {

 "createShapedRecipeBuilder"(arg0: $CraftingBookCategory$Type, arg1: $List$Type<($ItemStack$Type)>): $IJeiShapedRecipeBuilder
 "createGrindstoneRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $List$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>, arg3: integer, arg4: integer, arg5: $ResourceLocation$Type): $IJeiGrindstoneRecipe
 "createSmeltingRecipe"(arg0: $Ingredient$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type, arg4: integer, arg5: float, arg6: $ResourceLocation$Type): $SmeltingRecipe
 "createSmeltingRecipe"(arg0: $Ingredient$Type, arg1: $ItemStack$Type, arg2: integer, arg3: float, arg4: $ResourceLocation$Type): $SmeltingRecipe
/**
 * 
 * @deprecated
 */
 "createBrewingRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $List$Type<($ItemStack$Type)>, arg2: $ItemStack$Type): $IJeiBrewingRecipe
/**
 * 
 * @deprecated
 */
 "createBrewingRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $ItemStack$Type): $IJeiBrewingRecipe
 "createBrewingRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $List$Type<($ItemStack$Type)>, arg2: $ItemStack$Type, arg3: $ResourceLocation$Type): $IJeiBrewingRecipe
 "createBrewingRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ResourceLocation$Type): $IJeiBrewingRecipe
 "createAnvilRecipe"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>, arg3: $ResourceLocation$Type): $IJeiAnvilRecipe
/**
 * 
 * @deprecated
 */
 "createAnvilRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $List$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): $IJeiAnvilRecipe
/**
 * 
 * @deprecated
 */
 "createAnvilRecipe"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): $IJeiAnvilRecipe
 "createAnvilRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $List$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>, arg3: $ResourceLocation$Type): $IJeiAnvilRecipe
}

export namespace $IVanillaRecipeFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVanillaRecipeFactory$Type = ($IVanillaRecipeFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVanillaRecipeFactory_ = $IVanillaRecipeFactory$Type;
}}
declare module "packages/mezz/jei/api/gui/widgets/$ISlottedWidgetFactory" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeExtrasBuilder, $IRecipeExtrasBuilder$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeExtrasBuilder"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"

/**
 * 
 * @deprecated
 */
export interface $ISlottedWidgetFactory<R> {

/**
 * 
 * @deprecated
 */
 "createWidgetForSlots"(arg0: $IRecipeExtrasBuilder$Type, arg1: R, arg2: $List$Type<($IRecipeSlotDrawable$Type)>): void

(arg0: $IRecipeExtrasBuilder$Type, arg1: R, arg2: $List$Type<($IRecipeSlotDrawable$Type)>): void
}

export namespace $ISlottedWidgetFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlottedWidgetFactory$Type<R> = ($ISlottedWidgetFactory<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlottedWidgetFactory_<R> = $ISlottedWidgetFactory$Type<(R)>;
}}
declare module "packages/mezz/jei/api/gui/builder/$IClickableIngredientFactory$IBuilder" {
import {$IClickableIngredient, $IClickableIngredient$Type} from "packages/mezz/jei/api/runtime/$IClickableIngredient"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IClickableIngredientFactory$IBuilder<T> {

 "buildWithArea"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Optional<($IClickableIngredient<(T)>)>
 "buildWithArea"(arg0: $Rect2i$Type): $Optional<($IClickableIngredient<(T)>)>
}

export namespace $IClickableIngredientFactory$IBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClickableIngredientFactory$IBuilder$Type<T> = ($IClickableIngredientFactory$IBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClickableIngredientFactory$IBuilder_<T> = $IClickableIngredientFactory$IBuilder$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGuiClickableArea" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IRecipesGui, $IRecipesGui$Type} from "packages/mezz/jei/api/runtime/$IRecipesGui"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$IFocusFactory, $IFocusFactory$Type} from "packages/mezz/jei/api/recipe/$IFocusFactory"

export interface $IGuiClickableArea {

 "isTooltipEnabled"(): boolean
 "getArea"(): $Rect2i
 "onClick"(arg0: $IFocusFactory$Type, arg1: $IRecipesGui$Type): void
 "getTooltip"(arg0: $ITooltipBuilder$Type): void
/**
 * 
 * @deprecated
 */
 "getTooltipStrings"(): $List<($Component)>
}

export namespace $IGuiClickableArea {
function createBasic(arg0: integer, arg1: integer, arg2: integer, arg3: integer, ...arg4: ($RecipeType$Type<(any)>)[]): $IGuiClickableArea
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiClickableArea$Type = ($IGuiClickableArea);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiClickableArea_ = $IGuiClickableArea$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IEditModeConfig" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IEditModeConfig$HideMode, $IEditModeConfig$HideMode$Type} from "packages/mezz/jei/api/runtime/$IEditModeConfig$HideMode"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IEditModeConfig {

 "showIngredientUsingConfigFile"<V>(arg0: $ITypedIngredient$Type<(V)>, arg1: $IEditModeConfig$HideMode$Type): void
 "isIngredientHiddenUsingConfigFile"<V>(arg0: $ITypedIngredient$Type<(V)>): boolean
 "hideIngredientUsingConfigFile"<V>(arg0: $ITypedIngredient$Type<(V)>, arg1: $IEditModeConfig$HideMode$Type): void
 "getIngredientHiddenUsingConfigFile"<V>(arg0: $ITypedIngredient$Type<(V)>): $Set<($IEditModeConfig$HideMode)>
}

export namespace $IEditModeConfig {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEditModeConfig$Type = ($IEditModeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEditModeConfig_ = $IEditModeConfig$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated" {
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IDrawableAnimated extends $IDrawable {

 "getWidth"(): integer
 "getHeight"(): integer
 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "draw"(arg0: $GuiGraphics$Type): void
}

export namespace $IDrawableAnimated {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawableAnimated$Type = ($IDrawableAnimated);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawableAnimated_ = $IDrawableAnimated$Type;
}}
declare module "packages/mezz/jei/api/gui/inputs/$IJeiGuiEventListener" {
import {$ScreenRectangle, $ScreenRectangle$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"

export interface $IJeiGuiEventListener {

 "getArea"(): $ScreenRectangle
 "mouseMoved"(arg0: double, arg1: double): void
 "keyPressed"(arg0: double, arg1: double, arg2: integer, arg3: integer, arg4: integer): boolean
 "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean

(): $ScreenRectangle
}

export namespace $IJeiGuiEventListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiGuiEventListener$Type = ($IJeiGuiEventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiGuiEventListener_ = $IJeiGuiEventListener$Type;
}}
declare module "packages/mezz/jei/api/ingredients/$IIngredientRenderer" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$BatchRenderElement, $BatchRenderElement$Type} from "packages/mezz/jei/api/ingredients/rendering/$BatchRenderElement"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IIngredientRenderer<T> {

 "getWidth"(): integer
 "getHeight"(): integer
 "render"(arg0: $GuiGraphics$Type, arg1: T): void
 "render"(arg0: $GuiGraphics$Type, arg1: T, arg2: integer, arg3: integer): void
 "getFontRenderer"(arg0: $Minecraft$Type, arg1: T): $Font
 "getTooltip"(arg0: $ITooltipBuilder$Type, arg1: T, arg2: $Player$Type, arg3: $TooltipFlag$Type): void
/**
 * 
 * @deprecated
 */
 "getTooltip"(arg0: $ITooltipBuilder$Type, arg1: T, arg2: $TooltipFlag$Type): void
 "getTooltip"(arg0: T, arg1: $Player$Type, arg2: $TooltipFlag$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getTooltip"(arg0: T, arg1: $TooltipFlag$Type): $List<($Component)>
 "renderBatch"(arg0: $GuiGraphics$Type, arg1: $List$Type<($BatchRenderElement$Type<(T)>)>): void
}

export namespace $IIngredientRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientRenderer$Type<T> = ($IIngredientRenderer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientRenderer_<T> = $IIngredientRenderer$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/builder/$IIngredientAcceptor" {
import {$IIngredientConsumer, $IIngredientConsumer$Type} from "packages/mezz/jei/api/gui/builder/$IIngredientConsumer"
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IIngredientAcceptor<THIS extends $IIngredientAcceptor<(THIS)>> extends $IIngredientConsumer {

 "addItemLike"(arg0: $ItemLike$Type): $IIngredientConsumer
 "addIngredient"<I>(arg0: $IIngredientType$Type<(I)>, arg1: I): THIS
 "addIngredientsUnsafe"(arg0: $List$Type<(any)>): THIS
 "addFluidStack"(arg0: $Fluid$Type): THIS
 "addFluidStack"(arg0: $Fluid$Type, arg1: long): THIS
 "addItemStack"(arg0: $ItemStack$Type): THIS
}

export namespace $IIngredientAcceptor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientAcceptor$Type<THIS> = ($IIngredientAcceptor<(THIS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientAcceptor_<THIS> = $IIngredientAcceptor$Type<(THIS)>;
}}
declare module "packages/mezz/jei/api/gui/builder/$IIngredientConsumer" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientConsumer {

 "addItemStacks"(arg0: $List$Type<($ItemStack$Type)>): $IIngredientConsumer
 "addTypedIngredient"<I>(arg0: $ITypedIngredient$Type<(I)>): $IIngredientConsumer
 "addItemLike"(arg0: $ItemLike$Type): $IIngredientConsumer
 "addIngredients"<I>(arg0: $IIngredientType$Type<(I)>, arg1: $List$Type<(I)>): $IIngredientConsumer
 "addIngredients"(arg0: $Ingredient$Type): $IIngredientConsumer
 "addIngredient"<I>(arg0: $IIngredientType$Type<(I)>, arg1: I): $IIngredientConsumer
 "addIngredientsUnsafe"(arg0: $List$Type<(any)>): $IIngredientConsumer
 "addTypedIngredients"(arg0: $List$Type<($ITypedIngredient$Type<(any)>)>): $IIngredientConsumer
 "addOptionalTypedIngredients"(arg0: $List$Type<($Optional$Type<($ITypedIngredient$Type<(any)>)>)>): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$Type, arg1: long): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$Type, arg1: long, arg2: $CompoundTag$Type): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$Type): $IIngredientConsumer
 "addItemStack"(arg0: $ItemStack$Type): $IIngredientConsumer
}

export namespace $IIngredientConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientConsumer$Type = ($IIngredientConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientConsumer_ = $IIngredientConsumer$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IBookmarkOverlay" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IBookmarkOverlay {

 "getItemStackUnderMouse"(): $ItemStack
 "getIngredientUnderMouse"<T>(arg0: $IIngredientType$Type<(T)>): T
 "getIngredientUnderMouse"(): $Optional<($ITypedIngredient<(any)>)>
}

export namespace $IBookmarkOverlay {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBookmarkOverlay$Type = ($IBookmarkOverlay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBookmarkOverlay_ = $IBookmarkOverlay$Type;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IRecipeTransferError$Type extends $Enum<($IRecipeTransferError$Type)> {
static readonly "INTERNAL": $IRecipeTransferError$Type
static readonly "USER_FACING": $IRecipeTransferError$Type
static readonly "COSMETIC": $IRecipeTransferError$Type
readonly "allowsTransfer": boolean


public static "values"(): ($IRecipeTransferError$Type)[]
public static "valueOf"(arg0: string): $IRecipeTransferError$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferError$Type$Type = (("internal") | ("user_facing") | ("cosmetic")) | ($IRecipeTransferError$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferError$Type_ = $IRecipeTransferError$Type$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IJeiKeyMappings" {
import {$IJeiKeyMapping, $IJeiKeyMapping$Type} from "packages/mezz/jei/api/runtime/$IJeiKeyMapping"

export interface $IJeiKeyMappings {

 "getShowUses"(): $IJeiKeyMapping
 "getBookmark"(): $IJeiKeyMapping
 "getShowRecipe"(): $IJeiKeyMapping
}

export namespace $IJeiKeyMappings {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiKeyMappings$Type = ($IJeiKeyMappings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiKeyMappings_ = $IJeiKeyMappings$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IRecipeCatalystLookup" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IRecipeCatalystLookup {

 "includeHidden"(): $IRecipeCatalystLookup
 "get"<S>(arg0: $IIngredientType$Type<(S)>): $Stream<(S)>
 "get"(): $Stream<($ITypedIngredient<(any)>)>
 "getItemStack"(): $Stream<($ItemStack)>
}

export namespace $IRecipeCatalystLookup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCatalystLookup$Type = ($IRecipeCatalystLookup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCatalystLookup_ = $IRecipeCatalystLookup$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientFilter" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IIngredientFilter {

 "getFilteredIngredients"<T>(arg0: $IIngredientType$Type<(T)>): $List<(T)>
 "getFilteredItemStacks"(): $List<($ItemStack)>
 "setFilterText"(arg0: string): void
 "getFilterText"(): string
}

export namespace $IIngredientFilter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientFilter$Type = ($IIngredientFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientFilter_ = $IIngredientFilter$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IRecipeLookup" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $IRecipeLookup<R> {

 "includeHidden"(): $IRecipeLookup<(R)>
 "limitFocus"(arg0: $Collection$Type<(any)>): $IRecipeLookup<(R)>
 "get"(): $Stream<(R)>
}

export namespace $IRecipeLookup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeLookup$Type<R> = ($IRecipeLookup<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeLookup_<R> = $IRecipeLookup$Type<(R)>;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler" {
import {$IGhostIngredientHandler$Target, $IGhostIngredientHandler$Target$Type} from "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler$Target"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IGhostIngredientHandler<T extends $Screen> {

 "onComplete"(): void
 "shouldHighlightTargets"(): boolean
 "getTargetsTyped"<I>(arg0: T, arg1: $ITypedIngredient$Type<(I)>, arg2: boolean): $List<($IGhostIngredientHandler$Target<(I)>)>
 "quickMove"<I>(arg0: T, arg1: $ITypedIngredient$Type<(I)>): boolean
}

export namespace $IGhostIngredientHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGhostIngredientHandler$Type<T> = ($IGhostIngredientHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGhostIngredientHandler_<T> = $IGhostIngredientHandler$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawableBuilder" {
import {$ITickTimer, $ITickTimer$Type} from "packages/mezz/jei/api/gui/$ITickTimer"
import {$IDrawableAnimated, $IDrawableAnimated$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated"
import {$IDrawableStatic, $IDrawableStatic$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableStatic"
import {$IDrawableAnimated$StartDirection, $IDrawableAnimated$StartDirection$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated$StartDirection"

export interface $IDrawableBuilder {

 "buildAnimated"(arg0: $ITickTimer$Type, arg1: $IDrawableAnimated$StartDirection$Type): $IDrawableAnimated
 "buildAnimated"(arg0: integer, arg1: $IDrawableAnimated$StartDirection$Type, arg2: boolean): $IDrawableAnimated
 "build"(): $IDrawableStatic
 "trim"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IDrawableBuilder
 "addPadding"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IDrawableBuilder
 "setTextureSize"(arg0: integer, arg1: integer): $IDrawableBuilder
}

export namespace $IDrawableBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawableBuilder$Type = ($IDrawableBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawableBuilder_ = $IDrawableBuilder$Type;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable" {
import {$IIngredientConsumer, $IIngredientConsumer$Type} from "packages/mezz/jei/api/gui/builder/$IIngredientConsumer"
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$IRecipeSlotTooltipCallback, $IRecipeSlotTooltipCallback$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotTooltipCallback"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IRecipeSlotView, $IRecipeSlotView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IRecipeSlotDrawable extends $IRecipeSlotView {

/**
 * 
 * @deprecated
 */
 "getRect"(): $Rect2i
/**
 * 
 * @deprecated
 */
 "addTooltipCallback"(arg0: $IRecipeSlotTooltipCallback$Type): void
/**
 * 
 * @deprecated
 */
 "drawHoverOverlays"(arg0: $GuiGraphics$Type): void
/**
 * 
 * @deprecated
 */
 "draw"(arg0: $GuiGraphics$Type): void
 "draw"(arg0: $GuiGraphics$Type, arg1: boolean): void
 "createDisplayOverrides"(): $IIngredientConsumer
 "clearDisplayOverrides"(): void
 "getAreaIncludingBackground"(): $Rect2i
 "setPosition"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "getTooltip"(arg0: $ITooltipBuilder$Type): void
/**
 * 
 * @deprecated
 */
 "getTooltip"(): $List<($Component)>
 "isMouseOver"(arg0: double, arg1: double): boolean
 "drawTooltip"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "getSlotName"(): $Optional<(string)>
 "getItemStacks"(): $Stream<($ItemStack)>
 "getDisplayedItemStack"(): $Optional<($ItemStack)>
 "getDisplayedIngredients"(): $Stream<($ITypedIngredient<(any)>)>
 "getAllIngredientsList"(): $List<($ITypedIngredient<(any)>)>
 "isEmpty"(): boolean
 "getIngredients"<T>(arg0: $IIngredientType$Type<(T)>): $Stream<(T)>
 "getRole"(): $RecipeIngredientRole
 "getDisplayedIngredient"(): $Optional<($ITypedIngredient<(any)>)>
 "getDisplayedIngredient"<T>(arg0: $IIngredientType$Type<(T)>): $Optional<(T)>
 "getTagKey"(): $Optional<($TagKey<(any)>)>
 "getAllIngredients"(): $Stream<($ITypedIngredient<(any)>)>
 "drawHighlight"(arg0: $GuiGraphics$Type, arg1: integer): void
}

export namespace $IRecipeSlotDrawable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotDrawable$Type = ($IRecipeSlotDrawable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotDrawable_ = $IRecipeSlotDrawable$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawableStatic" {
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IDrawableStatic extends $IDrawable {

 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "getWidth"(): integer
 "getHeight"(): integer
 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "draw"(arg0: $GuiGraphics$Type): void
}

export namespace $IDrawableStatic {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawableStatic$Type = ($IDrawableStatic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawableStatic_ = $IDrawableStatic$Type;
}}
declare module "packages/mezz/jei/api/gui/inputs/$IJeiUserInput" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$IJeiKeyMapping, $IJeiKeyMapping$Type} from "packages/mezz/jei/api/runtime/$IJeiKeyMapping"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IJeiUserInput {

 "getModifiers"(): integer
 "getKey"(): $InputConstants$Key
 "is"(arg0: $KeyMapping$Type): boolean
 "is"(arg0: $IJeiKeyMapping$Type): boolean
 "isSimulate"(): boolean
}

export namespace $IJeiUserInput {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiUserInput$Type = ($IJeiUserInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiUserInput_ = $IJeiUserInput$Type;
}}
declare module "packages/mezz/jei/library/plugins/vanilla/cooking/$JeiSmeltingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JeiSmeltingRecipe, $JeiSmeltingRecipe$Type} from "packages/mezz/jei/library/plugins/vanilla/cooking/$JeiSmeltingRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $JeiSmeltingRecipe$Serializer implements $RecipeSerializer<($JeiSmeltingRecipe)> {


public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $JeiSmeltingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $JeiSmeltingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $JeiSmeltingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $JeiSmeltingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JeiSmeltingRecipe$Serializer$Type = ($JeiSmeltingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JeiSmeltingRecipe$Serializer_ = $JeiSmeltingRecipe$Serializer$Type;
}}
declare module "packages/mezz/jei/api/recipe/vanilla/$IJeiShapedRecipeBuilder" {
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $IJeiShapedRecipeBuilder {

 "build"(): $CraftingRecipe
 "group"(arg0: string): $IJeiShapedRecipeBuilder
 "pattern"(arg0: string): $IJeiShapedRecipeBuilder
 "define"(arg0: character, arg1: $Ingredient$Type): $IJeiShapedRecipeBuilder
}

export namespace $IJeiShapedRecipeBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiShapedRecipeBuilder$Type = ($IJeiShapedRecipeBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiShapedRecipeBuilder_ = $IJeiShapedRecipeBuilder$Type;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGuiProperties" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $IGuiProperties {

 "getGuiLeft"(): integer
 "getGuiTop"(): integer
 "getScreenWidth"(): integer
 "getScreenHeight"(): integer
 "getGuiXSize"(): integer
 "getGuiYSize"(): integer
 "getScreenClass"(): $Class<(any)>
}

export namespace $IGuiProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiProperties$Type = ($IGuiProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiProperties_ = $IGuiProperties$Type;
}}
declare module "packages/mezz/jei/api/runtime/config/$IJeiConfigManager" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IJeiConfigFile, $IJeiConfigFile$Type} from "packages/mezz/jei/api/runtime/config/$IJeiConfigFile"

export interface $IJeiConfigManager {

 "getConfigFiles"(): $Collection<($IJeiConfigFile)>

(): $Collection<($IJeiConfigFile)>
}

export namespace $IJeiConfigManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiConfigManager$Type = ($IJeiConfigManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiConfigManager_ = $IJeiConfigManager$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientManager$IIngredientListener" {
import {$IIngredientHelper, $IIngredientHelper$Type} from "packages/mezz/jei/api/ingredients/$IIngredientHelper"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientManager$IIngredientListener {

 "onIngredientsRemoved"<V>(arg0: $IIngredientHelper$Type<(V)>, arg1: $Collection$Type<($ITypedIngredient$Type<(V)>)>): void
 "onIngredientsAdded"<V>(arg0: $IIngredientHelper$Type<(V)>, arg1: $Collection$Type<($ITypedIngredient$Type<(V)>)>): void
}

export namespace $IIngredientManager$IIngredientListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientManager$IIngredientListener$Type = ($IIngredientManager$IIngredientListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientManager$IIngredientListener_ = $IIngredientManager$IIngredientListener$Type;
}}
declare module "packages/mezz/jei/api/recipe/vanilla/$IJeiGrindstoneRecipe" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IJeiGrindstoneRecipe {

 "isOutputRenderOnly"(): boolean
 "getTopInputs"(): $List<($ItemStack)>
 "getBottomInputs"(): $List<($ItemStack)>
 "getMinXpReward"(): integer
 "getMaxXpReward"(): integer
 "getOutputs"(): $List<($ItemStack)>
 "getUid"(): $ResourceLocation
}

export namespace $IJeiGrindstoneRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiGrindstoneRecipe$Type = ($IJeiGrindstoneRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiGrindstoneRecipe_ = $IJeiGrindstoneRecipe$Type;
}}
declare module "packages/mezz/jei/api/recipe/vanilla/$IJeiAnvilRecipe" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IJeiAnvilRecipe {

 "getRightInputs"(): $List<($ItemStack)>
 "getLeftInputs"(): $List<($ItemStack)>
 "getOutputs"(): $List<($ItemStack)>
 "getUid"(): $ResourceLocation
}

export namespace $IJeiAnvilRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiAnvilRecipe$Type = ($IJeiAnvilRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiAnvilRecipe_ = $IJeiAnvilRecipe$Type;
}}
declare module "packages/mezz/jei/library/plugins/vanilla/crafting/$JeiShapedRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $JeiShapedRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
 "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $List$Type<($ItemStack$Type)>)

public "getResults"(): $List<($ItemStack)>
public "category"(): $CraftingBookCategory
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "showNotification"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "results"(): $List<($ItemStack)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JeiShapedRecipe$Type = ($JeiShapedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JeiShapedRecipe_ = $JeiShapedRecipe$Type;
}}
declare module "packages/mezz/jei/api/gui/placement/$IPlaceable" {
import {$VerticalAlignment, $VerticalAlignment$Type} from "packages/mezz/jei/api/gui/placement/$VerticalAlignment"
import {$HorizontalAlignment, $HorizontalAlignment$Type} from "packages/mezz/jei/api/gui/placement/$HorizontalAlignment"

export interface $IPlaceable<THIS extends $IPlaceable<(THIS)>> {

 "getWidth"(): integer
 "getHeight"(): integer
 "setPosition"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $HorizontalAlignment$Type, arg5: $VerticalAlignment$Type): THIS
 "setPosition"(arg0: integer, arg1: integer): THIS
}

export namespace $IPlaceable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlaceable$Type<THIS> = ($IPlaceable<(THIS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlaceable_<THIS> = $IPlaceable$Type<(THIS)>;
}}
declare module "packages/mezz/jei/api/gui/drawable/$TilingDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TilingDirection extends $Enum<($TilingDirection)> {
static readonly "DOWN_RIGHT": $TilingDirection
static readonly "DOWN_LEFT": $TilingDirection
static readonly "UP_RIGHT": $TilingDirection
static readonly "UP_LEFT": $TilingDirection


public static "values"(): ($TilingDirection)[]
public static "valueOf"(arg0: string): $TilingDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TilingDirection$Type = (("down_left") | ("down_right") | ("up_left") | ("up_right")) | ($TilingDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TilingDirection_ = $TilingDirection$Type;
}}
declare module "packages/mezz/jei/api/gui/widgets/$IDrawableWidget" {
import {$IRecipeWidgetTooltipCallback, $IRecipeWidgetTooltipCallback$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeWidgetTooltipCallback"
import {$IRecipeWidgetBuilder, $IRecipeWidgetBuilder$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeWidgetBuilder"

export interface $IDrawableWidget extends $IRecipeWidgetBuilder<($IDrawableWidget)> {

 "getWidth"(): integer
 "getHeight"(): integer
 "setTooltip"(arg0: $IRecipeWidgetTooltipCallback$Type): $IDrawableWidget
}

export namespace $IDrawableWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawableWidget$Type = ($IDrawableWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawableWidget_ = $IDrawableWidget$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawable" {
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IDrawable {

 "getWidth"(): integer
 "getHeight"(): integer
 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "draw"(arg0: $GuiGraphics$Type): void
}

export namespace $IDrawable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawable$Type = ($IDrawable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawable_ = $IDrawable$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IClickableIngredient" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IClickableIngredient<T> {

 "getArea"(): $Rect2i
/**
 * 
 * @deprecated
 */
 "getIngredientType"(): $IIngredientType<(T)>
/**
 * 
 * @deprecated
 */
 "getIngredient"(): T
 "getTypedIngredient"(): $ITypedIngredient<(T)>
}

export namespace $IClickableIngredient {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClickableIngredient$Type<T> = ($IClickableIngredient<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClickableIngredient_<T> = $IClickableIngredient$Type<(T)>;
}}
declare module "packages/mezz/jei/api/helpers/$IPlatformFluidHelper" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IIngredientTypeWithSubtypes, $IIngredientTypeWithSubtypes$Type} from "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes"

export interface $IPlatformFluidHelper<T> {

 "create"(arg0: $Fluid$Type, arg1: long): T
 "create"(arg0: $Fluid$Type, arg1: long, arg2: $CompoundTag$Type): T
 "bucketVolume"(): long
 "getFluidIngredientType"(): $IIngredientTypeWithSubtypes<($Fluid), (T)>
}

export namespace $IPlatformFluidHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlatformFluidHelper$Type<T> = ($IPlatformFluidHelper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlatformFluidHelper_<T> = $IPlatformFluidHelper$Type<(T)>;
}}
declare module "packages/mezz/jei/api/recipe/advanced/$IRecipeButtonControllerFactory" {
import {$IIconButtonController, $IIconButtonController$Type} from "packages/mezz/jei/api/gui/buttons/$IIconButtonController"
import {$IRecipeLayoutDrawable, $IRecipeLayoutDrawable$Type} from "packages/mezz/jei/api/gui/$IRecipeLayoutDrawable"

export interface $IRecipeButtonControllerFactory {

 "createButtonController"<T>(arg0: $IRecipeLayoutDrawable$Type<(T)>): $IIconButtonController

(arg0: $IRecipeLayoutDrawable$Type<(T)>): $IIconButtonController
}

export namespace $IRecipeButtonControllerFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeButtonControllerFactory$Type = ($IRecipeButtonControllerFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeButtonControllerFactory_ = $IRecipeButtonControllerFactory$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IScreenHelper" {
import {$IClickableIngredient, $IClickableIngredient$Type} from "packages/mezz/jei/api/runtime/$IClickableIngredient"
import {$IGuiProperties, $IGuiProperties$Type} from "packages/mezz/jei/api/gui/handlers/$IGuiProperties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$IGhostIngredientHandler, $IGhostIngredientHandler$Type} from "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler"
import {$IGuiClickableArea, $IGuiClickableArea$Type} from "packages/mezz/jei/api/gui/handlers/$IGuiClickableArea"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"

export interface $IScreenHelper {

 "getGuiProperties"<T extends $Screen>(arg0: T): $Optional<($IGuiProperties)>
/**
 * 
 * @deprecated
 */
 "getGhostIngredientHandler"<T extends $Screen>(arg0: T): $Optional<($IGhostIngredientHandler<(T)>)>
 "getGhostIngredientHandlers"<T extends $Screen>(arg0: T): $List<($IGhostIngredientHandler<(T)>)>
 "getGuiClickableArea"(arg0: $AbstractContainerScreen$Type<(any)>, arg1: double, arg2: double): $Stream<($IGuiClickableArea)>
 "getGuiExclusionAreas"(arg0: $Screen$Type): $Stream<($Rect2i)>
 "getClickableIngredientUnderMouse"(arg0: $Screen$Type, arg1: double, arg2: double): $Stream<($IClickableIngredient<(any)>)>
}

export namespace $IScreenHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenHelper$Type = ($IScreenHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenHelper_ = $IScreenHelper$Type;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$IRecipeTransferError$Type, $IRecipeTransferError$Type$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError$Type"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeTransferError {

 "showError"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: $IRecipeSlotsView$Type, arg4: integer, arg5: integer): void
 "getType"(): $IRecipeTransferError$Type
 "getMissingCountHint"(): integer
 "getTooltip"(arg0: $ITooltipBuilder$Type): void
/**
 * 
 * @deprecated
 */
 "getTooltip"(): $List<($Component)>
 "getButtonHighlightColor"(): integer

(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: $IRecipeSlotsView$Type, arg4: integer, arg5: integer): void
}

export namespace $IRecipeTransferError {
const DEFAULT_BUTTON_HIGHLIGHT_COLOR: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferError$Type = ($IRecipeTransferError);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferError_ = $IRecipeTransferError$Type;
}}
declare module "packages/mezz/jei/api/ingredients/$IIngredientType" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $IIngredientType<T> {

 "getUid"(): string
 "getIngredientClass"(): $Class<(any)>
 "castIngredient"(arg0: any): $Optional<(T)>
 "getCastIngredient"(arg0: any): T

(): string
}

export namespace $IIngredientType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientType$Type<T> = ($IIngredientType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientType_<T> = $IIngredientType$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler$Target" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IGhostIngredientHandler$Target<I> extends $Consumer<(I)> {

 "accept"(arg0: I): void
 "getArea"(): $Rect2i
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<(I)>
}

export namespace $IGhostIngredientHandler$Target {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGhostIngredientHandler$Target$Type<I> = ($IGhostIngredientHandler$Target<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGhostIngredientHandler$Target_<I> = $IGhostIngredientHandler$Target$Type<(I)>;
}}
