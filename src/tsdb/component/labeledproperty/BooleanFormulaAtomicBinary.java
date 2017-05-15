package tsdb.component.labeledproperty;

import java.util.Set;

public abstract class BooleanFormulaAtomicBinary extends BooleanFormula {	
	public final Formula a;
	public final Formula b;
	public BooleanFormulaAtomicBinary(Formula a, Formula b) {
		this.a = a;
		this.b = b;
	}
	@Override
	public void collectVariables(Set<String> collector) {
		a.collectVariables(collector);
		b.collectVariables(collector);
	}	
}
