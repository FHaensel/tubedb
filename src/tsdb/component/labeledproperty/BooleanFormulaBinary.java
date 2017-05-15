package tsdb.component.labeledproperty;

import java.util.Set;

public abstract class BooleanFormulaBinary extends BooleanFormula {	
	public final BooleanFormula a;
	public final BooleanFormula b;
	public BooleanFormulaBinary(BooleanFormula a, BooleanFormula b) {
		this.a = a;
		this.b = b;
	}
	@Override
	public void collectVariables(Set<String> collector) {
		a.collectVariables(collector);
		b.collectVariables(collector);
	}	
}
