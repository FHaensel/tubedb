package tsdb.dsl;

public abstract class BooleanComputation {
	public abstract boolean eval(long timestamp, float[] data);
}
